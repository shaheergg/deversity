import db from "../db";
export const getCatalog = async (req, res) => {
  try {
    const educatorId = req.educatorId;
    const courses = await db.course.findMany({
      where:{published:true},
    });

    res.status(200).send({ data: courses });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching courses");
  }
};