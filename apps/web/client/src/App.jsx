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
import EnrollCourse from "./pages/student/EnrollCourse";
import { Toaster } from "sonner";
import EducatorDashboard from "./pages/educator/Dashboard";
import Course from "./pages/student/Course";
import CredentialsPage from "./pages/educator/Credentials";
import CreateCourse from "./pages/educator/CreateCourse";
import EducatorCourses from "./pages/educator/Courses";
import Catalog from "./pages/student/Catalog";
import EditCourse from "./pages/educator/EditCourse";
import Courses from "./pages/Courses";
import ModuleContent from "./pages/educator/ModuleContent";
import CourseContent from "./pages/student/CourseContent";
import Assessments from "./pages/educator/Assessments";
import EducatorAssessments from "./pages/educator/EducatorAssessments";
import Submission from "./pages/educator/Submissions";
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
              <Route path="/courses" element={<Courses />} />
            </Route>
            <Route path="/student" element={<StudentRoute />}>
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="learn/course" element={<Course />} />
              <Route
                path="courses/:courseId/modules/:moduleId"
                element={<CourseContent />}
              />
              <Route
                path="/student/learn/course/:courseId"
                element={<EnrollCourse />}
              />
            </Route>
            <Route path="/educator" element={<EducatorRoute />}>
              <Route path="dashboard" element={<EducatorDashboard />} />
              <Route path="credentials" element={<CredentialsPage />} />
              <Route path="create-course" element={<CreateCourse />} />
              <Route path="courses" element={<EducatorCourses />} />
              <Route path="assessments/add" element={<Assessments/>}/>
              <Route path="assessments" element={<EducatorAssessments/>}/>
              <Route path="submissions" element={<Submission/>} />
              <Route
                path="courses/:id/modules/:moduleId"
                element={<EditCourse />}
              />
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
