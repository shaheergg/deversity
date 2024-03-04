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

const router = Router();

// ----------------- Admin routes -----------------
router.get("/admin", getAdmin);
router.post(
  "/admin",
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
router.get("/eductors/:id", adminAccess, getEductor);

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

router.get("/students/:id", adminAccess, getStudent);

export default router;
