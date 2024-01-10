import { body } from "express-validator";

export const registerValidation = [
  body("email", "Invalid email").isEmail(),
  body("password", "Invalid password").isLength({ min: 5 }),
  body("fullName", "Invalid name").isLength({ min: 2 }),
  body("avatarURL", "Invalid url").optional().isURL(),
];
