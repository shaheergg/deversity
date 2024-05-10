import db from "../db";

export const attachId = async (req, res, next) => {
  console.log(req.user.id);
  console.log(req.user.role.toLowerCase());
  try {
    let role = req.user.role.toLowerCase();
    if (!role) {
      throw new Error("Role not provided");
    }
    role = role.toLowerCase();

    let idField;
    let entity;

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

    //console.log("this is user dataaaa ",userData);

    if (!userData) {
      console.log(`${role} data not found for this user`);
      throw new Error(`${role} data not found for this user`);
    }

    req.body[idField] = userData.id;
    //console.log("this is role's id",req.body[idField]);
    next();
  } catch (error) {
    console.log(String(error));
    next(error);
  }
};
