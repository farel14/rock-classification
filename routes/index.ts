import express from "express";

// imported routes
import user from "./users";

const router = express.Router();
/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});
router.use("/user", user);

export default router;