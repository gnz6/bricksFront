const mongoose = require("mongoose")

const leagueSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    categories:[ {
        type: String,
        default:[]
    }],
   
})

module.exports = mongoose.model("league", leagueSchema)