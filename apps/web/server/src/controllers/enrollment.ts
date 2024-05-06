import db from "../db";

export const getStudentEnrollments = async (req, res) => {
  //const { studentId } = req.params;
  const studentId = req.body.studentId;
  //console.log(studentId);
  try {
    const enrollments = await db.enrollment.findMany({
      where: { studentId },
      include : {
        Course: true,
        progress:true,
      }
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
  //console.log("This is student id for Enrollement",req.body.studentId);
  const studentId = req.body.studentId;
  const { courseId } = req.params;
  //console.log("This is course id for Enrollement",courseId);

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
