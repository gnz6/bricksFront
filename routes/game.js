const express = require("express")
const router = express.Router();
const  {getAll, getOne, update, deletegame, create} = require("../controllers/game")

router.get("/", getAll)
router.get("/:game_id", getOne)
router.post("/",create)
router.put("/:game_id", update)
router.delete("/:game_id", deletegame)

module.exports = router;
