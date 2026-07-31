import { useCallback, useState } from "react";

const API_URL = "https://api.languagetool.org/v2/check";

/**
 * Checks English grammar/spelling using LanguageTool's free public API —
 * no API key, no cost. This is a diagnostic aid, not a hard gate: if the
 * service is slow/unreachable, `checkLines` fails gracefully and the
 * caller just treats the homework as "not checked" rather than blocking
 * the student.
 */
export function useGrammarCheck() {
  const [isChecking, setIsChecking] = useState(false);

  /**
   * @param {string[]} lines the 10 homework lines (empty ones are ignored)
   * @returns {Promise<{lineHasError: boolean[], lineMessages: (string|null)[]} | null>}
   *   null means the check could not be completed (network/service issue).
   */
  const checkLines = useCallback(async (lines) => {
    setIsChecking(true);
    try {
      const text = lines.join("\n");
      const body = new URLSearchParams({ text, language: "en-US" });

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error(`LanguageTool responded ${response.status}`);

      const data = await response.json();

      // Map each match's character offset back to which line it falls on.
      const lineStarts = [];
      let cursor = 0;
      for (const line of lines) {
        lineStarts.push(cursor);
        cursor += line.length + 1; // +1 for the joining "\n"
      }

      const lineHasError = lines.map(() => false);
      const lineMessages = lines.map(() => null);

      for (const match of data.matches ?? []) {
        let lineIndex = 0;
        for (let i = lineStarts.length - 1; i >= 0; i--) {
          if (match.offset >= lineStarts[i]) {
            lineIndex = i;
            break;
          }
        }
        if (lines[lineIndex].trim().length === 0) continue; // ignore empty lines
        lineHasError[lineIndex] = true;
        if (!lineMessages[lineIndex]) {
          lineMessages[lineIndex] = match.shortMessage?.trim() || match.message?.trim() || "Хатолик топилди";
        }
      }

      return { lineHasError, lineMessages };
    } catch (err) {
      console.error("Grammar check unavailable:", err);
      return null;
    } finally {
      setIsChecking(false);
    }
  }, []);

  return { checkLines, isChecking };
}
