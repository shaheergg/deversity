// work done by Muhammad Nabeel

import db from '../db';

/**
 * @param req
 * @param res
 * @returns object
 * @description create a submission
 */

export const getSubmissions = async (req, res) => {
  const { studentId } = req.params;
  try {
    const submissions = await db.submission.findMany({
      where: { studentId },
    });
    res.status(200).send({ data: submissions });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching submissions");
  }
};

/**
 * @param req
 * @param res
 * @returns object
 * @description create a submission
 */

export const createSubmission = async (req, res) => {
const { studentId, projectId, link } = req.body;
try {
    const submission = await db.submission.create({
        data: {
            link,
            studentId, // Assuming studentId is a number, convert it to the appropriate type

            projectId,
        },
    });
    res.status(201).send({ message: "Submission created successfully", data: submission });
} catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the submission");
}
}

/**
 * @param req
 * @param res
 * @returns object
 * @description edit a submission
 */

export const editSubmission = async (req, res) => {
  const { id } = req.params;
  const { link } = req.body;
  try {
    const submission = await db.submission.update({
      where: { id },
      data: {
        link,
      },
    });
    res.status(200).send({ message: "Submission updated successfully", data: submission });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the submission");
  }
}


/**
 * @param req
 * @param res
 * @returns object
 * @description delete a submission
 */


export const deleteSubmission = async (req, res) => {
  const { id } = req.params;
  try {
    await db.submission.delete({
      where: { id },
    });
    res.status(200).send({ message: "Submission deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the submission");
  }
}