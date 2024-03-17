import db from "../db";

/**
 * @param req
 * @param res
 * @returns {JsonObject}
 * @description get all the credentials of the educator
 */

export const getCredentials = async (req, res) => {
  try {
    const { educatorId } = req.params;
    const credentials = await db.credential.findMany({
      where: { educatorId },
    });
    res.status(200).send({ data: credentials });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching credentials");
  }
};

/**
 * @param req
 * @param res
 * @returns {JsonObject}
 * @description Create a new credential
 */

export const createCredential = async (req, res) => {
  const { educatorId } = req.params;
  const { title, description, url, type } = req.body;
  try {
    const credential = await db.credential.create({
      data: {
        title,
        description,
        url,
        educatorId,
        type,
      },
    });
    res
      .status(201)
      .send({ message: "Credential created successfully", credential });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating credential");
  }
};

/**
 * @param req
 * @param res
 * @returns {JsonObject}
 * @description Edit a credential
 */

export const editCredential = async (req, res) => {
  const { id } = req.params;
  const { title, description, url, type } = req.body;
  try {
    const credential = await db.credential.update({
      where: { id },
      data: {
        title,
        description,
        url,
        type,
      },
    });
    res
      .status(200)
      .send({ message: "Credential updated successfully", credential });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating credential");
  }
};

/**
 * @param req
 * @param res
 * @returns {JsonObject}
 * @description Delete a credential
 */

export const deleteCredential = async (req, res) => {
  const { id } = req.params;
  try {
    await db.credential.delete({ where: { id } });
    res.status(200).send({ message: "Credential deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting credential");
  }
};
