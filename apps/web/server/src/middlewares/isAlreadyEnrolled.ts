import db from "../db";

export const isAlreadyEnrolled = async (req, res, next) => {
  const { studentId } = req.body;
  const { courseId } = req.params;
  console.log(courseId, studentId);
  try {
    const enrollment = await db.enrollment.findFirst({
      where: {
        courseId,
        studentId,
      },
    });
    console.log(enrollment);
    if (enrollment) {
      console.log("You are already enrolled in this course");
      return res.status(400).send("You are already enrolled in this course");
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while checking enrollment");
  }
};
