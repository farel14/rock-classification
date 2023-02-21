import { Router } from "express";
import { Rock } from "../models/Rock";

const router = Router();

router.get("/", async function (req, res, next) {
  try {
    res.json(await Rock.findAll());
  } catch (error) {
    next(error);
  }
  res.send();
});

router.post("/create")

export default router;
