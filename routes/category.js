const express = require("express")
const router = express.Router();
const {getAll, getOne, update, deletecategory, create} = require("../controllers/category")

router.get("/", getAll)
router.get("/:category_id", getOne)
router.post("/", create)
router.put("/:category_id", update)
router.delete("/:category_id", deletecategory)

module.exports = router;
