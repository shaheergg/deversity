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

export const getModules = async (req, res) => {
  const { sectionId } = req.params;
  try {
    const modules = await db.module.findMany({
      where: {
        sectionId,
      },
    });
    res.status(200).send({ data: modules });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching modules");
  }
};

const getStudentProgress = async (enrollmentId) => {
  const progress = await db.progress.findFirst({
    where: {
      enrollmentId,
    },
  });
  return progress;
};

const incrementStudentProgress = async (enrollmentId) => {
  const progress = await getStudentProgress(enrollmentId);
  if (!progress) {
    // Handle case where no progress is found
    throw new Error("Progress not found for enrollment");
  }

  const totalModules = await db.module.count(); // Get total number of modules
  const updatedPercentage = progress.percentage + 100 / totalModules;

  const updatedProgress = await db.progress.update({
    where: {
      id: progress.id,
    },
    data: {
      percentage: updatedPercentage,
    },
  });
  return updatedProgress;
};

/**
 *
 * @param req
 * @param res
 * @returns
 */
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
    if (!module) {
      return res.status(404).send("Module not found");
    }

    const studentId = req.user.id;
    const enrollment = await db.enrollment.findFirst({
      where: {
        studentId,
      },
    });
    await incrementStudentProgress(enrollment.id);
    const progress = await getStudentProgress(enrollment.id);
    res.status(200).send({ data: module, progress: progress });
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
    if (!module) {
      return res.status(404).send("Module not found");
    }
    res.status(200).send({ data: module });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching previous module");
  }
};

export const getModule = async (req, res) => {
  const { moduleId } = req.params;
  try {
    const module = await db.module.findUnique({
      where: { id: Number(moduleId) },
    });
    console.log(module);
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
  const { moduleId } = req.params;
  const { title, content } = req.body;
  try {
    const module = await db.module.update({
      where: { id: Number(moduleId) },
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
