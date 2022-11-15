import jwt from "jsonwebtoken";

export function generateJWT(payload) {
  return jwt.sign(payload, process.env.JWT_KEY);
}
export function validateJWT(token) {
  return jwt.verify(token, process.env.JWT_KEY);
}
