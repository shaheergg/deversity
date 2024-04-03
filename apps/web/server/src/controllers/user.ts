import db from "../db";
import { generateJWT, hashPassword, comparePassword } from "../lib";

/**
 *
 * @param req
 * @param res
 * @returns object
 * @description create a user
 */

export const createUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await db.user.create({
      data: {
        email,
        password: await hashPassword(password),
        role: await role.toUpperCase(),
      },
    });
    const jwt = generateJWT(user);
    res.json({ token: jwt, role: user.role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 *
 * @param req
 * @param res
 * @returns object
 * @description sign in a user
 */

export const signIn = async (req, res) => {
  const role = req.params.role.toUpperCase();

  try {
    const { email, password } = req.body;
    const user = await db.user.findUnique({
      where: {
        email,
        role,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const jwt = generateJWT(user);
    res.json({ token: jwt, role: user.role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
