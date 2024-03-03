import { Router } from "express";
import { createAdmin, getAdmin } from "./controllers/admin";
import { body } from "express-validator";
import { errorHandler } from "./middlewares/errorHandler";

const router = Router();

router.get("/admin", getAdmin);
router.post(
  "/admin",
  body("name").isString(),
  body("address").isString(),
  body("phone").isString(),
  errorHandler,
  createAdmin
);

export default router;
