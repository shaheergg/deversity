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

export const getEducator = async (req, res) => {
  const educatorId = req.educatorId;
  console.log(educatorId);
  try {
    const educator = await db.educator.findUnique({
      where: {
        id: educatorId,
        userId: req.user.id,
      },
    });

    if (!educator) {
      console.log(res);
      return res.status(404).send("Educator not found");
    }
    res.status(200).send({ data: educator });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching educator");
  }
};

export const updateEducatorStatus = async (req, res) => {
  const { status, id } = req.body;
  try {
    const educator = await db.educator.update({
      where: {
        id,
      },
      data: {
        verified: status === "verified",
      },
    });

    res.status(200).send({
      message: `Educator with ID ${educator.id} status updated successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating educator");
  }
};
