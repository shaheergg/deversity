import { ROLES } from "../constants";
/**
 *
 * @param req
 * @param res
 * @param next
 * @returns json object
 * @description Check if user is an admin
 */

export const adminAccess = (req, res, next) => {
  const userRole = req.user.role.toLowerCase();
  if (userRole !== ROLES[0].toLowerCase()) {
    return res
      .status(403)
      .send("You are not authorized to access this resource");
  }
  next();
};
