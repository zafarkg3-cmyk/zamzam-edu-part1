# 💧 Zam-Zam EDU — Part 1

A 5-lesson spoken-English starter course for Uzbek-speaking children, built
as a mobile-first, installable PWA with a shared cloud database (Supabase)
so parents and teachers can watch every student's progress live.

**The 5 lessons (Part 1's goal: be able to introduce yourself in English
after finishing them):**
1. About Myself — Мен ҳақимда
2. My Family — Оилам
3. My Day — Куним
4. My School & Friends — Мактабим ва дўстларим
5. My Favorites — Севимли нарсаларим

Each lesson: **Vocabulary** (flashcards + text-to-speech + memory-trick
sentences) → **Key Phrases** → **Model Dialogue** → **Quiz** (auto-graded,
70%+ required to unlock the next lesson) → **Homework** (free-text,
reviewed by the teacher, not auto-graded).

Built with **React + Vite + Tailwind CSS + Supabase**, packaged as an
installable **PWA**, pre-configured for a native Android **.apk/.aab**.

---

## ⚠️ Before you run it

Every file here was written by hand in a sandbox with no network access —
`npm install` has not been run and nothing has been build-tested. Run it
locally or on Replit once and fix anything your environment's exact
dependency versions surface.

---

## 1. Create the cloud database (Supabase)

