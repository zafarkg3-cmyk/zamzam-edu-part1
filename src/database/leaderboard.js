import { supabase } from "./supabaseClient";

const POINTS_PER_APPROVED_LESSON = 10;

/**
 * Build the global leaderboard: every registered student, across every
 * group, ranked by points and then by streak. Public — no login needed.
 *
 * IMPORTANT: a lesson only earns points once its homework has been
 * reviewed and marked "approved" by a teacher — a passed quiz plus a
 * filled-in homework alone are NOT enough. This is deliberate: without
 * it, a student could rank ahead of classmates on the strength of
 * homework that turns out to be wrong, which is exactly the unfairness
 * this app is trying to avoid. A lesson whose homework is still
 * "pending" or was sent back as "needs_revision" contributes 0 points
 * until it's resubmitted and approved.
 */
export async function fetchLeaderboard() {
  const { data: completedRows, error: progressError } = await supabase
    .from("progress")
    .select("student_id, lesson_id, score, total_questions")
    .eq("completed", true);

  if (progressError) throw progressError;

  const { data: approvedHomework, error: homeworkError } = await supabase
    .from("homework")
    .select("student_id, lesson_id")
    .eq("teacher_status", "approved");

  if (homeworkError) throw homeworkError;

  const approvedSet = new Set(approvedHomework.map((h) => `${h.student_id}:${h.lesson_id}`));

  const pointsByStudent = new Map();
  const perfectByStudent = new Map(); // tracks any 100%-score, teacher-approved lesson
  for (const row of completedRows) {
    if (!approvedSet.has(`${row.student_id}:${row.lesson_id}`)) continue; // not approved yet — no points

    pointsByStudent.set(
      row.student_id,
      (pointsByStudent.get(row.student_id) ?? 0) + POINTS_PER_APPROVED_LESSON
    );
    if (row.total_questions > 0 && row.score === row.total_questions) {
      perfectByStudent.set(row.student_id, true);
    }
  }

  const { data: students, error: studentsError } = await supabase
    .from("students")
    .select("id, name, surname, streak_count, groups(name)");

  if (studentsError) throw studentsError;

  const ranked = students
    .map((s) => ({
      id: s.id,
      name: s.name,
      surname: s.surname,
      groupName: s.groups?.name ?? "",
      streak: s.streak_count ?? 0,
      points: pointsByStudent.get(s.id) ?? 0,
      hasPerfectLesson: perfectByStudent.get(s.id) ?? false,
    }))
    .sort((a, b) => b.points - a.points || b.streak - a.streak);

  return ranked.map((entry, i) => ({
    ...entry,
    rank: i + 1,
    tier: i < 10 ? "gold" : i < 20 ? "silver" : i < 30 ? "bronze" : null,
  }));
}
