import { AnyARecord } from "dns";
import db from "../db";

export const attachId = async (req, res, next) => {
  console.log(req.user.role.toLowerCase());
  try {
    let role = req.user.role.toLowerCase();
    if (!role) {
      throw new Error("Role not provided");
    }
    role = role.toLowerCase();

    let idField: string;
    let entity: string;

    switch (role) {
      case "educator":
        entity = "educator";
        idField = "educatorId";
        break;
      case "student":
        entity = "student";
        idField = "studentId";
        break;
      case "admin":
        entity = "admin";
        idField = "adminId";
        break;
      default:
        throw new Error("Invalid role");
    }

    const userData = await (db[entity] as any).findUnique({
      where: {
        userId: req.user.id,
      },
    });

    if (!userData) {
      throw new Error(`${role} data not found for this user`);
    }

    req.body[idField] = userData.id;

    next();
  } catch (error) {
    next(error);
  }
};
