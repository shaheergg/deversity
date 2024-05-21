import { Router } from "express";
import { createAdmin, getAdmin } from "./controllers/admin";
import { body } from "express-validator";
import { errorHandler } from "./middlewares/errorHandler";
import {
  createEducator,
  getEducator,
  getEducators,
} from "./controllers/educator";
import {
  getResourcesForCourse,
  getResourcesForModule,
  addResourceToModule,
  addResourceToCourse,
  updateResource,
  deleteResource,
} from "./controllers/resource";

import {
  getAllNotes,
  addNote,
  updateNote,
  deleteNote,
} from "./controllers/note";

import { adminAccess } from "./middlewares/adminAccess";
import { createStudent, getStudent, getStudents } from "./controllers/student";
import {
  createCredential,
  deleteCredential,
  editCredential,
  getCredentials,
} from "./controllers/credential";
import {
  createCourse,
  deleteCourse,
  editCourse,
  getCourseDetails,
  getCourses,
  publishCourse,
} from "./controllers/course";
import {
  createSection,
  deleteSection,
  editSection,
  getSections,
} from "./controllers/section";
import {
  createModule,
  deleteModule,
  getModule,
  getModules,
  getNextModule,
  getPreviousModule,
  updateModule,
} from "./controllers/module";
import {
  enrollCourse,
  getCourseEnrollments,
  getStudentEnrollments,
} from "./controllers/enrollment";

import {
  getAllSubmissionsForProject,
  getSubmissionById,
  createSubmission,
  updateSubmission,
  deleteSubmission,
} from "./controllers/submission";

