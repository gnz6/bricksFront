const express = require("express")
const router = express.Router();

router.get("/", (req,res)=>{})
router.get("/:team_id", (req,res)=>{})
router.post("/", (req,res)=>{})
router.put("/:team_id", (req,res)=>{})
router.delete("/:team_id", (req,res)=>{})

module.exports = router;
