import db from "../db";

// Get all submissions for a project
export const getAllSubmissionsForProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const submissions = await db.submission.findMany({
      where: { projectId },
    });
    res.status(200).json({ data: submissions });
  } catch (error) {
    console.error("Error getting submissions for project:", error);
    res.status(500).send("An error occurred while fetching submissions.");
  }
};

// Get a submission by ID
export const getSubmissionById = async (req, res) => {
  try {
    const { submissionId } = req.params;
    const submission = await db.submission.findUnique({
      where: { id: submissionId },
    });
    if (!submission) {
      return res.status(404).send("Submission not found.");
    }
    res.status(200).json({ data: submission });
  } catch (error) {
    console.error("Error getting submission:", error);
    res.status(500).send("An error occurred while fetching the submission.");
  }
};

// Create a new submission
export const createSubmission = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { link, studentId } = req.body;
    const newSubmission = await db.submission.create({
      data: {
        link,
        studentId,
        projectId,
      },
    });
    res.status(201).json({ data: newSubmission });
  } catch (error) {
    console.error("Error creating submission:", error);
    res.status(500).send("An error occurred while creating the submission.");
  }
};

// Update an existing submission
export const updateSubmission = async (req, res) => {
  try {
    const { submissionId } = req.params;
    const { link, studentId } = req.body;
    const updatedSubmission = await db.submission.update({
      where: { id: submissionId },
      data: {
        link,
        studentId,
      },
    });
    res.status(200).json({ data: updatedSubmission });
  } catch (error) {
    console.error("Error updating submission:", error);
    res.status(500).send("An error occurred while updating the submission.");
  }
};

// Delete a submission
export const deleteSubmission = async (req, res) => {
  try {
    const { submissionId } = req.params;
    await db.submission.delete({
      where: { id: submissionId },
    });
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting submission:", error);
    res.status(500).send("An error occurred while deleting the submission.");
  }
};

