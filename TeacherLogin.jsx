import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import DropField from "../components/DropField";
import { findGroupByName } from "../database/groups";

export default function TeacherLogin() {
  const [groupName, setGroupName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!groupName.trim()) {
      setError("Илтимос, гуруҳ номини киритинг.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    try {
      const group = await findGroupByName(groupName);
      if (!group) {
        setError("Бу номда гуруҳ топилмади. Гуруҳ номини текшириб, қайта уриниб кўринг.");
        return;
      }
      navigate("/teacher/dashboard", { state: { group } });
    } catch (err) {
      console.error(err);
      setError("Хатолик юз берди. Интернет алоқасини текшириб кўринг.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-dvh flex items-center justify-center px-5 py-10">
      <DropField />
      <Card className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-coral-gradient shadow-soft flex items-center justify-center text-4xl mb-4">
            👨‍👩‍👧
          </div>
          <h1 className="font-display text-xl font-bold text-ink">Ота-она / Ўқитувчи</h1>
          <p className="text-ink-soft text-sm mt-2">
            Ўқувчилар кирган гуруҳ номини киритинг — бутун гуруҳ натижаларини кўрасиз.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-ink-soft">Гуруҳ номи</span>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Масалан: 5-A синф"
              className="rounded-xl bg-aqua-pale/50 border-2 border-aqua/15 px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-aqua transition-colors"
              maxLength={60}
            />
          </label>

          {error && (
            <p className="text-coral-deep text-sm bg-coral/10 border border-coral/30 rounded-xl px-3 py-2">
              {error}
            </p>
          )}

          <Button type="submit" variant="coral" disabled={isSubmitting} className="mt-2">
            {isSubmitting ? "Қидирилмоқда..." : "🔍 Натижаларни кўриш"}
          </Button>
        </form>

        <Link
          to="/"
          className="block text-center text-sm text-aqua-deep font-semibold mt-5 hover:underline"
        >
          ← Ўқувчи сифатида кириш
        </Link>
      </Card>
    </div>
  );
}
