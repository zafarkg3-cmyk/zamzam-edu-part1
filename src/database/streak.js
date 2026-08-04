import { supabase } from "./supabaseClient";

function todayISO() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD, local calendar day
}

function isYesterday(dateStr, today) {
  const d = new Date(dateStr);
  const t = new Date(today);
  const diffDays = Math.round((t - d) / 86400000);
  return diffDays === 1;
}

/**
 * Fetch a student's current streak count (e.g. to show on their
 * dashboard) without touching it. Uses `maybeSingle()` (not `single()`) so
 * a freshly-created student whose row hasn't been read yet never throws —
 * it just returns 0 instead of breaking the whole dashboard load.
 *
 * @param {string} studentId
 */
export async function getStreak(studentId) {
  const { data, error } = await supabase
    .from("students")
    .select("streak_count")
    .eq("id", studentId)
    .maybeSingle();

  if (error) throw error;
  return data?.streak_count ?? 0;
}

/**
 * Update a student's daily streak after they complete any lesson activity.
 * - Same day as last activity → streak unchanged (already counted today).
 * - Exactly one day after last activity → streak +1.
 * - Any bigger gap (or first-ever activity, or the row can't be read for
 *   some reason) → streak resets to 1.
 *
 * Called once per lesson finish from `Lesson.jsx` — cheap enough (one read
 * + one write) for this app's scale. Never throws for a missing row.
 *
 * @param {string} studentId
 * @returns {Promise<number>} the student's streak count after this update
 */
export async function updateStreak(studentId) {
  const today = todayISO();

  const { data: student, error: readError } = await supabase
    .from("students")
    .select("streak_count, last_activity_date")
    .eq("id", studentId)
    .maybeSingle();

  if (readError) throw readError;

  let nextStreak = student?.streak_count ?? 0;

  if (student?.last_activity_date === today) {
    // Already active today — no change.
    return nextStreak;
  } else if (student?.last_activity_date && isYesterday(student.last_activity_date, today)) {
    nextStreak += 1;
  } else {
    nextStreak = 1;
  }

  const { error: writeError } = await supabase
    .from("students")
    .update({ streak_count: nextStreak, last_activity_date: today })
    .eq("id", studentId);

  if (writeError) throw writeError;
  return nextStreak;
}
