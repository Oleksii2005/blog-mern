import express from "express";
import mongoose from "mongoose";
import { loginValidation, registerValidation } from "./validation.js";
import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/UserController.js";

mongoose
  .connect(
    "mongodb+srv://kabalesha:Ax300305@clustermern.uin4gkd.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB is Okay"))
  .catch((error) => console.log("DB error", error));

const app = express();

app.use(express.json());

app.post("/auth/login", loginValidation, UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.listen(4444, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log("OK");
});
