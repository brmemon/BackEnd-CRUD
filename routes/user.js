const express = require("express")
const { handleGetAllusers, handleGetUserById,
    handleUpdateUserById, handleDeleteUserById,
    handleCreateNewUser }
    = require("../controllers/user")
const router = express.Router()

router.route("/")
    .get(handleGetAllusers)
    .post(handleCreateNewUser);

router.route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)


module.exports = router