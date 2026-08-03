import { useState } from "react";
import Button from "./Button";
import { reviewHomework } from "../database/homework";

const STATUS_LABEL = {
  pending: { text: "⏳ Кутилмоқда", cls: "bg-ink/10 text-ink-faint" },
  approved: { text: "✅ Аъло", cls: "bg-leaf/15 text-leaf-deep" },
  needs_revision: { text: "🔄 Тузатиш керак", cls: "bg-coral/15 text-coral-deep" },
};

/**
 * Expands under a lesson tile in the Teacher Dashboard: shows the
 * student's full homework text and lets the teacher mark it approved or
 * needing revision, with an optional short comment — the human
 * correctness check that grammar/fill-rate checks can't provide.
 */
export default function HomeworkReviewPanel({ homework, onReviewed }) {
  const [comment, setComment] = useState(homework.teacher_comment ?? "");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleReview(status) {
    setIsSaving(true);
    setError("");
    try {
      const updated = await reviewHomework({ homeworkId: homework.id, status, comment });
      onReviewed(updated);
    } catch (err) {
      console.error(err);
      setError("Сақлашда хатолик юз берди. Қайта уриниб кўринг.");
    } finally {
      setIsSaving(false);
    }
  }

  const status = STATUS_LABEL[homework.teacher_status] ?? STATUS_LABEL.pending;

  return (
    <div className="mt-3 bg-white border-2 border-aqua/15 rounded-2xl p-4 animate-pop-in">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-xs font-bold rounded-full px-2.5 py-1 ${status.cls}`}>
          {status.text}
        </span>
      </div>

      <pre className="whitespace-pre-wrap font-body text-sm text-ink bg-aqua-pale/40 rounded-xl p-3 mb-3">
        {homework.answer_text}
      </pre>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Изоҳ ёзинг (ихтиёрий)..."
        rows={2}
        className="w-full rounded-xl bg-white border-2 border-aqua/15 px-3 py-2 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-aqua transition-colors resize-none mb-3"
      />

      {error && <p className="text-coral-deep text-xs mb-3">{error}</p>}

      <div className="flex gap-2">
        <Button variant="primary" fullWidth={false} disabled={isSaving} onClick={() => handleReview("approved")} className="flex-1 !py-2.5 !text-sm">
          ✅ Аъло
        </Button>
        <Button variant="coral" fullWidth={false} disabled={isSaving} onClick={() => handleReview("needs_revision")} className="flex-1 !py-2.5 !text-sm">
          🔄 Тузатиш керак
        </Button>
      </div>
    </div>
  );
}
