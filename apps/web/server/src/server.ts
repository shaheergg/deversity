import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";
import { protect } from "./middlewares/auth";
import { createUser, signIn } from "./controllers/user";
import { attachId } from "./middlewares/attachId";
import { getCatalog } from "./controllers/catalog";
const app = express();


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protect, router);

app.use("/api",  router);


app.get("/catalog",getCatalog);
app.post("/register", createUser);
app.post("/login/:role", signIn);

export default app;
