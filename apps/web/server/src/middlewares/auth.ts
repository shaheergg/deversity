import jwt from "jsonwebtoken";

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
  const barear = req.headers.authorization;
  if (!barear) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const [, token] = barear.split(" ");
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
