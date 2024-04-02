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
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";
import StudentDashboard from "./pages/admin/Dashboard";
import EducatorLogin from "./pages/educator/Login";
import { Toaster } from "sonner";
function App() {
  return (
    <>
      <div>
        <RootLayout>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route path="" element={<LandingPage />} />
              <Route path="login" element={<Login />} />
              <Route path="educator/login" element={<EducatorLogin />} />
            </Route>
            <Route path="/student" element={<StudentRoute />}>
              <Route path="dashboard" element={<StudentDashboard />} />
            </Route>
            <Route path="/educator" element={<EducatorRoute />}>
              <Route path="dashboard" element={<Educator />} />
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
