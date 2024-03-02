import db from "../db";

/**
 * @param req
 * @param res
 * @returns object
 * @description create an admin
 */

export const createAdmin = async (req, res) => {
  const { name, address, phone } = req.body;
  const userId = req.user.id;
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Forbidden" });
  }
  try {
    const admin = await db.admin.create({
      data: {
        name,
        address,
        phone,
        userId,
      },
    });
    res.json({ message: "Admin created successfully", admin });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns json object
 * @description get an admin
 */

export const getAdmin = async (req, res) => {
  const userId = req.user.id;
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Forbidden" });
  }
  try {
    const admin = await db.admin.findUnique({
      where: {
        userId,
      },
    });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json({ admin });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
