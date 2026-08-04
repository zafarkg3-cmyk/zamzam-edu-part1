import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import DropField from "../components/DropField";
import { registerStudent } from "../database/students";

/**
 * On a shared/school device, the browser may still remember the PREVIOUS
 * student who used it (`student` prop, from localStorage). We must never
 * silently drop a new student straight into that cached student's
 * dashboard — so if one is remembered, we ask "is this you?" first. Only
 * after the person explicitly says "no" (or there's no cached student at
 * all) do we show the name/surname/group form.
 */
export default function Register({ student, onRegistered, onClearStudent }) {
  if (student) {
    return <ConfirmCachedStudent student={student} onNotMe={onClearStudent} />;
  }
  return <RegistrationForm onRegistered={onRegistered} />;
}

function ConfirmCachedStudent({ student, onNotMe }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh flex items-center justify-center px-5 py-10">
      <DropField />
      <Card className="w-full max-w-sm text-center">
        <div className="w-20 h-20 rounded-2xl bg-aqua-gradient shadow-soft flex items-center justify-center text-4xl mb-4 mx-auto">
          👋
        </div>
        <h1 className="font-display text-xl font-bold text-ink mb-1">Бу сизми?</h1>
        <p className="text-ink-soft mb-1">
          {student.name} {student.surname}
        </p>
        <p className="text-xs text-aqua-deep font-semibold mb-6">{student.groupName}</p>

        <div className="flex flex-col gap-3">
          <Button variant="sun" onClick={() => navigate("/dashboard")}>
            ✅ Ҳа, бу менман
          </Button>
          <Button variant="ghost" onClick={onNotMe}>
            ❌ Йўқ, мен бошқа ўқувчиман
          </Button>
        </div>
      </Card>
    </div>
  );
}

function RegistrationForm({ onRegistered }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [groupName, setGroupName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !groupName.trim()) {
      setError("Илтимос, ҳамма майдонларни тўлдиринг.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    try {
      const registered = await registerStudent({ name, surname, groupName });
      onRegistered(registered);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(
        "Рўйхатдан ўтишда хатолик юз берди. Интернет улангани ва Supabase созламалари тўғрилигини текширинг."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-dvh flex items-center justify-center px-5 py-10">
      <DropField />
      <Card className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-aqua-gradient shadow-soft flex items-center justify-center text-4xl mb-4">
            💧
          </div>
          <h1 className="font-display text-2xl font-bold text-ink leading-tight">
            ZAM-ZAM <span className="text-aqua-deep">EDU</span>
          </h1>
          <p className="text-ink-soft text-sm mt-2">
            Инглизча гапиришни ўрганинг — дарслар, тест ва уй вазифалари билан!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-ink-soft">Исмингиз</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Масалан: Азиз"
              className="rounded-xl bg-aqua-pale/50 border-2 border-aqua/15 px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-aqua transition-colors"
              maxLength={40}
              autoComplete="given-name"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-ink-soft">Фамилиянгиз</span>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Масалан: Каримов"
              className="rounded-xl bg-aqua-pale/50 border-2 border-aqua/15 px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-aqua transition-colors"
              maxLength={40}
              autoComplete="family-name"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-ink-soft">Гуруҳингиз</span>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Масалан: 5-A синф"
              className="rounded-xl bg-aqua-pale/50 border-2 border-aqua/15 px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-aqua transition-colors"
              maxLength={60}
            />
            <span className="text-xs text-ink-faint">
              Ўқитувчингиз айтган гуруҳ номини аниқ ёзинг — натижаларингиз шу гуруҳда кўринади.
            </span>
          </label>

          {error && (
            <p className="text-coral-deep text-sm bg-coral/10 border border-coral/30 rounded-xl px-3 py-2">
              {error}
            </p>
          )}

          <Button type="submit" variant="sun" disabled={isSubmitting} className="mt-2">
            {isSubmitting ? "Юкланмоқда..." : "🚀 Ўрганишни бошлаш"}
          </Button>
        </form>

        <Link
          to="/teacher"
          className="block text-center text-sm text-aqua-deep font-semibold mt-5 hover:underline"
        >
          👨‍👩‍👧 Ота-она / Ўқитувчи учун
        </Link>
        <Link
          to="/leaderboard"
          className="block text-center text-sm text-sun-deep font-semibold mt-2 hover:underline"
        >
          🏆 Умумий рейтингни кўриш
        </Link>
      </Card>
    </div>
  );
}
