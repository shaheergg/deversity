import db from "../db";

export const getStudentEnrollments = async (req, res) => {
  const { studentId } = req.params;
  try {
    const enrollments = await db.enrollment.findMany({
      where: { studentId },
    });
    res.status(200).send({ data: enrollments });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching enrollments");
  }
};

export const getCourseEnrollments = async (req, res) => {
  const { courseId } = req.params;
  try {
    const enrollments = await db.enrollment.findMany({
      where: { courseId },
    });
    res.status(200).send({ data: enrollments });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching enrollments");
  }
};

export const enrollCourse = async (req, res) => {
  const { studentId, courseId } = req.params;
  try {
    const enrollment = await db.enrollment.create({
      data: {
        studentId,
        courseId,
        progress: {
          create: {
            percentage: 0,
          },
        },
      },
    });
    res
      .status(201)
      .send({ message: "Enrollment created successfully", enrollment });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating enrollment");
  }
};
