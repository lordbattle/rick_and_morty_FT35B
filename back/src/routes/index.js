const { Router } = require("express");
const { postFav, getFavs, deleteFav } = require("../controllers/favs");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
const { character } = require("../DB_connection");

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

router.post("/favs", postFav);
router.get("/favs", getFavs);
router.delete("/favs/:id", deleteFav);

router.get("/all", async (req, res) => {
  try {
    const allCharacters = await character.findAll();
    res.status(200).json(allCharacters);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
