const express = require("express")
const router = express.Router();

router.get("/", (req,res)=>{})
router.get("/:category_id", (req,res)=>{})
router.post("/", (req,res)=>{})
router.put("/:category_id", (req,res)=>{})
router.delete("/:category_id", (req,res)=>{})

module.exports = router;
