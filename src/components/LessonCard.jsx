import { Link } from "react-router-dom";

const STATE_STYLES = {
  locked: "bg-white/60 border-ink/10 opacity-60",
  unlocked: "bg-white border-aqua/30 shadow-soft hover:-translate-y-0.5",
  completed: "bg-white border-leaf/40 shadow-soft hover:-translate-y-0.5",
};

const FEEDBACK_STYLE = {
  pending: { text: "⏳ Ўқитувчи ҳали кўрмади", cls: "text-ink-faint" },
  approved: { text: "✅ Ўқитувчи: Аъло!", cls: "text-leaf-deep" },
  needs_revision: { text: "🔄 Ўқитувчи: тузатиш керак", cls: "text-coral-deep" },
};

/**
 * One lesson tile on the student dashboard. Locked lessons render as a
 * non-interactive div; unlocked/completed lessons are links into the lesson.
 * If the student has submitted homework for this lesson, a small feedback
 * line shows whether the teacher has reviewed it yet — this is the
 * "closing the loop" half of the teacher review feature.
 */
export default function LessonCard({ lesson, status, score, homeworkFeedback }) {
  const feedback = homeworkFeedback ? FEEDBACK_STYLE[homeworkFeedback.teacher_status] : null;

  const content = (
    <div
      className={`flex flex-col gap-2 rounded-2xl border-2 p-4 transition-all duration-200 ${STATE_STYLES[status]}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-aqua-pale flex items-center justify-center text-2xl shrink-0">
          {status === "locked" ? "🔒" : lesson.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-ink truncate">
            {lesson.id}-дарс: {lesson.titleUz}
          </p>
          <p className="text-sm text-ink-faint truncate">{lesson.titleEn}</p>
        </div>
        <div className="shrink-0 text-right">
          {status === "completed" && (
            <span className="inline-flex items-center gap-1 text-leaf-deep font-bold text-sm">
              ✅ {score}%
            </span>
          )}
          {status === "unlocked" && (
            <span className="text-aqua-deep font-bold text-sm">Бошлаш ➜</span>
          )}
          {status === "locked" && <span className="text-ink-faint text-sm">Қулфланган</span>}
        </div>
      </div>

      {feedback && (
        <div className={`text-xs font-semibold pl-[4.5rem] ${feedback.cls}`}>
          {feedback.text}
          {homeworkFeedback.teacher_comment && (
            <span className="block text-ink-faint font-normal mt-0.5">
              💬 {homeworkFeedback.teacher_comment}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (status === "locked") return content;

  return <Link to={`/lesson/${lesson.id}`}>{content}</Link>;
}
