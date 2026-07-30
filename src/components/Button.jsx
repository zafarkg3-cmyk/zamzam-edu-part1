const VARIANTS = {
  primary: "bg-aqua-gradient text-white shadow-soft hover:brightness-105 active:scale-[0.98]",
  sun: "bg-sun-gradient text-ink shadow-sunGlow hover:brightness-105 active:scale-[0.98]",
  coral: "bg-coral-gradient text-white shadow-soft hover:brightness-105 active:scale-[0.98]",
  ghost: "bg-white text-ink border-2 border-aqua/20 hover:border-aqua/50 active:scale-[0.98]",
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  fullWidth = true,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${fullWidth ? "w-full" : ""}
        rounded-2xl px-6 py-4 font-display text-lg font-semibold tracking-wide
        transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed
        ${VARIANTS[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
