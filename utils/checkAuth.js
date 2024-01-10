import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = (req.header.authorization || "").replace(/Bearer\s?/, "");
  res.send(token);
};
