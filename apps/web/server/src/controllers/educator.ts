import db from "../db";
/**
 *
 * @param req
 * @param res
 * @returns json object
 * @description Get all educators
 */
export const getEducators = async (req, res) => {
  try {
    const educators = await db.educator.findMany();
    res.status(200).send({ data: educators });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching educators");
  }
};

/**
 *
 * @param req
 * @param res
 * @returns json object
 * @description Create educator
 */

export const createEducator = async (req, res) => {
  const userId = req.user.id;
  const { name, about } = req.body;
  try {
    const educator = await db.educator.create({
      data: {
        name,
        about,
        userId,
        verified: false,
      },
    });
    res
      .status(201)
      .send({ message: "Educator created successfully", educator });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating educator");
  }
};

/**
 *
 * @param req
 * @param res
 * @returns json object
 * @description Get one educator
 */

export const getEductor = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  try {
    const educator = await db.educator.findUnique({
      where: { id, userId },
    });
    if (!educator) {
      return res.status(404).send("Educator not found");
    }
    res.status(200).send({ data: educator });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching educator");
  }
};
