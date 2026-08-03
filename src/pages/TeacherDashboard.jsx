import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import Loader from "../components/Loader";
import DropField from "../components/DropField";
import HomeworkReviewPanel from "../components/HomeworkReviewPanel";
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
  const [expandedKey, setExpandedKey] = useState(null); // `${studentId}:${lessonId}` | null
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
          if (!homeworkMap.has(row.student_id)) homeworkMap.set(row.student_id, new Map());
          homeworkMap.get(row.student_id).set(row.lesson_id, row);
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

  function handleReviewed(studentId, lessonId, updatedHomework) {
    setHomeworkByStudent((prev) => {
      const next = new Map(prev);
      const studentMap = new Map(next.get(studentId) ?? new Map());
      studentMap.set(lessonId, updatedHomework);
      next.set(studentId, studentMap);
      return next;
    });
  }

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
            const homeworkMap = homeworkByStudent.get(s.id) ?? new Map();
            const completedCount = [...lessonMap.values()].filter((p) => p.completed).length;

            return (
              <Card key={s.id} className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-display font-bold text-ink">
                    {s.name} {s.surname}
                  </p>
                  <span className="text-xs font-bold text-aqua-deep bg-aqua-pale rounded-full px-2.5 py-1">
                    {completedCount}/{LESSONS.length} дарс
                  </span>
                </div>
                {s.streak_count > 0 && (
                  <p className="text-xs text-sun-deep font-semibold mb-2">
                    🔥 {s.streak_count} кун кетма-кет
                  </p>
                )}
                <div className="flex gap-2 flex-wrap mt-2">
                  {LESSONS.map((lesson) => {
                    const row = lessonMap.get(lesson.id);
                    const percent = row
                      ? Math.round((row.score / Math.max(row.total_questions, 1)) * 100)
                      : null;
                    const homework = homeworkMap.get(lesson.id);
                    const grammarLabel =
                      homework?.grammar_total_checked != null
                        ? `${homework.grammar_correct_lines}/${homework.grammar_total_checked}`
                        : null;
                    const key = `${s.id}:${lesson.id}`;
                    const isExpanded = expandedKey === key;
                    const reviewIcon =
                      homework?.teacher_status === "approved"
                        ? "✅"
                        : homework?.teacher_status === "needs_revision"
                        ? "🔄"
                        : homework
                        ? "⏳"
                        : null;

                    const pillClasses = `flex flex-col items-center gap-0.5 rounded-xl px-2.5 py-2 text-xs font-semibold transition-transform ${
                      row?.completed
                        ? "bg-leaf/10 text-leaf-deep"
                        : row
                        ? "bg-sun/15 text-sun-deep"
                        : "bg-ink/5 text-ink-faint"
                    } ${isExpanded ? "ring-2 ring-aqua" : ""} ${homework ? "active:scale-95" : ""}`;

                    const pillContent = (
                      <>
                        <span>{lesson.icon}</span>
                        <span>{percent !== null ? `${percent}%` : "—"}</span>
                        {reviewIcon && <span title="Ўқитувчи баҳоси">{reviewIcon}</span>}
                        {grammarLabel && (
                          <span className="text-[10px] text-ink-faint" title="Грамматика: тўғри/текширилган">
                            📝{grammarLabel}
                          </span>
                        )}
                      </>
                    );

                    return homework ? (
                      <button
                        key={lesson.id}
                        type="button"
                        onClick={() => setExpandedKey(isExpanded ? null : key)}
                        className={pillClasses}
                        title={`${lesson.titleUz} — уй вазифасини кўриш`}
                      >
                        {pillContent}
                      </button>
                    ) : (
                      <div key={lesson.id} className={pillClasses} title={lesson.titleUz}>
                        {pillContent}
                      </div>
                    );
                  })}
                </div>

                {LESSONS.map((lesson) => {
                  const key = `${s.id}:${lesson.id}`;
                  const homework = homeworkMap.get(lesson.id);
                  if (expandedKey !== key || !homework) return null;
                  return (
                    <HomeworkReviewPanel
                      key={key}
                      homework={homework}
                      onReviewed={(updated) => handleReviewed(s.id, lesson.id, updated)}
                    />
                  );
                })}
              </Card>
            );
          })}
        </div>
      )}

      <Button variant="ghost" onClick={() => navigate("/teacher")} className="mt-6">
        🔍 Бошқа гуруҳни қидириш
      </Button>
      <Button variant="sun" onClick={() => navigate("/leaderboard")} className="mt-3">
        🏆 Умумий рейтингни кўриш
      </Button>
    </div>
  );
}
