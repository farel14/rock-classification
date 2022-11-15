import { Op } from "sequelize";
import USER from "../models";
import { passwordHash, comparePassword } from "../utils/bcrypt";

class UserController {
  static async createUser(req, res, next) {
    const { username, email, password } = req.body;
    try {
      const hashedPassword = passwordHash(password)
      await USER.create({ username, email, password: hashedPassword });
      res.send("user created");
    } catch (error) {
      next(error);
    }
  }
  static async loginUser(req, res, next) {
    const { username, password } = req.body;
    try {
      // username can be username or email
      const user = await USER.findOne({
        where: {
          [Op.or] : [
            { username },
            { email: username }
          ]
        }
      })

      // if user not found
      if (!user) res.status(401).json({ message: "invalid credentials" })

      // match password
      if (!comparePassword(password, user.password)) res.status(401).json({ message: "invalid credentials" })

      res.send("login success")
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;