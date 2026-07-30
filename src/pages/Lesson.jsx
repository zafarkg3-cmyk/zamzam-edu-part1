import { useMemo, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import StepDots from "../components/StepDots";
import VocabCard from "../components/VocabCard";
import PhraseCard from "../components/PhraseCard";
import DialogueLine from "../components/DialogueLine";
import OptionButton from "../components/OptionButton";
import DropField from "../components/DropField";
import { getLesson, generateLessonQuiz } from "../data/lessons";
import { useSound } from "../hooks/useSound";
import { saveProgress } from "../database/progress";
import { submitHomework } from "../database/homework";

const STEPS = ["vocab", "phrases", "dialogue", "quiz", "homework"];

export default function Lesson({ student }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = getLesson(id);
  const { playCorrect, playWrong, playClick } = useSound();

  const [stepIndex, setStepIndex] = useState(0);
  const [quiz] = useState(() => (lesson ? generateLessonQuiz(lesson) : []));
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [homeworkText, setHomeworkText] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  if (!lesson) return <Navigate to="/dashboard" replace />;

  const step = STEPS[stepIndex];
  const question = quiz[quizIndex];

  function goNextStep() {
    playClick();
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  }

  function handleSelectAnswer(option) {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    if (option === question.correctAnswer) {
      setCorrectCount((c) => c + 1);
      playCorrect();
    } else {
      playWrong();
    }
  }

  function handleNextQuestion() {
    if (quizIndex < quiz.length - 1) {
      setQuizIndex((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      goNextStep(); // move to homework step
    }
  }

  async function handleFinish() {
    setIsSaving(true);
    setSaveError("");
    try {
      const progressResult = await saveProgress({
        studentId: student.id,
        lessonId: lesson.id,
        score: correctCount,
        totalQuestions: quiz.length,
      });

      if (homeworkText.trim()) {
        await submitHomework({
          studentId: student.id,
          lessonId: lesson.id,
          answerText: homeworkText,
        });
      }

      navigate("/result", {
        state: {
          lessonId: lesson.id,
          lessonTitleUz: lesson.titleUz,
          score: correctCount,
          total: quiz.length,
          completed: progressResult.completed,
          homeworkSubmitted: Boolean(homeworkText.trim()),
        },
      });
    } catch (err) {
      console.error(err);
      setSaveError("Натижани сақлашда хатолик юз берди. Интернетни текшириб, қайта уриниб кўринг.");
    } finally {
      setIsSaving(false);
    }
  }

  const optionStatus = useMemo(() => {
    if (!question) return [];
    return question.options.map((option) => {
      if (!answered) return "idle";
      if (option === question.correctAnswer) return "correct";
      if (option === selected) return "wrong";
      return "faded";
    });
  }, [answered, question, selected]);

  return (
    <div className="min-h-dvh flex flex-col px-5 py-6 max-w-md mx-auto w-full">
      <DropField />

      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="self-start text-sm text-aqua-deep font-semibold mb-3"
      >
        ← Дарслар рўйхати
      </button>

      <h1 className="font-display text-xl font-bold text-ink mb-1">
        {lesson.icon} {lesson.id}-дарс: {lesson.titleUz}
      </h1>
      <p className="text-sm text-ink-faint mb-5">{lesson.titleEn}</p>

      <StepDots currentStep={step} />

      <div className="flex-1 mt-4">
        {step === "vocab" && (
          <div className="flex flex-col gap-4">
            <p className="text-center text-ink-soft text-sm">
              📖 Янги сўзларни ўрганинг — 🔊 тугмасини босиб талаффузини эшитинг
            </p>
            <div className="grid grid-cols-2 gap-3">
              {lesson.vocabulary.map((item) => (
                <VocabCard key={item.en} item={item} />
              ))}
            </div>
          </div>
        )}

        {step === "phrases" && (
          <div className="flex flex-col gap-3">
            <p className="text-center text-ink-soft text-sm mb-1">
              💬 Ушбу дарсда фойдали иборалар
            </p>
            {lesson.phrases.map((phrase) => (
              <PhraseCard key={phrase.en} phrase={phrase} />
            ))}
          </div>
        )}

        {step === "dialogue" && (
          <div className="flex flex-col gap-3">
            <p className="text-center text-ink-soft text-sm mb-1">
              🗣️ Намунавий суҳбатни ўқинг ва тингланг
            </p>
            {lesson.dialogue.lines.map((line, i) => (
              <DialogueLine
                key={i}
                line={line}
                isFirstSpeaker={line.speaker === lesson.dialogue.speakers[0]}
              />
            ))}
          </div>
        )}

        {step === "quiz" && question && (
          <div className="flex flex-col gap-5">
            <p className="text-center text-ink-faint text-xs font-semibold">
              Савол {quizIndex + 1}/{quiz.length}
            </p>
            <Card>
              <p className="text-center text-ink-faint text-xs uppercase tracking-wide mb-2">
                Инглизчасини топинг
              </p>
              <p className="text-center font-display text-2xl font-bold text-aqua-deep">
                «{question.prompt}»
              </p>
            </Card>
            <div className="flex flex-col gap-3">
              {question.options.map((option, i) => (
                <OptionButton
                  key={option}
                  option={option}
                  index={i}
                  status={optionStatus[i]}
                  disabled={answered}
                  onClick={() => handleSelectAnswer(option)}
                />
              ))}
            </div>
          </div>
        )}

        {step === "homework" && (
          <div className="flex flex-col gap-4">
            <Card>
              <p className="font-display font-bold text-ink mb-2">🏠 Уй вазифаси</p>
              <p className="text-sm text-ink-soft">{lesson.homeworkPrompt}</p>
            </Card>
            <textarea
              value={homeworkText}
              onChange={(e) => setHomeworkText(e.target.value)}
              placeholder="Жавобингизни шу ерга ёзинг..."
              rows={6}
              className="rounded-2xl bg-white border-2 border-aqua/15 px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-aqua transition-colors resize-none"
            />
            {saveError && (
              <p className="text-coral-deep text-sm bg-coral/10 border border-coral/30 rounded-xl px-3 py-2">
                {saveError}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-6">
        {step === "vocab" || step === "phrases" || step === "dialogue" ? (
          <Button variant="primary" onClick={goNextStep}>
            Давом этиш ➜
          </Button>
        ) : step === "quiz" ? (
          <Button variant="primary" disabled={!answered} onClick={handleNextQuestion}>
            {quizIndex < quiz.length - 1 ? "Кейинги савол ➜" : "Уй вазифасига ўтиш ➜"}
          </Button>
        ) : (
          <Button variant="sun" disabled={isSaving} onClick={handleFinish}>
            {isSaving ? "Сақланмоқда..." : "🏁 Дарсни якунлаш"}
          </Button>
        )}
      </div>
    </div>
  );
}
