const STEPS = [
  { key: "vocab", label: "Луғат", icon: "📖" },
  { key: "phrases", label: "Иборалар", icon: "💬" },
  { key: "dialogue", label: "Диалог", icon: "🗣️" },
  { key: "quiz", label: "Тест", icon: "✏️" },
  { key: "homework", label: "Уй иши", icon: "🏠" },
];

export default function StepDots({ currentStep }) {
  const currentIndex = STEPS.findIndex((s) => s.key === currentStep);

  return (
    <div className="flex items-center justify-between w-full mb-2">
      {STEPS.map((step, i) => (
        <div key={step.key} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                i < currentIndex
                  ? "bg-leaf text-white"
                  : i === currentIndex
                  ? "bg-aqua-gradient text-white shadow-soft"
                  : "bg-white border-2 border-ink/10 text-ink-faint"
              }`}
            >
              {i < currentIndex ? "✓" : step.icon}
            </div>
            <span className="text-[10px] text-ink-faint hidden sm:block">{step.label}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`flex-1 h-0.5 mx-1 ${i < currentIndex ? "bg-leaf" : "bg-ink/10"}`} />
          )}
        </div>
      ))}
    </div>
  );
}
