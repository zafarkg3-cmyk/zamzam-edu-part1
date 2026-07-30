export default function StatPill({ icon, value, label, className = "" }) {
  return (
    <div
      className={`flex items-center gap-1.5 bg-white border border-aqua/15 rounded-full px-3.5 py-1.5 shadow-sm ${className}`}
    >
      <span className="text-base leading-none">{icon}</span>
      <span className="font-mono font-bold text-ink leading-none">{value}</span>
      {label && <span className="text-xs text-ink-faint leading-none">{label}</span>}
    </div>
  );
}
