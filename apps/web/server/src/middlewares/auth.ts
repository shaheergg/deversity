import jwt from "jsonwebtoken";

import process from "process";
// write appropriate comment

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {object} - returns a json object
 * @description - checks if the user is authenticated
 */

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const [, token] = bearer.split(" ");
  // authorization: "Bearer shhhhldkjfjfkffkkfkfk"
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
