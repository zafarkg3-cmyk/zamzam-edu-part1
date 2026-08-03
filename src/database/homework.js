import { supabase } from "./supabaseClient";

/**
 * Submit (or overwrite, on resubmission) a student's free-text homework
 * answer for one lesson. Not auto-graded — grammar-check fields are a
 * diagnostic signal only. Every (re)submission resets the teacher review
 * back to "pending", since a resubmitted answer is new text a human
 * hasn't seen yet.
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
          teacher_status: "pending",
          teacher_comment: null,
          reviewed_at: null,
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
 * Fetch every homework submission (full text + review status) for a group
 * of students, for the parent/teacher dashboard.
 *
 * @param {string[]} studentIds
 */
export async function fetchGroupHomework(studentIds) {
  if (studentIds.length === 0) return [];

  const { data, error } = await supabase
    .from("homework")
    .select(
      "id, student_id, lesson_id, answer_text, grammar_correct_lines, grammar_total_checked, teacher_status, teacher_comment, submitted_at"
    )
    .in("student_id", studentIds);

  if (error) throw error;
  return data;
}

/**
 * Fetch one student's own homework submissions (with teacher feedback),
 * for their dashboard — this is the "closing the loop" read: the student
 * sees whether their homework was approved or needs another look.
 *
 * @param {string} studentId
 */
export async function fetchStudentHomework(studentId) {
  const { data, error } = await supabase
    .from("homework")
    .select("lesson_id, teacher_status, teacher_comment, submitted_at, reviewed_at")
    .eq("student_id", studentId);

  if (error) throw error;
  return data;
}

/**
 * Teacher review action: mark one homework submission as approved or
 * needing revision, with an optional short comment.
 *
 * @param {{homeworkId: string, status: "approved"|"needs_revision", comment?: string}} input
 */
export async function reviewHomework({ homeworkId, status, comment = "" }) {
  const { data, error } = await supabase
    .from("homework")
    .update({
      teacher_status: status,
      teacher_comment: comment.trim() || null,
      reviewed_at: new Date().toISOString(),
    })
    .eq("id", homeworkId)
    .select()
    .single();

  if (error) throw error;
  return data;
}
