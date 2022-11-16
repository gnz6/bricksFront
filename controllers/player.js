const { playersModel } = require("../models")

const getAll = async (req, res) => {
    try {
        const db = await playersModel.find()
        if (db.length) return res.status(200).send(db)
        return res.status(400).send("Cant find players")
    } catch (err) {
        console.log(err);
        return res.status(400).send(err)
    }

}

const getOne = async (req, res) => {
    const { player_id } = req.params
    try {
        if (player_id) {
            const player = await playersModel.findById(player_id)
            return res.status(200).send(player)
        }
        if (!player_id) return res.status(400).send("Id hasnt been recieved")
        return res.status(400).send("Player not found")
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

const create = async (req, res) => {
    try {
        const { name, jersey, team } = req.body
        const newPlayer = { name, jersey, team }
        const existsInDb = await playersModel.findOne({ name: name })
        if (existsInDb) return res.status(400).send("Already Registered")
        await playersModel.create(newPlayer)
        return res.status(200).send(newPlayer)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


const update = async (req, res) => {
    const { player_id } = req.params;
    const { jersey, team } = req.body
    try {
        if (!player_id) return res.status(400).send("Id hasnt been recieved")
        if (jersey && team) {
            const updatePlayer = await playersModel.findByIdAndUpdate(player_id,
                { jersey, team })
            return res.status(200).send(updatePlayer)
        }
        if (jersey && !team) {
            const updatePlayer = await playersModel.findByIdAndUpdate(player_id,
                { jersey })
            return res.status(200).send(updatePlayer)
        }
        if (!jersey && team) {
            const updatePlayer = await playersModel.findByIdAndUpdate(player_id,
                { team })
            return res.status(200).send(updatePlayer)
        }
        if (!jersey && !team) return res.status(400).send("No elements for update")

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


const deletePlayer = async(req, res)=>{
    const {player_id} = req.params;
    if (!player_id) return res.status(400).send("Id hasnt been recieved")
    try {
        const deletePlayer = await playersModel.findByIdAndDelete(player_id)
        return res.status(200).send(`${deletePlayer.name} removed`)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

module.exports = {getAll, getOne, update, deletePlayer, create}