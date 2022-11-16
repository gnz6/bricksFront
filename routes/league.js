const express = require("express")
const router = express.Router();
const {getAll, getOne, update, deleteleague, create} = require("../controllers/league")

router.get("/", getAll)
router.get("/:league_id", getOne)
router.post("/", create)
router.put("/:league_id", update)
router.delete("/:league_id", deleteleague)

module.exports = router;
