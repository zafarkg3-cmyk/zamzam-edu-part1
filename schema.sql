-- ============================================================
-- ZAM-ZAM EDU — Part 1 — Supabase (Postgres) cloud schema
-- Run this once in your Supabase project's SQL Editor:
-- https://app.supabase.com/project/_/sql
-- ============================================================

-- 1) GROUPS
-- A group is identified by its name (e.g. "5-A sinf"), typed by the first
-- student who registers into it. Parents/teachers later type the exact
-- same group name to see everyone's progress — no separate password.
create table if not exists groups (
  id         uuid primary key default gen_random_uuid(),
  name       text not null unique,
  created_at timestamptz not null default now()
);

-- 2) STUDENTS
create table if not exists students (
  id                 uuid primary key default gen_random_uuid(),
  name               text not null,
  surname            text not null,
  group_id           uuid not null references groups(id) on delete cascade,
  streak_count       integer not null default 0,
  last_activity_date date,
  created_at         timestamptz not null default now()
);

-- 3) PROGRESS
-- One row per student per lesson (lesson_id matches the `id` field of the
-- lesson objects in src/data/lessons.js, currently 1-5). Re-attempting a
-- lesson upserts this same row with the latest score.
create table if not exists progress (
  id              uuid primary key default gen_random_uuid(),
  student_id      uuid not null references students(id) on delete cascade,
  lesson_id       integer not null,
  score           integer not null default 0,
  total_questions integer not null default 0,
  completed       boolean not null default false,
  attempts        integer not null default 1,
  updated_at      timestamptz not null default now(),
  unique (student_id, lesson_id)
);

-- 4) HOMEWORK
-- Free-text homework answers, reviewed by the teacher (no auto-grading).
-- grammar_correct_lines/grammar_total_checked hold the result of an
-- automatic English grammar/spelling check (see useGrammarCheck.js) — a
-- quality signal shown to students and teachers, not a hard requirement.
create table if not exists homework (
  id                     uuid primary key default gen_random_uuid(),
  student_id             uuid not null references students(id) on delete cascade,
  lesson_id              integer not null,
  answer_text            text not null,
  grammar_correct_lines  integer,
  grammar_total_checked  integer,
  submitted_at           timestamptz not null default now(),
  unique (student_id, lesson_id)
);

create index if not exists progress_student_idx on progress (student_id);
create index if not exists students_group_idx on students (group_id);

-- ============================================================
-- ROW LEVEL SECURITY
-- The app talks to Supabase directly from the browser with the public
-- "anon" key, so RLS is what keeps this safe: anyone can register a
-- student and save their own progress, and anyone who knows a group's
-- exact name can view that group's roster (this is the parent/teacher
-- "login"). There is no stronger access control in this MVP — see the
-- README for how to add a real per-group access code later.
-- ============================================================

alter table groups enable row level security;
alter table students enable row level security;
alter table progress enable row level security;
alter table homework enable row level security;

create policy "Anyone can create or read groups" on groups for select using (true);
create policy "Anyone can create a group" on groups for insert with check (true);

create policy "Anyone can create a student profile" on students for insert with check (true);
create policy "Anyone can read students" on students for select using (true);
create policy "Anyone can update students" on students for update using (true);

create policy "Anyone can save progress" on progress for insert with check (true);
create policy "Anyone can update progress" on progress for update using (true);
create policy "Anyone can read progress" on progress for select using (true);

create policy "Anyone can submit homework" on homework for insert with check (true);
create policy "Anyone can update homework" on homework for update using (true);
create policy "Anyone can read homework" on homework for select using (true);
