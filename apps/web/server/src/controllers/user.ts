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
    //console.log(user);

    const jwt = generateJWT(user);
    res.status(200).json({ token: jwt, role: user.role });
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

// export const getUser = async (req, res) => {
//   try {
//     const users = await db.user.findMany({
//       select: {
//         email: true,
//         role: true,
//         educator: {
//           include: {
//             id: true,
//           },
//         },
//         student: true,
//         admin: true,
//       },
//     });
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const getAllUsers = async (req, res) => {
  try {
    const users = await db.user.findMany();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ message: "There was an error fetching all users" });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    const { id, status } = req.body();
    const user = db.user.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
    res.status(200).json({ message: "User status updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error updating user status" });
  }
};
