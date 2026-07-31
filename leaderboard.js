import { supabase } from "./supabaseClient";

const POINTS_PER_COMPLETED_LESSON = 10;

/**
 * Build the global leaderboard: every registered student, across every
 * group, ranked by points (10 per completed lesson) and then by streak.
 * Public — no login needed, matching the "anyone with the link can see
 * who's leading" request.
 */
export async function fetchLeaderboard() {
  const { data: completedRows, error: progressError } = await supabase
    .from("progress")
    .select("student_id, score, total_questions")
    .eq("completed", true);

  if (progressError) throw progressError;

  const pointsByStudent = new Map();
  const perfectByStudent = new Map(); // tracks any 100%-score completed lesson
  for (const row of completedRows) {
    pointsByStudent.set(
      row.student_id,
      (pointsByStudent.get(row.student_id) ?? 0) + POINTS_PER_COMPLETED_LESSON
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
