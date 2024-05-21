import db from "../db";

export const getCourses = async (req, res) => {
  try {
    const { educatorId } = req.params;
    const courses = await db.course.findMany({
      where: { educatorId },
    });

    res.status(200).send({ data: courses });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching courses");
  }
};

export const getCourseDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await db.course.findUnique({
      where: { id },
      include: {
        resources: true,
        Educator: true,
        sections: {
          include: {
            modules: true,
          },
        },
      },
    });

    res.status(200).send({ data: course });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching course details");
  }
};

export const createCourse = async (req, res) => {
  const { educatorId } = req.params;
  console.log(educatorId);
  const { title, description, summary, level, coverPhoto } = req.body;
  const upperCaseLevel = level.toUpperCase();
  try {
    const course = await db.course.create({
      data: {
        title,
        description,
        educatorId,
        summary,
        level: upperCaseLevel,
        coverPhoto,
      },
    });
    res.status(201).send({ message: "Course created successfully", course });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating course");
  }
};

export const publishCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await db.course.update({
      where: { id },
      data: {
        published: true,
      },
    });
    res.status(200).send({ message: "Course published successfully", course });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while publishing course");
  }
};

export const editCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, summary, level, coverPhoto } = req.body;
  try {
    const course = await db.course.update({
      where: { id },
      data: {
        title,
        description,
        summary,
        level,
        coverPhoto,
      },
    });
    res.status(200).send({ message: "Course edited successfully", course });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while editing course");
  }
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    await db.course.delete({
      where: { id },
    });
    res.status(200).send({ message: "Course deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting course");
  }
};
