export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-card-sheen backdrop-blur-sm border border-white/60
        rounded-3xl shadow-card p-6 animate-pop-in
        ${className}
      `}
    >
      {children}
    </div>
  );
}
