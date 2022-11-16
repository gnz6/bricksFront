const express = require("express")
const router = express.Router();

router.get("/", (req,res)=>{})
router.get("/:game_id", (req,res)=>{})
router.post("/", (req,res)=>{})
router.put("/:game_id", (req,res)=>{})
router.delete("/:game_id", (req,res)=>{})

module.exports = router;
