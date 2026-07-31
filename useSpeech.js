import { useCallback } from "react";

/**
 * Reads English words/sentences aloud using the browser's built-in Web
 * Speech API (SpeechSynthesis) — no external service, works offline once
 * the voice is installed, and is completely free.
 */
export function useSpeech() {
  const speak = useCallback((text) => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel(); // stop anything already playing
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9; // slightly slower — easier for beginners to follow
    window.speechSynthesis.speak(utterance);
  }, []);

  const isSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  return { speak, isSupported };
}
