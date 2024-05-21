import db from "../db";

export const getSections = async (req, res) => {
  try {
    const { courseId } = req.params;
    const sections = await db.section.findMany({
      where: { courseId },
      include: {
        modules: true,
      },
    });
    console.log(sections);
    res.status(200).json({ data: sections });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching sections");
  }
};

export const createSection = async (req, res) => {
  const { courseId } = req.params;
  const { title } = req.body;
  try {
    const section = await db.section.create({
      data: {
        title,
        courseId,
      },
    });
    res.status(201).send({ message: "Section created successfully", section });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating section");
  }
};

export const editSection = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const section = await db.section.update({
      where: { id },
      data: {
        title,
      },
    });
    res.status(200).send({ message: "Section updated successfully", section });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating section");
  }
};

export const deleteSection = async (req, res) => {
  const { id } = req.params;
  try {
    await db.section.delete({
      where: { id },
    });
    res.status(200).send({ message: "Section deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting section");
  }
};
