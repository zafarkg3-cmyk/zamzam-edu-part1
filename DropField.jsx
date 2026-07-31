import { useMemo } from "react";

/**
 * Slow-rising translucent water drops — the Zam-Zam brand motif — used as
 * a soft, non-distracting background on every screen.
 */
export default function DropField({ count = 10 }) {
  const drops = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 28 + 16}px`,
        delay: `${Math.random() * 8}s`,
        duration: `${Math.random() * 4 + 7}s`,
      })),
    [count]
  );

  return (
    <div className="drop-field" aria-hidden="true">
      {drops.map((d) => (
        <span
          key={d.id}
          className="drop animate-drop-rise"
          style={{
            left: d.left,
            width: d.size,
            height: d.size,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        />
      ))}
    </div>
  );
}
