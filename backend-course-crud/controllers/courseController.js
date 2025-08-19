import Course from "../models/Course.js";

export const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      duration,
      price,
      instructor,
      level,
      enrollmentType,
      capacity,
      startDate,
      endDate,
      categories,
      lessons,
    } = req.body;

    // Parse arrays (because they come as JSON strings from FormData)
    const parsedCategories = JSON.parse(categories || "[]");
    const parsedLessons = JSON.parse(lessons || "[]");

    const thumbnailPath = req.file ? `/uploads/${req.file.filename}` : null;

    // Save to MongoDB
    const newCourse = await Course.create({
      title,
      description,
      duration,
      price,
      instructor,
      level,
      enrollmentType,
      capacity,
      startDate,
      endDate,
      categories: parsedCategories,
      lessons: parsedLessons,
      thumbnail: req.file ? `/uploads/${req.file.filename}` : null  // ✅ store only filename
    });
    await newCourse.save();
    res.status(201).json({
      message: "Course created successfully",
      course: newCourse,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Get all courses


export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};