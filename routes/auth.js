const express = require("express");
const router = express.Router();
const { usersModel } = require("../models");

router.post("/login", (req,res)=>{})
router.post("/register", (req,res)=>{})
router.post("/google", (req,res)=>{})
router.post("/forgot", (req,res)=>{})
router.post("/reset", (req,res)=>{})

module.exports = router;