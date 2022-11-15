const mongoose = require("mongoose")
const { genSalt, hash, compare } = require("bcrypt")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    avatar:{
        type: String,
        default: "https://i.pinimg.com/564x/a1/54/5c/a1545c04f94354a14dd3d0ff748265f9.jpg"
    },
    player:{
        type: mongoose.Types.ObjectId,
        ref:"player",
        default:null
    }

})

userSchema.statics.encryptPassword = async (password) => {
    const salt = await genSalt(10)
    return await hash(password, salt)
}

userSchema.statics.comparePassword = async (password, recievedPassword) => {
    return await compare(password, recievedPassword)
}

module.exports = mongoose.model("user", userSchema)