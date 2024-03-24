// done by muhamamd nabeel

import db from "../db";

/**
 * @param req
 * @param res
 * @returns object
 * @description get a project
 */

export const getProjects = async (req, res) => {
  try {
    const { id } = req.param;
    const projects = await db.project.findMany({
      where: { id },
    });
    res.status(200).send({ data: projects });
  } catch (error) {
    res.status(500).send("An error occurred while fetching projects");
  }
}; // done by muhamamd nabeel

/**
 * @param req
 * @param res
 * @returns object
 * @description  create a project
 */

export const createProject = async (req, res) => {
  const { title, description, url, courseId } = req.body;
  try {
    const project = await db.project.create({
      data: {
        title,
        description,
        url,
        courseId,
      },
    });
    res
      .status(201)
      .send({ message: "Project created successfully", data: project });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the project");
  }
};

/**
 * @param req
 * @param res
 * @returns object
 * @description edit a project
 */

export const editProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, url, courseId } = req.body;
  try {
    const project = await db.project.update({
      where: { id },
      data: {
        title,
        description,
        url,
        courseId,
      },
    });
    res
      .status(200)
      .send({ message: "Project updated successfully", data: project });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the project");
  }
};


/**
 * @param req
 * @param res
 * @returns object
 * @description delete a project
 */


export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await db.project.delete({
      where: { id },
    });
    res.status(200).send({ message: "Project deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the project");
  }
}