import db from "../db";

export const isEligible = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const user = await db.user.findUnique({
      where: { id: userId, status: "ACTIVE" },
    });
    if (!user) {
      return res
        .status(401)
        .send("User is not eligible to perform this action");
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while checking eligibility");
  }
};
