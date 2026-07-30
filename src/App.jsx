import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Lesson from "./pages/Lesson";
import LessonResult from "./pages/LessonResult";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherDashboard from "./pages/TeacherDashboard";
import { useStudent } from "./hooks/useStudent";

export default function App() {
  const { student, setStudent, clearStudent } = useStudent();

  return (
    <div className="bg-sky-gradient min-h-dvh w-full">
      <Routes>
        <Route path="/" element={<Register onRegistered={setStudent} />} />

        <Route
          path="/dashboard"
          element={
            student ? (
              <Dashboard student={student} onSwitchStudent={clearStudent} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/lesson/:id"
          element={student ? <Lesson student={student} /> : <Navigate to="/" replace />}
        />

        <Route
          path="/result"
          element={student ? <LessonResult student={student} /> : <Navigate to="/" replace />}
        />

        <Route path="/teacher" element={<TeacherLogin />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
