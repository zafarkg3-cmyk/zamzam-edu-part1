import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import Loader from "../components/Loader";
import DropField from "../components/DropField";
import ProgressRing from "../components/ProgressRing";
import LessonCard from "../components/LessonCard";
import { LESSONS } from "../data/lessons";
import { fetchStudentProgress } from "../database/progress";
import { getStreak } from "../database/streak";
import { fetchStudentHomework } from "../database/homework";

export default function Dashboard({ student, onSwitchStudent }) {
  const [progress, setProgress] = useState(null);
  const [streak, setStreak] = useState(null);
  const [homework, setHomework] = useState([]);
  const [error, setError] = useState("");
  const [isSlow, setIsSlow] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setError("");
    setIsSlow(false);

    // If the cloud database is slow to respond (e.g. a paused free-tier
    // Supabase project waking up), tell the student instead of leaving
    // them staring at a spinner with no explanation.
    const slowTimer = setTimeout(() => {
      if (!cancelled) setIsSlow(true);
    }, 6000);

    Promise.all([
      fetchStudentProgress(student.id),
      getStreak(student.id),
      fetchStudentHomework(student.id),
    ])
      .then(([progressData, streakData, homeworkData]) => {
        if (cancelled) return;
        setProgress(progressData);
        setStreak(streakData);
        setHomework(homeworkData);
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setError("Натижаларни юклашда хатолик юз берди.");
      })
      .finally(() => {
        clearTimeout(slowTimer);
      });

    return () => {
      cancelled = true;
      clearTimeout(slowTimer);
    };
  }, [student.id, retryCount]);

  if (progress === null && !error) {
    return (
      <div className="min-h-dvh flex items-center justify-center px-5">
        <DropField />
        <div className="flex flex-col items-center gap-4 text-center">
          <Loader label="Дарслар юкланмоқда..." />
          {isSlow && (
            <p className="text-ink-faint text-xs max-w-xs">
              Бироз узоқ давом этяпти — база "уйғонаётган" бўлиши мумкин, бир неча сония кутинг.
              Агар давом этса, интернет алоқасини текшириб, саҳифани қайта юкланг.
            </p>
          )}
        </div>
      </div>
    );
  }

  const progressByLesson = new Map((progress ?? []).map((p) => [p.lesson_id, p]));
  const homeworkByLesson = new Map(homework.map((h) => [h.lesson_id, h]));
  const completedCount = (progress ?? []).filter((p) => p.completed).length;

  function statusFor(lesson) {
    if (lesson.id === 1) {
      return progressByLesson.get(1)?.completed ? "completed" : "unlocked";
    }
    const prev = progressByLesson.get(lesson.id - 1);
    if (progressByLesson.get(lesson.id)?.completed) return "completed";
    if (prev?.completed) return "unlocked";
    return "locked";
  }

  return (
    <div className="min-h-dvh px-5 py-8 max-w-md mx-auto w-full">
      <DropField />

      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-ink-faint text-sm">Хуш келибсиз,</p>
          <h1 className="font-display text-xl font-bold text-ink">
            {student.name} {student.surname}
          </h1>
          <p className="text-xs text-aqua-deep font-semibold">{student.groupName}</p>
        </div>
        <ProgressRing completed={completedCount} total={LESSONS.length} />
      </div>

      <div className="flex items-center gap-3 mb-6">
        {streak !== null && streak > 0 && (
          <div className="flex items-center gap-1.5 bg-sun/15 text-sun-deep rounded-full px-3.5 py-1.5 font-bold text-sm">
            🔥 {streak} кун кетма-кет
          </div>
        )}
        <Link
          to="/leaderboard"
          className="flex items-center gap-1.5 bg-aqua-pale text-aqua-deep rounded-full px-3.5 py-1.5 font-bold text-sm hover:bg-aqua/20 transition-colors"
        >
          🏆 Умумий рейтинг
        </Link>
      </div>

      {error && (
        <div className="text-coral-deep text-sm bg-coral/10 border border-coral/30 rounded-xl px-3 py-2 mb-4 flex items-center justify-between gap-3">
          <span>{error}</span>
          <button
            type="button"
            onClick={() => setRetryCount((c) => c + 1)}
            className="shrink-0 font-bold underline"
          >
            Қайта уриниш
          </button>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {LESSONS.map((lesson) => {
          const status = statusFor(lesson);
          const score = progressByLesson.get(lesson.id);
          const percent = score
            ? Math.round((score.score / Math.max(score.total_questions, 1)) * 100)
            : 0;
          return (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              status={status}
              score={percent}
              homeworkFeedback={homeworkByLesson.get(lesson.id)}
            />
          );
        })}
      </div>

      {completedCount === LESSONS.length && (
        <Card className="mt-6 text-center">
          <p className="text-4xl mb-2">🎉</p>
          <p className="font-display font-bold text-ink">
            Табриклаймиз! Барча дарсларни тугатдингиз!
          </p>
        </Card>
      )}

      <Button variant="ghost" onClick={onSwitchStudent} className="mt-8">
        🔄 Бошқа ўқувчи сифатида кириш
      </Button>
    </div>
  );
}
