import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

export function passwordHash(password) {
  return bcrypt.hashSync(password, salt);
}

export function comparePassword(passwordInput, passwordDB) {
  return bcrypt.compareSync(passwordInput, passwordDB);
}
