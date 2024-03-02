import { Router } from "express";
import { createAdmin, getAdmin } from "./controllers/admin";
const router = Router();

router.get("/admin", getAdmin);
router.post("/admin", createAdmin);

export default router;
