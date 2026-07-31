-- ============================================================
-- ZAM-ZAM EDU — Migration: gamification + grammar-check columns
-- Run this ONCE in your EXISTING Supabase project's SQL Editor.
-- Safe to run on a live database with real students — it only ADDS
-- columns/policies, it never touches or deletes existing rows.
-- ============================================================

-- Streak tracking (consecutive days of activity) — used for the
-- leaderboard and for showing 🔥 streak counts to students.
alter table students add column if not exists streak_count integer not null default 0;
alter table students add column if not exists last_activity_date date;

-- Students previously had no UPDATE policy (only insert + select), so the
-- app could never write a streak update. This adds it.
drop policy if exists "Anyone can update students" on students;
create policy "Anyone can update students" on students for update using (true);

-- Grammar-check results for homework (see src/hooks/useGrammarCheck.js) —
-- how many of the filled-in homework lines passed an automatic English
-- grammar/spelling check, shown to students and teachers as a quality
-- signal. Null means "not checked" (e.g. the grammar service was
-- unavailable when the student submitted).
alter table homework add column if not exists grammar_correct_lines integer;
alter table homework add column if not exists grammar_total_checked integer;
