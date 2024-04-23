const User = require("../models/user")

async function handleGetAllusers() {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
}