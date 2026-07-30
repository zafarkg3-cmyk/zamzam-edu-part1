import { useSpeech } from "../hooks/useSpeech";

/**
 * One line of a two-person model dialogue, styled as a chat bubble that
 * alternates sides depending on which speaker is talking.
 */
export default function DialogueLine({ line, isFirstSpeaker }) {
  const { speak, isSupported } = useSpeech();

  return (
    <div className={`flex ${isFirstSpeaker ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isFirstSpeaker
            ? "bg-white border-2 border-aqua/15 rounded-bl-sm"
            : "bg-aqua-pale border-2 border-aqua/20 rounded-br-sm"
        }`}
      >
        <p className="text-xs font-bold text-aqua-deep mb-1">{line.speaker}</p>
        <div className="flex items-start gap-2">
          <p className="font-display font-semibold text-ink">{line.en}</p>
          {isSupported && (
            <button
              type="button"
              onClick={() => speak(line.en)}
              aria-label="Гапни тинглаш"
              className="w-6 h-6 rounded-full bg-white/70 text-aqua-deep flex items-center justify-center shrink-0 mt-0.5 text-xs"
            >
              🔊
            </button>
          )}
        </div>
        <p className="text-sm text-ink-soft mt-1">{line.uz}</p>
      </div>
    </div>
  );
}
