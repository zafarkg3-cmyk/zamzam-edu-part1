const LETTERS = ["A", "B", "C", "D"];

export default function OptionButton({ option, index, status, onClick, disabled }) {
  const letter = LETTERS[index] ?? index + 1;

  const stateClasses = {
    idle: "bg-white border-ink/10 hover:border-aqua/50 hover:bg-aqua-pale/40",
    correct: "bg-leaf/10 border-leaf text-leaf-deep animate-correct-pulse",
    wrong: "bg-coral/10 border-coral text-coral-deep animate-wrong-shake",
    faded: "bg-white/60 border-ink/5 opacity-40",
  }[status];

  const letterClasses = {
    idle: "bg-aqua-pale text-aqua-deep",
    correct: "bg-leaf text-white",
    wrong: "bg-coral text-white",
    faded: "bg-ink/10 text-ink-faint",
  }[status];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center gap-3 w-full rounded-2xl border-2 px-4 py-4
        text-left transition-colors duration-200 disabled:cursor-default
        ${stateClasses}
      `}
    >
      <span
        className={`flex items-center justify-center w-8 h-8 rounded-full font-display font-bold text-sm shrink-0 ${letterClasses}`}
      >
        {letter}
      </span>
      <span className="font-display text-base font-semibold">{option}</span>
      {status === "correct" && <span className="ml-auto text-xl">✅</span>}
      {status === "wrong" && <span className="ml-auto text-xl">❌</span>}
    </button>
  );
}
