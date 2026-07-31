export default function Loader({ label = "Юкланмоқда..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10 text-ink-soft">
      <div className="w-10 h-10 border-4 border-aqua/15 border-t-aqua rounded-full animate-spin" />
      <p className="font-body text-sm">{label}</p>
    </div>
  );
}
