const express = require("express")
const router = express.Router();
const {getAll, getOne, update, deletePlayer, create} = require("../controllers/player")

router.get("/", getAll)
router.get("/:player_id", getOne)
router.post("/", create)
router.put("/:player_id", update)
router.delete("/:player_id", deletePlayer)

module.exports = router;
