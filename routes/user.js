const express = require("express")

const router = express.Router()

router.get("/", async (req, res) => {

});

router.route("/:id")
    .get(async (req, res) => {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ error: "User Not Found" })
        return res.json(user)
    })
    .patch(async (req, res) => {
        // Edit User With ID
        await User.findByIdAndUpdate(req.params.id, { last_name: "Changed" })
        return res.json({ status: "Success" })
    })
    .delete(async (req, res) => {
        // Delete User With ID
        await User.findByIdAndDelete(req.params.id)
        return res.json({ status: "Success" })
    })

router.post("/", async (req, res) => {
    // Todo Create New user
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
    return res.status(201).json({ msg: "Success" })
});

module.exports = router