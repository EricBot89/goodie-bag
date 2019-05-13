const router = require("express").Router();
const { Candy } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const candyList = await Candy.findAll();
    res.status(200).send(candyList);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
