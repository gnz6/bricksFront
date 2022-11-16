const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
    versus: {
        type: String,
    },
    points:{
        type: Number, default:0 
    },
    assists:{
        type: Number, default:0 
    },
    rebounds:{
        type: Number, default:0 
    },
    steals:{
        type: Number, default:0 
    },
    fouls:{
        type: Number, default:0 , max:5
    },
   
})

module.exports = mongoose.model("game", gameSchema)