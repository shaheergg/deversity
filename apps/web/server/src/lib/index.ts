import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

/**
 *
 * @param password
 * @param hash
 * @returns {boolean} - returns a boolean
 * @description - compares the password and hash
 */

export const comparePassword = (password: string, hash: string) => {
  const match = bcrypt.compare(password, hash);
  return match;
};

/**
 *
 * @param password
 * @returns {string} - returns a string
 * @description - hashes the password
 */

export const hashPassword = (password: string) => {
  const hash = bcrypt.hash(password, 5);
  return hash;
};

/**
 *
 * @param user
 * @returns {string} - returns a string
 * @description - generates a jwt token
 */

export const generateJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  return token;
};
