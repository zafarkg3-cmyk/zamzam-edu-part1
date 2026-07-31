import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import Loader from "../components/Loader";
import DropField from "../components/DropField";
import { fetchLeaderboard } from "../database/leaderboard";

const TIER_STYLE = {
  gold: { badge: "🥇", bg: "bg-sun/15", text: "text-sun-deep" },
  silver: { badge: "🥈", bg: "bg-ink/10", text: "text-ink-soft" },
  bronze: { badge: "🥉", bg: "bg-coral/10", text: "text-coral-deep" },
};

export default function Leaderboard() {
  const navigate = useNavigate();
  const [rows, setRows] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetchLeaderboard()
      .then((data) => {
        if (!cancelled) setRows(data);
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setError("Рейтингни юклашда хатолик юз берди.");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-dvh flex flex-col items-center px-5 py-8">
      <DropField />
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="font-display text-2xl font-bold text-aqua-deep">🏆 УМУМИЙ РЕЙТИНГ</h1>
          <p className="text-ink-faint text-sm mt-1">
            Ҳар бир якунланган дарс учун +10 балл — юқори 10 та олтин 🥇, кейинги 10 та кумуш 🥈, кейинги 10 та бронза 🥉
          </p>
        </div>

        <Card className="p-0 overflow-hidden">
          {error ? (
            <p className="text-coral-deep text-sm text-center px-5 py-8">{error}</p>
          ) : rows === null ? (
            <Loader label="Рейтинг юкланмоқда..." />
          ) : rows.length === 0 ? (
            <p className="text-ink-faint text-sm text-center px-5 py-8">
              Ҳали ҳеч ким рўйхатдан ўтмаган.
            </p>
          ) : (
            <div className="divide-y divide-ink/5 max-h-[65vh] overflow-y-auto">
              {rows.map((row) => {
                const tier = row.tier ? TIER_STYLE[row.tier] : null;
                return (
                  <div
                    key={row.id}
                    className={`flex items-center gap-3 px-4 py-3 ${tier ? tier.bg : ""}`}
                  >
                    <span className="w-8 text-center font-display font-bold text-ink-soft shrink-0">
                      {tier ? tier.badge : row.rank}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-ink truncate">
                        {row.name} {row.surname}
                        {row.hasPerfectLesson && <span className="ml-1">🌟</span>}
                      </p>
                      <p className="text-xs text-ink-faint truncate">
                        {row.groupName} {row.streak > 0 && `· 🔥 ${row.streak} кун`}
                      </p>
                    </div>
                    <div className={`text-right shrink-0 font-mono font-bold ${tier ? tier.text : "text-aqua-deep"}`}>
                      {row.points} балл
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Card>

        <div className="flex flex-col gap-3 mt-6">
          <Button variant="primary" onClick={() => navigate(-1)}>
            ← Орқага
          </Button>
          <Link to="/" className="text-center text-sm text-aqua-deep font-semibold hover:underline">
            Ўқувчи сифатида кириш
          </Link>
        </div>
      </div>
    </div>
  );
}
