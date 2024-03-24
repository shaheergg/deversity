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


export default router;
