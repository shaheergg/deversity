import { Router } from "express";
import { createAdmin, getAdmin } from "./controllers/admin";
import { body } from "express-validator";
import { errorHandler } from "./middlewares/errorHandler";
import {
  createEducator,
  getEducators,
  getEductor,
} from "./controllers/educator";
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
export default router;
