import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import Loader from "../components/Loader";
import DropField from "../components/DropField";
import { LESSONS } from "../data/lessons";
import { fetchStudentsInGroup } from "../database/students";
import { fetchGroupProgress } from "../database/progress";
import { fetchGroupHomework } from "../database/homework";

export default function TeacherDashboard() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [students, setStudents] = useState(null);
  const [progressByStudent, setProgressByStudent] = useState(new Map());
  const [homeworkByStudent, setHomeworkByStudent] = useState(new Map());
  const [error, setError] = useState("");

  useEffect(() => {
    if (!state?.group) {
      navigate("/teacher", { replace: true });
      return;
    }

    let cancelled = false;
    async function load() {
      try {
        const roster = await fetchStudentsInGroup(state.group.id);
        if (cancelled) return;
        setStudents(roster);

        const ids = roster.map((s) => s.id);
        const [progressRows, homeworkRows] = await Promise.all([
          fetchGroupProgress(ids),
          fetchGroupHomework(ids),
        ]);
        if (cancelled) return;

        const progressMap = new Map();
        for (const row of progressRows) {
          if (!progressMap.has(row.student_id)) progressMap.set(row.student_id, new Map());
          progressMap.get(row.student_id).set(row.lesson_id, row);
        }
        setProgressByStudent(progressMap);

        const homeworkMap = new Map();
        for (const row of homeworkRows) {
          if (!homeworkMap.has(row.student_id)) homeworkMap.set(row.student_id, new Set());
          homeworkMap.get(row.student_id).add(row.lesson_id);
        }
        setHomeworkByStudent(homeworkMap);
      } catch (err) {
        console.error(err);
        if (!cancelled) setError("Натижаларни юклашда хатолик юз берди.");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [state, navigate]);

  if (!state?.group) return null;

  return (
    <div className="min-h-dvh px-5 py-8 max-w-md mx-auto w-full">
      <DropField />

      <button
        type="button"
        onClick={() => navigate("/teacher")}
        className="text-sm text-aqua-deep font-semibold mb-4"
      >
        ← Орқага
      </button>

      <h1 className="font-display text-xl font-bold text-ink mb-1">📋 {state.group.name}</h1>
      <p className="text-sm text-ink-faint mb-6">
        {students ? `${students.length} ўқувчи` : "Юкланмоқда..."}
      </p>

      {error && (
        <p className="text-coral-deep text-sm bg-coral/10 border border-coral/30 rounded-xl px-3 py-2 mb-4">
          {error}
        </p>
      )}

      {students === null ? (
        <Loader label="Ўқувчилар юкланмоқда..." />
      ) : students.length === 0 ? (
        <Card className="text-center">
          <p className="text-ink-soft text-sm">
            Бу гуруҳда ҳали ҳеч ким рўйхатдан ўтмаган.
          </p>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {students.map((s) => {
            const lessonMap = progressByStudent.get(s.id) ?? new Map();
            const homeworkSet = homeworkByStudent.get(s.id) ?? new Set();
            const completedCount = [...lessonMap.values()].filter((p) => p.completed).length;

            return (
              <Card key={s.id} className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-display font-bold text-ink">
                    {s.name} {s.surname}
                  </p>
                  <span className="text-xs font-bold text-aqua-deep bg-aqua-pale rounded-full px-2.5 py-1">
                    {completedCount}/{LESSONS.length} дарс
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {LESSONS.map((lesson) => {
                    const row = lessonMap.get(lesson.id);
                    const percent = row
                      ? Math.round((row.score / Math.max(row.total_questions, 1)) * 100)
                      : null;
                    const hasHomework = homeworkSet.has(lesson.id);

                    return (
                      <div
                        key={lesson.id}
                        className={`flex flex-col items-center gap-0.5 rounded-xl px-2.5 py-2 text-xs font-semibold ${
                          row?.completed
                            ? "bg-leaf/10 text-leaf-deep"
                            : row
                            ? "bg-sun/15 text-sun-deep"
                            : "bg-ink/5 text-ink-faint"
                        }`}
                        title={lesson.titleUz}
                      >
                        <span>{lesson.icon}</span>
                        <span>{percent !== null ? `${percent}%` : "—"}</span>
                        {hasHomework && <span title="Уй вазифаси топширилган">🏠</span>}
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <Button variant="ghost" onClick={() => navigate("/teacher")} className="mt-6">
        🔍 Бошқа гуруҳни қидириш
      </Button>
    </div>
  );
}
