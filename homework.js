import { supabase } from "./supabaseClient";

/**
 * Submit (or overwrite, on resubmission) a student's free-text homework
 * answer for one lesson. Not auto-graded (a human still reviews it) — the
 * grammar-check fields are a diagnostic quality signal only.
 *
 * @param {{studentId: string, lessonId: number, answerText: string, grammarCorrectLines?: number|null, grammarTotalChecked?: number|null}} input
 */
export async function submitHomework({
  studentId,
  lessonId,
  answerText,
  grammarCorrectLines = null,
  grammarTotalChecked = null,
}) {
  const { data, error } = await supabase
    .from("homework")
    .upsert(
      [
        {
          student_id: studentId,
          lesson_id: lessonId,
          answer_text: answerText.trim(),
          grammar_correct_lines: grammarCorrectLines,
          grammar_total_checked: grammarTotalChecked,
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
    .select("student_id, lesson_id, answer_text, grammar_correct_lines, grammar_total_checked, submitted_at")
    .in("student_id", studentIds);

  if (error) throw error;
  return data;
}
