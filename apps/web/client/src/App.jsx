import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import PublicRoute from "./routes/PublicRoutes";
import Student from "./pages/student/Student";
import StudentRoute from "./routes/StudentRoute";
import Educator from "./pages/educator/Educator";
import AdminRoute from "./routes/AdminRoute";
import EducatorRoute from "./routes/EducatorRoute";
import Admin from "./pages/admin/Admin";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";
import StudentDashboard from "./pages/student/Dashboard";
import EducatorLogin from "./pages/educator/Login";
import EducatorSignUp from "./pages/educator/SignUp";
import { Toaster } from "sonner";
import EducatorDashboard from "./pages/educator/Dashboard";
import Course from "./pages/student/Course";
import CredentialsPage from "./pages/educator/Credentials";
function App() {
  return (
    <>
      <div>
        <RootLayout>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route path="" element={<LandingPage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="educator/login" element={<EducatorLogin />} />
              <Route path="educator/signup" element={<EducatorSignUp />} />
            </Route>
            <Route path="/student" element={<StudentRoute />}>
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="learn/course" element={<Course />} />
            </Route>
            <Route path="/educator" element={<EducatorRoute />}>
              <Route path="dashboard" element={<EducatorDashboard />} />
              <Route path="credentials" element={<CredentialsPage />} />
            </Route>
            <Route path="/admin" element={<AdminRoute />}>
              <Route path="dashboard" element={<Admin />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RootLayout>
        <Toaster />
      </div>
    </>
  );
}

export default App;
