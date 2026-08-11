import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import Loader from "../components/Loader";
import DropField from "../components/DropField";
import { getLesson } from "../data/lessons";
import { fetchStudentProgress } from "../database/progress";
import { useSound } from "../hooks/useSound";

const ROUND_SECONDS = 60;
const MAX_BUBBLES = 4;
const MIN_RISE_SECONDS = 6;
const MAX_RISE_SECONDS = 9;
const PLAY_AREA_HEIGHT = 420; // px — must match the play-area div's height below
const RISE_DISTANCE = PLAY_AREA_HEIGHT + 100; // travels well past the top before unmounting

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * One rising bubble. Fully self-contained: it manages its own two-step
 * "start low, then transition to high" animation via inline styles and a
 * plain CSS transition, so it never depends on an external stylesheet
 * (e.g. a @keyframes rule in index.css) being present — that dependency
 * was the root cause of a previous bug where bubbles rendered but never
 * moved after a deploy that silently dropped the CSS file.
 */
function RisingBubble({ bubble, onTap, onEscape }) {
  const [risen, setRisen] = useState(false);
  const resolvedRef = useRef(false);

  useEffect(() => {
    // Paint the bubble at its starting position first, then — on the next
    // animation frame — flip to the risen position so the browser has a
    // "before" state to transition from. Without this two-step dance the
    // transition can be skipped entirely.
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setRisen(true));
      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  function handleTransitionEnd(e) {
    if (e.propertyName !== "bottom" || resolvedRef.current) return;
    resolvedRef.current = true;
    onEscape(bubble);
  }

  function handleClick() {
    if (resolvedRef.current) return;
    resolvedRef.current = true;
    onTap(bubble);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      onTransitionEnd={handleTransitionEnd}
      className="absolute w-24 h-24 rounded-full bg-aqua-gradient shadow-soft flex items-center justify-center text-center px-2"
      style={{
        left: `${bubble.left}%`,
        bottom: risen ? `${RISE_DISTANCE}px` : "-70px",
        transition: `bottom ${bubble.duration}s linear`,
      }}
    >
      <span className="text-white font-display font-bold text-xs leading-tight break-words">
        {bubble.en}
      </span>
    </button>
  );
}

export default function BubbleGame({ student }) {
  const navigate = useNavigate();
  const { playCorrect, playWrong } = useSound();

  const [pool, setPool] = useState(null); // null = loading
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | playing | finished
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [targetWord, setTargetWord] = useState(null); // { en, uz, emoji }
  const [bubbles, setBubbles] = useState([]); // { id, en, isCorrect, left, duration }

  const bubbleIdRef = useRef(0);
  const waveTimeoutRef = useRef(null);
  const countdownRef = useRef(null);
  const statusRef = useRef(status);
  statusRef.current = status;
  // Guards against a wave being spawned twice for the same "all bubbles
  // gone" moment (e.g. a tap and a transition-end racing each other).
  const waveTokenRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    fetchStudentProgress(student.id)
      .then((rows) => {
        if (cancelled) return;
        const completedIds = rows.filter((r) => r.completed).map((r) => r.lesson_id);
        const seen = new Map();
        for (const id of completedIds) {
          const lesson = getLesson(id);
          if (!lesson) continue;
          for (const item of lesson.vocabulary) {
            if (!seen.has(item.en)) seen.set(item.en, item);
          }
        }
        setPool([...seen.values()]);
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setError("Сўзларни юклашда хатолик юз берди.");
      });
    return () => {
      cancelled = true;
    };
  }, [student.id]);

  const clearTimers = useCallback(() => {
    clearTimeout(waveTimeoutRef.current);
    clearInterval(countdownRef.current);
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const spawnWave = useCallback(() => {
    if (!pool || pool.length < 2) return;
    waveTokenRef.current += 1;

    const target = pool[Math.floor(Math.random() * pool.length)];
    const optionCount = Math.min(MAX_BUBBLES, pool.length);
    const distractors = shuffle(pool.filter((w) => w.en !== target.en)).slice(0, optionCount - 1);
    const options = shuffle([target, ...distractors]);

    const slotWidth = 100 / options.length;
    const nextBubbles = options.map((item, i) => {
      bubbleIdRef.current += 1;
      const jitter = (Math.random() - 0.5) * (slotWidth * 0.4);
      return {
        id: bubbleIdRef.current,
        en: item.en,
        isCorrect: item.en === target.en,
        left: Math.min(88, Math.max(4, slotWidth * i + slotWidth / 2 + jitter - 8)),
        duration: MIN_RISE_SECONDS + Math.random() * (MAX_RISE_SECONDS - MIN_RISE_SECONDS),
      };
    });

    setTargetWord(target);
    setBubbles(nextBubbles);
  }, [pool]);

  function startGame() {
    if (!pool || pool.length < 2) return;
    clearTimers();
    setScore(0);
    setMisses(0);
    setTimeLeft(ROUND_SECONDS);
    setStatus("playing");
    spawnWave();

    countdownRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearTimers();
          setStatus("finished");
          setBubbles([]);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  // Called with the CURRENT wave token so a stray callback from an old,
  // already-replaced wave can never spawn a duplicate/early next wave.
  function maybeAdvanceWave(remainingCount, tokenAtCallTime) {
    if (remainingCount === 0 && statusRef.current === "playing" && tokenAtCallTime === waveTokenRef.current) {
      waveTimeoutRef.current = setTimeout(spawnWave, 500);
    }
  }

  function handleBubbleTap(bubble) {
    if (statusRef.current !== "playing") return;
    const token = waveTokenRef.current;

    if (bubble.isCorrect) {
      setScore((s) => s + 1);
      playCorrect();
      setBubbles([]);
      waveTokenRef.current += 1; // invalidate any other in-flight callbacks from this wave
      waveTimeoutRef.current = setTimeout(spawnWave, 450);
    } else {
      setMisses((m) => m + 1);
      playWrong();
      setBubbles((prev) => {
        const remaining = prev.filter((b) => b.id !== bubble.id);
        maybeAdvanceWave(remaining.length, token);
        return remaining;
      });
    }
  }

  function handleBubbleEscaped(bubble) {
    if (statusRef.current !== "playing") return;
    const token = waveTokenRef.current;

    if (bubble.isCorrect) {
      setMisses((m) => m + 1);
      setBubbles([]);
      waveTokenRef.current += 1;
      waveTimeoutRef.current = setTimeout(spawnWave, 400);
    } else {
      setBubbles((prev) => {
        const remaining = prev.filter((b) => b.id !== bubble.id);
        maybeAdvanceWave(remaining.length, token);
        return remaining;
      });
    }
  }

  const accuracy = useMemo(() => {
    const total = score + misses;
    return total > 0 ? Math.round((score / total) * 100) : 0;
  }, [score, misses]);

  if (pool === null && !error) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <DropField />
        <Loader label="Сўзлар юкланмоқда..." />
      </div>
    );
  }

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

      <h1 className="font-display text-xl font-bold text-ink mb-1">🫧 Пуфакча ўйини</h1>
      <p className="text-sm text-ink-faint mb-4">
        Якунлаган дарсларингиз сўзларини такрорланг — тўғри пуфакчани босинг!
      </p>

      {error && (
        <p className="text-coral-deep text-sm bg-coral/10 border border-coral/30 rounded-xl px-3 py-2 mb-4">
          {error}
        </p>
      )}

      {status === "idle" && !error && (
        <Card className="text-center">
          {pool.length < 2 ? (
            <>
              <p className="text-4xl mb-3">📚</p>
              <p className="font-display font-bold text-ink mb-2">
                Ҳали ўйнаш учун сўз йўқ
              </p>
              <p className="text-sm text-ink-soft mb-5">
                Ўйин олдин якунлаган дарсларингиз сўзларидан фойдаланади. Камида биттa дарсни
                тугатинг, кейин бу ерга қайтинг!
              </p>
              <Button variant="primary" onClick={() => navigate("/dashboard")}>
                📚 Дарсларга қайтиш
              </Button>
            </>
          ) : (
            <>
              <p className="text-5xl mb-3">🫧</p>
              <p className="font-display font-bold text-ink mb-2">Тайёрmisiz?</p>
              <p className="text-sm text-ink-soft mb-1">
                {pool.length} та сўз, {ROUND_SECONDS} сония.
              </p>
              <p className="text-sm text-ink-soft mb-5">
                Юқорида ўзбекча сўз чиқади — шу сўзнинг инглизчасини ёзилган пуфакчани босинг!
              </p>
              <Button variant="sun" onClick={startGame}>
                🚀 Бошлаш
              </Button>
            </>
          )}
        </Card>
      )}

      {status === "playing" && targetWord && (
        <>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5 bg-white border border-aqua/15 rounded-full px-3.5 py-1.5 shadow-sm font-mono font-bold text-ink">
              ⭐ {score}
            </div>
            <div
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono font-bold ${
                timeLeft <= 10 ? "bg-coral/15 text-coral-deep" : "bg-white border border-aqua/15 text-ink"
              }`}
            >
              ⏱️ {timeLeft}s
            </div>
          </div>

          <Card className="text-center mb-3 py-4">
            <p className="text-xs text-ink-faint uppercase tracking-wide mb-1">
              Инглизчасини топинг
            </p>
            <p className="font-display text-2xl font-bold text-aqua-deep">«{targetWord.uz}»</p>
          </Card>

          <div
            className="relative rounded-3xl overflow-hidden border-2 border-aqua/15 bg-aqua-pale/40"
            style={{ height: PLAY_AREA_HEIGHT }}
          >
            {bubbles.map((b) => (
              <RisingBubble
                key={b.id}
                bubble={b}
                onTap={handleBubbleTap}
                onEscape={handleBubbleEscaped}
              />
            ))}
          </div>
        </>
      )}

      {status === "finished" && (
        <Card className="text-center">
          <p className="text-5xl mb-3">{accuracy >= 70 ? "🎉" : "💪"}</p>
          <p className="font-display text-2xl font-bold text-ink mb-1">Вақт тугади!</p>
          <div className="bg-aqua-pale/60 rounded-2xl p-5 my-5">
            <p className="font-display text-4xl font-bold text-aqua-deep">{score}</p>
            <p className="text-sm text-ink-faint mt-1">тўғри пуфакча ({accuracy}% аниқлик)</p>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="sun" onClick={startGame}>
              🔄 Яна ўйнаш
            </Button>
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              📚 Дарсларга қайтиш
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
