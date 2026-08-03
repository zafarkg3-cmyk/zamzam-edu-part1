import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import DropField from "../components/DropField";

export default function LessonResult({ student }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/dashboard", { replace: true });
  }, [state, navigate]);

  if (!state) return null;

  const {
    lessonTitleUz,
    score,
    total,
    completed,
    homeworkSubmitted,
    homeworkFilled,
    homeworkNeeded,
    homeworkSufficient,
    grammarCorrectLines,
    grammarTotalChecked,
  } = state;
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  const quizPassed = total > 0 && score / total >= 0.7;
  const isPerfect = total > 0 && score === total;

  return (
    <div className="min-h-dvh flex items-center justify-center px-5 py-10">
      <DropField />
      <Card className="w-full max-w-sm text-center">
        <div className="text-5xl mb-3">{completed ? "🎉" : "💪"}</div>
        <h1 className="font-display text-2xl font-bold text-ink mb-1">
          {completed ? "Табриклаймиз!" : "Яна бир бор уриниб кўринг!"}
        </h1>
        <p className="text-ink-soft mb-6">{lessonTitleUz}</p>

        <div className="bg-aqua-pale/60 rounded-2xl p-5 mb-6">
          <p className="font-display text-4xl font-bold text-aqua-deep">{percent}%</p>
          <p className="text-sm text-ink-faint mt-1">
            {score}/{total} тўғри жавоб
          </p>
          {isPerfect && (
            <p className="text-sun-deep font-semibold text-sm mt-2">🌟 Мукаммал натижа!</p>
          )}
        </div>

        {grammarTotalChecked !== null && grammarTotalChecked > 0 && (
          <div className="bg-white border-2 border-aqua/15 rounded-2xl p-4 mb-6">
            <p className="text-sm font-semibold text-ink">
              📝 Грамматика: {grammarCorrectLines}/{grammarTotalChecked} гап хатосиз
            </p>
          </div>
        )}

        {completed ? (
          <p className="text-leaf-deep font-semibold text-sm bg-leaf/10 rounded-xl px-3 py-2 mb-6">
            ✅ Кейинги дарс очилди! Уй вазифангизни ўқитувчингиз тасдиқлагач, ⭐ +10 балл умумий рейтингга қўшилади.
          </p>
        ) : (
          <div className="flex flex-col gap-2 mb-6">
            {!quizPassed && (
              <p className="text-coral-deep font-semibold text-sm bg-coral/10 rounded-xl px-3 py-2">
                ✏️ Тестда камида 70% тўғри жавоб керак.
              </p>
            )}
            {!homeworkSufficient && (
              <p className="text-coral-deep font-semibold text-sm bg-coral/10 rounded-xl px-3 py-2">
                🏠 Уй вазифасида камида {homeworkNeeded}/10 қатор тўлдирилиши керак (ҳозир{" "}
                {homeworkFilled}/10).
              </p>
            )}
            <p className="text-ink-faint text-xs">
              Кейинги дарсни очиш учун дарсни қайта ўтиб, иккала шартни ҳам бажаринг.
            </p>
          </div>
        )}

        {homeworkSubmitted && (
          <p className="text-xs text-ink-faint mb-4">🏠 Уй вазифангиз ўқитувчингизга юборилди.</p>
        )}

        <div className="flex flex-col gap-3">
          <Button variant="primary" onClick={() => navigate("/dashboard", { replace: true })}>
            📚 Дарслар рўйхатига қайтиш
          </Button>
          {completed && (
            <Button variant="sun" onClick={() => navigate("/leaderboard")}>
              🏆 Умумий рейтингни кўриш
            </Button>
          )}
          {!completed && (
            <Button
              variant="ghost"
              onClick={() => navigate(`/lesson/${state.lessonId}`, { replace: true })}
            >
              🔄 Дарсни қайта ўтиш
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
