import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Loader from "../components/Loader";
import DropField from "../components/DropField";
import ProgressRing from "../components/ProgressRing";
import LessonCard from "../components/LessonCard";
import { LESSONS } from "../data/lessons";
import { fetchStudentProgress } from "../database/progress";

export default function Dashboard({ student, onSwitchStudent }) {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetchStudentProgress(student.id)
      .then((data) => {
        if (!cancelled) setProgress(data);
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setError("Натижаларни юклашда хатолик юз берди.");
      });
    return () => {
      cancelled = true;
    };
  }, [student.id]);

  if (progress === null && !error) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <DropField />
        <Loader label="Дарслар юкланмоқда..." />
      </div>
    );
  }

  const progressByLesson = new Map((progress ?? []).map((p) => [p.lesson_id, p]));
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

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-ink-faint text-sm">Хуш келибсиз,</p>
          <h1 className="font-display text-xl font-bold text-ink">
            {student.name} {student.surname}
          </h1>
          <p className="text-xs text-aqua-deep font-semibold">{student.groupName}</p>
        </div>
        <ProgressRing completed={completedCount} total={LESSONS.length} />
      </div>

      {error && (
        <p className="text-coral-deep text-sm bg-coral/10 border border-coral/30 rounded-xl px-3 py-2 mb-4">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3">
        {LESSONS.map((lesson) => {
          const status = statusFor(lesson);
          const score = progressByLesson.get(lesson.id);
          const percent = score
            ? Math.round((score.score / Math.max(score.total_questions, 1)) * 100)
            : 0;
          return (
            <LessonCard key={lesson.id} lesson={lesson} status={status} score={percent} />
          );
        })}
      </div>

      {completedCount === LESSONS.length && (
        <Card className="mt-6 text-center">
          <p className="text-4xl mb-2">🎉</p>
          <p className="font-display font-bold text-ink">
            Табриклаймиз! Part 1'нинг барча дарсларини тугатдингиз!
          </p>
        </Card>
      )}

      <Button variant="ghost" onClick={onSwitchStudent} className="mt-8">
        🔄 Бошқа ўқувчи сифатида кириш
      </Button>
    </div>
  );
}
