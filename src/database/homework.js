import { supabase } from "./supabaseClient";

/**
 * Submit (or overwrite, on resubmission) a student's free-text homework
 * answer for one lesson. Not auto-graded — the teacher reviews it.
 *
 * @param {{studentId: string, lessonId: number, answerText: string}} input
 */
export async function submitHomework({ studentId, lessonId, answerText }) {
  const { data, error } = await supabase
    .from("homework")
    .upsert(
      [
        {
          student_id: studentId,
          lesson_id: lessonId,
          answer_text: answerText.trim(),
          submitted_at: new Date().toISOString(),
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
 * Fetch every homework submission for a group of students, for the
 * parent/teacher dashboard.
 *
 * @param {string[]} studentIds
 */
export async function fetchGroupHomework(studentIds) {
  if (studentIds.length === 0) return [];

  const { data, error } = await supabase
    .from("homework")
    .select("student_id, lesson_id, answer_text, submitted_at")
    .in("student_id", studentIds);

  if (error) throw error;
  return data;
}