1. [supabase.com](https://supabase.com) → **New project**.
2. **SQL Editor** → paste all of [`database/schema.sql`](./database/schema.sql) → **Run**.
   Creates `groups`, `students`, `progress`, `homework` tables + RLS policies.
3. **Project Settings → API Keys** → copy the **Project URL** and the
   **Publishable key** (this is the `anon`/public key — Supabase renamed it
   in newer projects).

## 2. Configure and run

```bash
cp .env.example .env
# edit .env with your Project URL + Publishable key
npm install
npm run dev
```

## 3. Build for production / deploy

```bash
npm run build
```
Deploy the `dist/` folder to Vercel/Netlify (see `DEPLOY_UZ.md` for a full
Uzbek-language walkthrough of GitHub → Supabase → Vercel).

---

## 📁 Project structure

```
src/
  components/   VocabCard, PhraseCard, DialogueLine, OptionButton,
                LessonCard, ProgressRing, StepDots, Button, Card...
  pages/        Register, Dashboard, Lesson, LessonResult,
                TeacherLogin, TeacherDashboard
  data/         lessons.js — ALL curriculum content lives here (static)
  database/     Supabase client + groups.js / students.js / progress.js /
                homework.js cloud functions
  hooks/        useStudent (persist login), useSpeech (text-to-speech),
                useSound (quiz feedback sounds)
database/
  schema.sql    Run once in Supabase's SQL Editor
```

## ➕ Adding Lesson 6 and beyond (Part 2)

Everything about a lesson lives in one object in `src/data/lessons.js`.
Copy an existing lesson object, give it the next `id`, and fill in:

```js
{
  id: 6,
  icon: "🌦️",
  titleUz: "Об-ҳаво",
  titleEn: "The Weather",
  vocabulary: [ { en, uz, emoji, mnemonic }, ... ],
  phrases: [ { en, uz }, ... ],
  dialogue: { speakers: ["...", "..."], lines: [ { speaker, en, uz }, ... ] },
  homeworkPrompt: "...",
}
```

The quiz, locking logic, dashboard tile, and progress tracking all pick it
up automatically — nothing else needs to change.

## 🔐 How access works (MVP — no passwords)

- **Students** register with name + surname + **group name** (e.g. "5-A
  синф"). The first student to use a group name creates it; everyone else
  who types the same name joins it.
- **Parents/teachers** go to the "Ota-ona / O'qituvchi" screen and type the
  **exact same group name** to see every student in that group's progress
  across all 5 lessons, plus which homework has been submitted.
- There is **no password** in this MVP — anyone who knows (or guesses) a
  group name can view it. This is fine for a single classroom's internal
  use, but before wider rollout you should add a real per-group access
  code: add an `access_code` column to `groups`, generate a random code on
  creation, and check it in `findGroupByName` before returning the roster.

## 🔓 How lesson unlocking works

`src/database/progress.js` marks a lesson `completed` when the student
scores **≥70%** on its quiz. `src/pages/Dashboard.jsx` reads this table and
computes each lesson's state:
- Lesson 1 is always unlocked.
- Lesson *N* unlocks once lesson *N-1* is `completed`.
- A completed lesson shows its score; students can still revisit it.

## 🔊 Text-to-speech & sound

Both use browser-native APIs — no external service, no API key, fully
free and works offline once cached:
- **Vocabulary/phrases/dialogue** use the **Web Speech API**
  (`speechSynthesis`) to read English aloud.
- **Quiz feedback sounds** are synthesized with the **Web Audio API**.

## 🔥 Gamification: streaks, points, and the public leaderboard

- **Points**: +10 per completed lesson (quiz ≥70% AND homework ≥70% lines
  filled — see below). Computed live from the `progress` table by
  `src/database/leaderboard.js`, not stored redundantly.
- **Streak**: consecutive days a student finished at least one lesson.
  Tracked in `students.streak_count` / `students.last_activity_date`,
  updated by `src/database/streak.js` → `updateStreak()`, called once per
  lesson finish from `Lesson.jsx`. Never blocks the finish flow if it fails.
- **Leaderboard** (`/leaderboard`, public route, no login): every student
  across every group, ranked by points then streak. Top 10 = 🥇 gold tier,
  next 10 = 🥈 silver, next 10 = 🥉 bronze, everyone else plain-ranked.
  Linked from Register, Dashboard, and Teacher Dashboard.
- **🌟 badge**: shown next to a student's name on the leaderboard if they
  ever scored 100% on a lesson quiz.
- **Not yet implemented** (would need a scheduled job, e.g. a Supabase Edge
  Function + `pg_cron`, which is more infra than this MVP includes):
  automatic weekly/monthly "winner" badges. The leaderboard + streak +
  perfect-score badge above already cover most of the same motivational
  effect without needing a cron job.

## 📝 Automatic grammar check (homework)

`src/hooks/useGrammarCheck.js` sends the student's 10 homework lines to
[LanguageTool's free public API](https://languagetool.org/http-api/) (no
API key, no cost) and marks each line ✅/⚠️ with a short explanation.
This is **diagnostic only** — it does not block lesson completion (only
the 7/10-lines-filled rule does), because a third-party free API can be
slow or rate-limited and shouldn't be a hard gate for a classroom tool.
The result (`grammar_correct_lines` / `grammar_total_checked`) is saved
alongside the homework text so teachers can see it as a quality signal in
the Teacher Dashboard (📝 icon on each lesson tile).

If you outgrow LanguageTool's free tier (rate limit is modest — fine for
occasional classroom use, but 100 students submitting at once could hit
it), you can self-host LanguageTool (it's open source) or swap in a paid
grammar API — only `useGrammarCheck.js` needs to change.

## 🔄 Applying these changes to an already-live database

If you already ran the original `schema.sql` and have real student data,
**do not re-run schema.sql** (it won't delete anything, but it's
unnecessary). Instead run **`database/migration_gamification.sql`** once
in the SQL Editor — it only adds new columns/policies and never touches
existing rows.



Same two options as before — see the full walkthrough in the sibling
`irregular-verbs-master` project's README, or:
- **Fastest**: deploy to an HTTPS URL, then use
  [pwabuilder.com](https://www.pwabuilder.com/) to package it — no coding.
- **Native project**: `npm run android:add` (needs Android Studio) — this
  repo already has `capacitor.config.json` and `resources/icon.png` +
  `resources/splash.png` ready for it.

## 🎨 Design notes

Palette: bright "morning classroom" aqua/teal with sunny accents — a
deliberately different feel from a night-time game, since this app is
meant to read as trustworthy to parents and teachers, not just fun for
kids. Fonts: **Baloo 2** (display) + **Nunito** (body), both with full
Cyrillic support so Uzbek text renders correctly everywhere.
