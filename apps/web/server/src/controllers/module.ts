import db from "../db";

export const createModule = async (req, res) => {
  const { sectionId } = req.params;
  const { title, content } = req.body;
  try {
    const module = await db.module.create({
      data: {
        title,
        content,
        sectionId,
      },
    });
    res.status(201).send({ message: "Module created successfully", module });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating module");
  }
};

export const getNextModule = async (req, res) => {
  const { moduleId } = req.params;
  try {
    const module = await db.module.findFirst({
      where: {
        id: {
          gt: moduleId,
        },
      },
      orderBy: {
        id: "asc",
      },
    });
    res.status(200).send({ data: module });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching next module");
  }
};

export const getPreviousModule = async (req, res) => {
  const { moduleId } = req.params;
  try {
    const module = await db.module.findFirst({
      where: {
        id: {
          lt: moduleId,
        },
      },
      orderBy: {
        id: "desc",
      },
    });
    res.status(200).send({ data: module });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching previous module");
  }
};

export const getModule = async (req, res) => {
  const { id } = req.params;
  try {
    const module = await db.module.findUnique({
      where: { id },
    });
    res.status(200).send({ data: module });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching module");
  }
};

export const deleteModule = async (req, res) => {
  const { id } = req.params;
  try {
    await db.module.delete({
      where: { id },
    });
    res.status(200).send({ message: "Module deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting module");
  }
};

export const updateModule = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const module = await db.module.update({
      where: { id },
      data: {
        title,
        content,
      },
    });
    res.status(200).send({ message: "Module updated successfully", module });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating module");
  }
};
