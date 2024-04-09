import { Router } from "express";
import { createAdmin, getAdmin } from "./controllers/admin";
import { body } from "express-validator";
import { errorHandler } from "./middlewares/errorHandler";
import {
  createEducator,
  getEducators,
  getEductor,
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
  deleteProject 
} from './controllers/project';

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

router.get("/eductors", adminAccess, getEducators);
router.post(
  "/eductors",
  body("name").isString(),
  body("about").isString(),
  errorHandler,
  createEducator
);
// router.get("/eductors/:id", adminAccess, getEductor);

// ----------------- Student routes -----------------

router.get("/students", adminAccess, getStudents);
router.post(
  "/students",
  body("name").isString(),
  body("dob").isDate(),
  body("school").isString(),
  errorHandler,
  createStudent
);

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

<<<<<<< HEAD
// ----------------- Submission routes -----------------
import {
  createSubmission,
  getSubmissions,
  editSubmission,
  deleteSubmission,
} from "./controllers/submission";

router.get("/submissions/:studentId", getSubmissions);
router.post(
  "/submissions",
  body("studentId").isString(),
  body("link").isString(),
  createSubmission
);

router.put(
  "/submissions/:id",
  body("id").isString(),
  body("link").isString(),
  editSubmission
);

router.delete("/submissions/:id", deleteSubmission);



// ----------------- Project routes -----------------

import {
  createProject,
  getProjects,
  editProject,
  deleteProject,
} from "./controllers/project";


router.get("/projects/:id", getProjects);
router.post(
  "/projects",
  body("title").isString(),
  body("description").isString().optional(),
  body("url").isString(),
  body("courseId").isString(),
  createProject
);

router.put(
  "/projects/:id",
  body("title").isString(),
  body("description").isString().optional(),
  body("url").isString(),
  body("courseId").isString(),
  editProject
);


router.delete("/projects/:id", deleteProject);

=======
// // --------------------- Resource Routes-------------------------

router.get(
  "/course/resources/:courseId",
  errorHandler,
  getResourcesForCourse
);
router.get(
  "/module/resources/:moduleId",
  errorHandler,
  getResourcesForModule
);
router.post(
  "/course/resources/:courseId",
  body("title").isString(),
  body("description").optional().isString(),
  body("url").isString(),
  body("type").isIn(["Video", "File", "Link"]),
  errorHandler,
  addResourceToCourse,
);

router.post(
  "/module/resources/:moduleId",
  body("title").isString(),
  body("description").optional().isString(),
  body("url").isString(),
  body("type").isIn(["Video", "File", "Link"]),
  errorHandler,
  addResourceToModule,
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
router.delete(
  "/resources/:resourceId",
  errorHandler,
  deleteResource
);

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

router.delete(
  "/module/notes/:noteId",
  errorHandler, 
  deleteNote
);

// ----------------- Project Routes --------------------------

router.get(
  "/projects/:courseId",
  errorHandler,
  getAllProjectsForCourse
);
router.get(
  "/project/:projectId",
  errorHandler,
  getProjectById
);
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
router.delete(
  "/project/:projectId",
  errorHandler,
  deleteProject
);

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
router.delete(
  "/submission/:submissionId",
  errorHandler,
  deleteSubmission
);


// ----------------- Course routes -----------------

router.get("/courses/:educatorId", getCourses);
router.get("/course/:id", getCourseDetails);
router.post(
  "/courses/:educatorId",
  body("title").isString(),
  body("description").isString(),
  body("summary").isString(),
  body("coverPhoto").isString().optional(),
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
router.get("/modules/:moduleId/next", getNextModule);
router.get("/modules/:moduleId/previous", getPreviousModule);
router.get("/modules/:moduleId", getModule);
router.delete("/modules/:moduleId", deleteModule);
router.put(
  "/modules/:moduleId",
  body("title").isString(),
  body("content").isString().optional(),
  errorHandler,
  updateModule
);

// ----------------- Enrollment routes -----------------

router.get("/students/:studentId/enrollments", getStudentEnrollments);
router.get("/courses/:courseId/enrollments", getCourseEnrollments);
router.post("/students/:studentId/courses/:courseId/enroll", enrollCourse);
>>>>>>> 6b10afb11ee07548e8de99d7fbc34384c4673e35

export default router;
