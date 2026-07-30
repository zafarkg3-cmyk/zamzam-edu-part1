import { useRef, useCallback } from "react";

// Synthesized sound effects (Web Audio API) — no external audio files,
// keeps the PWA small and works instantly offline once cached.
function playTone(ctx, { freq, duration, type = "sine", startTime = 0, gain = 0.15 }) {
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

  gainNode.gain.setValueAtTime(0, ctx.currentTime + startTime);
  gainNode.gain.linearRampToValueAtTime(gain, ctx.currentTime + startTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start(ctx.currentTime + startTime);
  oscillator.stop(ctx.currentTime + startTime + duration);
}

export function useSound() {
  const ctxRef = useRef(null);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return null;
      ctxRef.current = new AudioContextClass();
    }
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    return ctxRef.current;
  }, []);

  const playCorrect = useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;
    playTone(ctx, { freq: 523.25, duration: 0.12, type: "triangle" });
    playTone(ctx, { freq: 659.25, duration: 0.16, type: "triangle", startTime: 0.1 });
    playTone(ctx, { freq: 783.99, duration: 0.22, type: "triangle", startTime: 0.2 });
  }, [getCtx]);

  const playWrong = useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;
    playTone(ctx, { freq: 220, duration: 0.18, type: "sawtooth", gain: 0.12 });
    playTone(ctx, { freq: 164.81, duration: 0.28, type: "sawtooth", startTime: 0.12, gain: 0.12 });
  }, [getCtx]);

  const playClick = useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;
    playTone(ctx, { freq: 880, duration: 0.06, type: "square", gain: 0.08 });
  }, [getCtx]);

  const playUnlock = useCallback(() => {
    const ctx = getCtx();
    if (!ctx) return;
    playTone(ctx, { freq: 660, duration: 0.1, type: "sine", gain: 0.1 });
    playTone(ctx, { freq: 880, duration: 0.14, type: "sine", startTime: 0.09, gain: 0.1 });
    playTone(ctx, { freq: 1100, duration: 0.2, type: "sine", startTime: 0.18, gain: 0.1 });
  }, [getCtx]);

  return { playCorrect, playWrong, playClick, playUnlock };
}
