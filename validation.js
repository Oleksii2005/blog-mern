import { body } from "express-validator";

export const loginValidation = [
  body("email", "Invalid email").isEmail(),
  body("password", "Invalid password").isLength({ min: 5 }),
];

export const registerValidation = [
  body("email", "Invalid email").isEmail(),
  body("password", "Invalid password").isLength({ min: 5 }),
  body("fullName", "Invalid name").isLength({ min: 2 }),
  body("avatarURL", "Invalid url").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Enter the article title").isLength({ min: 3 }).isString(),
  body("text", "Enter the article text").isLength({ min: 10 }).isString(),
  body("tags", "Invalid tag format (should be an array)").optional().isArray(),
  body("imageUrl", "Invalid image link").optional().isString(),
];
