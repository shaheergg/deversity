import { validationResult } from "express-validator";

export const errorHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};
