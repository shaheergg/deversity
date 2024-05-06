import db from "../db";

export const isAlreadyEnrolled = (req, res, next) => {
  const { courseId, studentId } = req.body;

  try {
    const enrollment = db.enrollment.findFirst({
      where: {
        courseId,
        studentId,
      },
    });

    if (enrollment) {
      return res.status(400).send("You are already enrolled in this course");
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while checking enrollment");
  }
};
