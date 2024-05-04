import db from "../db";

// Get all projects for a specific course
export const getAllProjectsForCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const projects = await db.project.findMany({
      where: { courseId },
    });
    res.status(200).json({ data: projects });
  } catch (error) {
    console.error("Error getting projects for course:", error);
    res.status(500).send("An error occurred while fetching projects for the course.");
  }
};

// Get a project by ID
export const getProjectById = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await db.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return res.status(404).send("Project not found.");
    }
    res.status(200).json({ data: project });
  } catch (error) {
    console.error("Error getting project:", error);
    res.status(500).send("An error occurred while fetching the project.");
  }
};

// Create a new project
export const createProject = async (req, res) => {
  try {
    const { title, description, url } = req.body;
    const { courseId } = req.params;
    const newProject = await db.project.create({
      data: {
        title,
        description,
        url,
        courseId,
      },
    });
    res.status(200).json({ data: newProject });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).send("An error occurred while creating the project.");
  }
};

// Update an existing project
export const updateProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { title, description, url } = req.body;
    const updatedProject = await db.project.update({
      where: { id: projectId },
      data: {
        title,
        description,
        url,
      },
    });
    res.status(200).json({ data: updatedProject });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).send("An error occurred while updating the project.");
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    await db.project.delete({
      where: { id: projectId },
    });
    res.status(200).send("Project deleted successfully.");
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).send("An error occurred while deleting the project.");
  }
};