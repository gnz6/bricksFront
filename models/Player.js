const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    jersey: {
        type: Number
    },
    team: {
        type: String,
        default:"Free Agent"
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:"user"
    },
    ppg: {
        type: Number,
        default: 0
    },
    apg: {
        type: Number,
        default: 0
    },
    rpg: {
        type: Number,
        default: 0
    },
    spg:{
        type: Number,
        default: 0
    },
    spg: {
        type: Number,
        default: 0
    },
    fpg: {
        type: Number,
        default: 0,
        max:5
    },
})

module.exports = mongoose.model("player", playerSchema)