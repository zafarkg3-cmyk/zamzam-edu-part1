import { useSpeech } from "../hooks/useSpeech";

export default function PhraseCard({ phrase }) {
  const { speak, isSupported } = useSpeech();

  return (
    <div className="bg-white rounded-2xl border-2 border-aqua/15 shadow-soft p-4 flex items-center gap-3 animate-pop-in">
      <div className="flex-1 min-w-0">
        <p className="font-display font-bold text-ink">{phrase.en}</p>
        <p className="text-sm text-aqua-deep">{phrase.uz}</p>
      </div>
      {isSupported && (
        <button
          type="button"
          onClick={() => speak(phrase.en)}
          aria-label="Гапни тинглаш"
          className="w-9 h-9 rounded-full bg-aqua-pale text-aqua-deep flex items-center justify-center hover:bg-aqua/20 transition-colors shrink-0"
        >
          🔊
        </button>
      )}
    </div>
  );
}
