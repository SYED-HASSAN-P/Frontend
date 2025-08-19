import express from "express";
import { createCourse, getCourses } from "../controllers/courseController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// with file upload
router.post("/", upload.single("thumbnail"), createCourse);
router.get("/", getCourses);

export default router;
