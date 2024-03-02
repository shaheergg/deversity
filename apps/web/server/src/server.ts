import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";
import { protect } from "./middlewares/auth";
import { createUser, signIn } from "./controllers/user";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to deversity API" });
});

app.use("/api", protect, router);

app.post("/register", createUser);
app.post("/login/:role", signIn);

export default app;
