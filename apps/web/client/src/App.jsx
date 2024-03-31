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

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/student" element={<StudentRoute />}>
            <Route path="dashboard" element={<Student />} />
          </Route>
          <Route path="/educator" element={<EducatorRoute />}>
            <Route path="dashboard" element={<Educator />} />
          </Route>
          <Route path="/admin" element={<AdminRoute />}>
            <Route path="dashboard" element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
