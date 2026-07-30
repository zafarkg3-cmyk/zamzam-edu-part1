import { useCallback, useState } from "react";

const STORAGE_KEY = "zamzam_current_student";

/**
 * Keeps the current student's cloud profile (id, name, surname, groupName)
 * in localStorage so it survives page reloads and reopening the app.
 */
export function useStudent() {
  const [student, setStudentState] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const setStudent = useCallback((next) => {
    setStudentState(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* localStorage may be unavailable — session still works */
    }
  }, []);

  const clearStudent = useCallback(() => {
    setStudentState(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return { student, setStudent, clearStudent };
}
