const { gameModel } = require("../models")

const getAll = async (req, res) => {
    try {
        const db = await gameModel.find()
        if (db.length) return res.status(200).send(db)
        return res.status(400).send("Cant find games")
    } catch (err) {
        console.log(err);
        return res.status(400).send(err)
    }

}

const getOne = async (req, res) => {
    const { game_id } = req.params
    try {
        if (game_id) {
            const game = await gameModel.findById(game_id)
            return res.status(200).send(game)
        }
        if (!game_id) return res.status(400).send("Id hasnt been recieved")
        return res.status(400).send("game not found")
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

const create = async (req, res) => {
    try {
        const { name, categories } = req.body
        const newgame = { name, categories }
        const existsInDb = await gameModel.findOne({ name: name })
        if (existsInDb) return res.status(400).send("Already Registered")
        await gameModel.create(newgame)
        return res.status(200).send(newgame)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


const update = async (req, res) => {
    const { game_id } = req.params;
    const { name, categories } = req.body
    try {
        if (!game_id) return res.status(400).send("Id hasnt been recieved")
        if (name && categories) {
            const updategame = await gameModel.findByIdAndUpdate(game_id,
                { name, categories })
            return res.status(200).send(updategame)
        }
        if (name && !categories) {
            const updategame = await gameModel.findByIdAndUpdate(game_id,
                { name })
            return res.status(200).send(updategame)
        }
        if (!name && categories) {
            const updategame = await gameModel.findByIdAndUpdate(game_id,
                { categories })
            return res.status(200).send(updategame)
        }
        if (!name && !categories) return res.status(400).send("No elements for update")

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


const deletegame = async(req, res)=>{
    const {game_id} = req.params;
    if (!game_id) return res.status(400).send("Id hasnt been recieved")
    try {
        const deletegame = await gameModel.findByIdAndDelete(game_id)
        return res.status(200).send(`${deletegame.name} removed`)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

module.exports = {getAll, getOne, update, deletegame, create}