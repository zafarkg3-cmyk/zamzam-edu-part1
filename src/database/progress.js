import { supabase } from "./supabaseClient";

const PASS_THRESHOLD = 0.7; // 70%+ correct unlocks the next lesson

/**
 * Save (or update, on a retry) one student's result for one lesson.
 *
 * @param {{studentId: string, lessonId: number, score: number, totalQuestions: number}} result
 */
export async function saveProgress({ studentId, lessonId, score, totalQuestions }) {
  const completed = totalQuestions > 0 && score / totalQuestions >= PASS_THRESHOLD;

  // Read the current attempt count (if any) so a retry increments it.
  const { data: existing } = await supabase
    .from("progress")
    .select("attempts")
    .eq("student_id", studentId)
    .eq("lesson_id", lessonId)
    .maybeSingle();

  const { data, error } = await supabase
    .from("progress")
    .upsert(
      [
        {
          student_id: studentId,
          lesson_id: lessonId,
          score,
          total_questions: totalQuestions,
          completed,
          attempts: (existing?.attempts ?? 0) + 1,
          updated_at: new Date().toISOString(),
        },
      ],
      { onConflict: "student_id,lesson_id" }
    )
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Fetch one student's progress across all lessons — used to decide which
 * lessons are locked/unlocked/completed on the dashboard.
 *
 * @param {string} studentId
 */
export async function fetchStudentProgress(studentId) {
  const { data, error } = await supabase
    .from("progress")
    .select("lesson_id, score, total_questions, completed, attempts")
    .eq("student_id", studentId);

  if (error) throw error;
  return data;
}

/**
 * Fetch every progress row for a whole group of students at once, for the
 * parent/teacher dashboard.
 *
 * @param {string[]} studentIds
 */
export async function fetchGroupProgress(studentIds) {
  if (studentIds.length === 0) return [];

  const { data, error } = await supabase
    .from("progress")
    .select("student_id, lesson_id, score, total_questions, completed")
    .in("student_id", studentIds);

  if (error) throw error;
  return data;
}
