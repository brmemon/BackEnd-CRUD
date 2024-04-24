const User = require("../models/user")

async function handleGetAllusers(req, res) {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id)
    return res.json(user)
}

async function handleUpdateUserById(req, res) {
    const { first_name, last_name, email, gender, job_title } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id,
        { first_name, last_name, email, gender, job_title });
    return res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success" })
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(404).json({ msg: "ALL Fields Are Req...." })
    }

    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    })
    return res.status(201).json({ msg: "Success", id: result._id })
}

module.exports = {
    handleGetAllusers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}