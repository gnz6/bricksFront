const { leagueModel } = require("../models")

const getAll = async (req, res) => {
    try {
        const db = await leagueModel.find()
        if (db.length) return res.status(200).send(db)
        return res.status(400).send("Cant find Leagues")
    } catch (err) {
        console.log(err);
        return res.status(400).send(err)
    }

}

const getOne = async (req, res) => {
    const { league_id } = req.params
    try {
        if (league_id) {
            const league = await leagueModel.findById(league_id)
            return res.status(200).send(league)
        }
        if (!league_id) return res.status(400).send("Id hasnt been recieved")
        return res.status(400).send("league not found")
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

const create = async (req, res) => {
    try {
        const { name, categories } = req.body
        const newleague = { name, categories }
        const existsInDb = await leagueModel.findOne({ name: name })
        if (existsInDb) return res.status(400).send("Already Registered")
        await leagueModel.create(newleague)
        return res.status(200).send(newleague)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


const update = async (req, res) => {
    const { league_id } = req.params;
    const { name, categories } = req.body
    try {
        if (!league_id) return res.status(400).send("Id hasnt been recieved")
        if (name && categories) {
            const updateleague = await leagueModel.findByIdAndUpdate(league_id,
                { name, categories })
            return res.status(200).send(updateleague)
        }
        if (name && !categories) {
            const updateleague = await leagueModel.findByIdAndUpdate(league_id,
                { name })
            return res.status(200).send(updateleague)
        }
        if (!name && categories) {
            const updateleague = await leagueModel.findByIdAndUpdate(league_id,
                { categories })
            return res.status(200).send(updateleague)
        }
        if (!name && !categories) return res.status(400).send("No elements for update")

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


const deleteleague = async(req, res)=>{
    const {league_id} = req.params;
    if (!league_id) return res.status(400).send("Id hasnt been recieved")
    try {
        const deleteleague = await leagueModel.findByIdAndDelete(league_id)
        return res.status(200).send(`${deleteleague.name} removed`)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

module.exports = {getAll, getOne, update, deleteleague, create}