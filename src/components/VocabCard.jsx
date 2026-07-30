import { useSpeech } from "../hooks/useSpeech";

/**
 * One vocabulary flashcard: English word, Uzbek translation, an emoji
 * visual, a memory-trick sentence (mnemonic), and a "listen" button that
 * reads the English word aloud.
 */
export default function VocabCard({ item }) {
  const { speak, isSupported } = useSpeech();

  return (
    <div className="bg-white rounded-3xl border-2 border-aqua/15 shadow-soft p-5 flex flex-col items-center text-center gap-2 animate-pop-in">
      <span className="text-5xl mb-1">{item.emoji}</span>
      <div className="flex items-center gap-2">
        <h3 className="font-display text-2xl font-bold text-ink">{item.en}</h3>
        {isSupported && (
          <button
            type="button"
            onClick={() => speak(item.en)}
            aria-label={`${item.en} so'zini tinglash`}
            className="w-9 h-9 rounded-full bg-aqua-pale text-aqua-deep flex items-center justify-center hover:bg-aqua/20 transition-colors"
          >
            🔊
          </button>
        )}
      </div>
      <p className="text-aqua-deep font-semibold">{item.uz}</p>
      {item.mnemonic && (
        <p className="text-xs text-ink-soft bg-sun/10 rounded-xl px-3 py-2 mt-1">
          💡 {item.mnemonic}
        </p>
      )}
    </div>
  );
}
