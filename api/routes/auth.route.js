import express from "express";
import { signup, signin, google } from "../controllers/auth.controller.js";
import { signOut } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signOut);
router.post("/google", google);

export default router;
