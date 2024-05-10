import db from "../db";

/**
 * @param req
 * @param res
 * @returns object
 * @description get all the students
 */

export const getStudents = async (req, res) => {
  try {
    const students = await db.student.findMany();
    res.status(200).res.json({ data: students });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @param req
 * @param res
 * @returns object
 * @description create a student
 */

export const createStudent = async (req, res) => {
  const { name, dob, school } = req.body;
  const userId = req.user.id;
  try {
    const student = await db.student.create({
      data: {
        name,
        eligible: true,
        level: "BEGINNER",
        dob,
        school,
        userId,
      },
    });
    res.json({ message: "Student created successfully", student });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @param req
 * @param res
 * @returns object
 * @description get a student
 */

export const getStudent = async (req, res) => {
  const userId = req.user.id;
  try {
    const student = await db.student.findUnique({
      where: { userId },
    });
    res.json({ data: student });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
