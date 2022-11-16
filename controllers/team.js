const { teamModel } = require("../models")

const getAll = async (req, res) => {
    try {
        const db = await teamModel.find()
        if (db.length) return res.status(200).send(db)
        return res.status(400).send("Cant find Teams")
    } catch (err) {
        console.log(err);
        return res.status(400).send(err)
    }

}

const getOne = async (req, res) => {
    const {team_id} = req.params
    try {
        if (team_id) {
            const player = await teamModel.findById(team_id)
            return res.status(200).send(player)
        }
        if (!team_id) return res.status(400).send("Id hasnt been recieved")
        return res.status(400).send("Player not found")
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

const create = async (req, res) => {
    try {
        const { name, league , category, players } = req.body
        const newTeam = { name, league , category, players}
        const existsInDb = await teamModel.findOne({ name: name })
        if (existsInDb) return res.status(400).send("Already Registered")
        await teamModel.create(newTeam)
        return res.status(200).send(newTeam)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


const update = async (req, res) => {
    const { team_id } = req.params;
    const {category, players} = req.body
    try {
        if (!team_id) return res.status(400).send("Id hasnt been recieved")
        if (category && players) {
            const updateTeam = await teamModel.findByIdAndUpdate(team_id,
                { category, players })
            return res.status(200).send(updateTeam)
        }
        if (category && !players) {
            const updateTeam = await teamModel.findByIdAndUpdate(team_id,
                { category })
            return res.status(200).send(updateTeam)
        }
        if (!category && players) {
            const updateTeam = await teamModel.findByIdAndUpdate(team_id,
                { players })
            return res.status(200).send(updateTeam)
        }
        if (!category && !players) return res.status(400).send("No elements for update")

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


const deletedTeam = async(req, res)=>{
    const {team_id} = req.params;
    if (!team_id) return res.status(400).send("Id hasnt been recieved")
    try {
        const deletedTeam = await teamModel.findByIdAndDelete(team_id)
        return res.status(200).send(`${deletedTeam.name} removed`)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

module.exports = {getAll, getOne, update, deletedTeam, create}