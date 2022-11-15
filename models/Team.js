const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    league: {
        type: String
    },
    category: {
        type: String,
        default:"Free Agent"
    },
    players: [{
        type: String,
        default: []
    }],
    
})

module.exports = mongoose.model("team", teamSchema)