import {
  getAllProjectsForCourse,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "./controllers/project";
import { attachId } from "./middlewares/attachId";
import { isAlreadyEnrolled } from "./middlewares/isAlreadyEnrolled";
import { upload } from "./controllers/upload";
import multer from "multer";
const router = Router();
// ----------------- Admin routes -----------------
router.get("/admin", adminAccess, getAdmin);
router.post(
  "/admin",
  adminAccess,
  body("name").isString(),
  body("address").isString(),
  body("phone").isString(),
  errorHandler,
  createAdmin
);

// ----------------- Educator routes -----------------

router.get("/educators", adminAccess, getEducators);
router.post(
  "/educators",
  body("name").isString(),
  body("about").isString(),
  errorHandler,
  createEducator
);

router.get("/educator", attachId, getEducator);

// ----------------- Student routes -----------------

router.get("/students", adminAccess, getStudents);
router.post(
  "/students",
  body("name").isString(),
  body("dob").isString(),
  body("school").isString(),
  errorHandler,
  createStudent
);

router.get("/student", getStudent);

// router.get("/students/:id", adminAccess, getStudent);

// ----------------- Credential routes -----------------

router.get("/credentials/:educatorId", getCredentials);
router.post(
  "/credentials/:educatorId",
  body("title").isString(),
  body("description").isString().optional(),
  body("url").isString(),
  body("type")
    .isString()
    .isIn(["Certificate", "Diploma", "Degree", "License", "Other"]),
  attachId,
  errorHandler,
  createCredential
);
router.put(
  "/credentials/:id",
  body("title").isString(),
  body("description").isString().optional(),
  body("url").isString(),
  body("type")
    .isString()
    .isIn(["Certificate", "Diploma", "Degree", "License", "Other"]),
  errorHandler,
  editCredential
);
router.delete("/credentials/:id", deleteCredential);

// // --------------------- Resource Routes-------------------------

router.get("/course/resources/:courseId", errorHandler, getResourcesForCourse);
router.get("/module/resources/:moduleId", errorHandler, getResourcesForModule);
router.post(
  "/course/resources/:courseId",
  body("title").isString(),
  body("description").optional().isString(),
  body("url").isString(),
  body("type").isIn(["Video", "File", "Link"]),
  errorHandler,
  addResourceToCourse
);

router.post(
  "/module/resources/:moduleId",
  body("title").isString(),
  body("description").optional().isString(),
  body("url").isString(),
  body("type").isIn(["Video", "File", "Link"]),
  errorHandler,
  addResourceToModule
);

router.put(
  "/resources/:resourceId",
  body("title").isString(),
  body("description").optional().isString(),
  body("url").isString(),
  body("type").isIn(["Video", "File", "Link"]),
  errorHandler,
  updateResource
);
router.delete("/resources/:resourceId", errorHandler, deleteResource);

// --------------------- Notes Route --------------------

router.get("/module/notes/:moduleId", errorHandler, getAllNotes);

router.post(
  "/module/notes/:moduleId",
  body("title").optional().isString(),
  body("description").isString(),
  errorHandler,
  addNote
);

router.put(
  "/module/notes/:noteId",
  body("title").optional().isString(),
  body("description").isString(),
  errorHandler,
  updateNote
);

router.delete("/module/notes/:noteId", errorHandler, deleteNote);

// ----------------- Project Routes --------------------------

router.get("/projects/:courseId", errorHandler, getAllProjectsForCourse);
router.get("/project/:projectId", errorHandler, getProjectById);
router.post(
  "/project/:courseId",
  body("title").isString(),
  body("description").isString(),
  body("url").optional().isString(),
  errorHandler,
  createProject
);
router.put(
  "/project/:projectId",
  body("title").isString(),
  body("description").isString(),
  body("url").optional().isString(),
  updateProject
);
router.delete("/project/:projectId", errorHandler, deleteProject);

// --------------------- Submission Routes --------------------

router.get("/submissions/:projectId", getAllSubmissionsForProject);
router.get("/submission/:submissionId", getSubmissionById);
router.post(
  "/submission/:projectId",
  body("link").isString(),
  body("createdAt").optional().isString(),
  errorHandler,
  createSubmission
);
router.put(
  "/submission/:submissionId",
  body("link").isString(),
  errorHandler,
  updateSubmission
);
router.delete("/submission/:submissionId", errorHandler, deleteSubmission);

// ----------------- Course routes -----------------

router.get("/courses/:educatorId", getCourses);
router.get("/course/:id", getCourseDetails);
router.post(
  "/courses/:educatorId",
  body("title").isString(),
  body("description").isString(),
  body("summary").isString(),
  body("coverPhoto").isString().optional(),
  body("level").isString().isIn(["Beginner", "Intermediate", "Pro"]),
  errorHandler,
  createCourse
);
router.put("/courses/:id/publish", publishCourse);
router.put(
  "/courses/:id",
  body("title").isString(),
  body("description").isString(),
  body("summary").isString(),
  body("coverPhoto").isString().optional(),
  errorHandler,
  editCourse
);
router.delete("/courses/:id", deleteCourse);

// ----------------- Section routes -----------------

router.get("/sections/:courseId", getSections);
router.post(
  "/sections/:courseId",
  body("title").isString(),
  errorHandler,
  createSection
);
router.put(
  "/sections/:id",
  body("title").isString(),
  errorHandler,
  editSection
);
router.delete("/sections/:id", deleteSection);

// ----------------- Module routes -----------------

router.post(
  "/modules/:sectionId",
  body("title").isString(),
  body("content").isString().optional(),
  errorHandler,
  createModule
);
router.get("/modules/:sectionId", getModules);
router.get("/modules/:moduleId/next", getNextModule);
router.get("/modules/:moduleId/previous", getPreviousModule);
router.get("/modules/:moduleId/content", getModule);
router.delete("/modules/:moduleId", deleteModule);
router.put(
  "/modules/:moduleId",
  body("title").isString().optional(),
  body("content").isString().optional(),
  errorHandler,
  updateModule
);

// ----------------- Enrollment routes -----------------
router.get("/students/enrollments", attachId, getStudentEnrollments);
router.get("/courses/:courseId/enrollments", getCourseEnrollments);
router.post(
  "/students/courses/:courseId/enroll",
  attachId,
  isAlreadyEnrolled,
  enrollCourse
);

router.post("/upload", upload);

export default router;
