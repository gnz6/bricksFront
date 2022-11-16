const { categoryModel } = require("../models")

const getAll = async (req, res) => {
    try {
        const db = await categoryModel.find()
        if (db.length) return res.status(200).send(db)
        return res.status(400).send("Cant find categories")
    } catch (err) {
        console.log(err);
        return res.status(400).send(err)
    }

}

const getOne = async (req, res) => {
    const { category_id } = req.params
    try {
        if (category_id) {
            const category = await categoryModel.findById(category_id)
            return res.status(200).send(category)
        }
        if (!category_id) return res.status(400).send("Id hasnt been recieved")
        return res.status(400).send("category not found")
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

const create = async (req, res) => {
    try {
        const { name, teams } = req.body
        const newcategory = { name, categories }
        const existsInDb = await categoryModel.findOne({ name: name })
        if (existsInDb) return res.status(400).send("Already Registered")
        await categoryModel.create(newcategory)
        return res.status(200).send(newcategory)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


const update = async (req, res) => {
    const { category_id } = req.params;
    const { name, teams } = req.body
    try {
        if (!category_id) return res.status(400).send("Id hasnt been recieved")
        if (name && teams) {
            const updatecategory = await categoryModel.findByIdAndUpdate(category_id,
                { name, teams })
            return res.status(200).send(updatecategory)
        }
        if (name && !teams) {
            const updatecategory = await categoryModel.findByIdAndUpdate(category_id,
                { name })
            return res.status(200).send(updatecategory)
        }
        if (!name && teams) {
            const updatecategory = await categoryModel.findByIdAndUpdate(category_id,
                { teams })
            return res.status(200).send(updatecategory)
        }
        if (!name && !teams) return res.status(400).send("No elements for update")

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}


const deletecategory = async(req, res)=>{
    const {category_id} = req.params;
    if (!category_id) return res.status(400).send("Id hasnt been recieved")
    try {
        const deletecategory = await categoryModel.findByIdAndDelete(category_id)
        return res.status(200).send(`${deletecategory.name} removed`)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
}

module.exports = {getAll, getOne, update, deletecategory, create}