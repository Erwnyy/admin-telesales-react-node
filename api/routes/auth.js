import express from "express";
import { Register, Login } from "../controllers/auth.js";

const router = express.Router();

// router.post("/register", register)
// router.post("/login", login)

router.post("/register", Register)
router.post("/login", Login)


export default router