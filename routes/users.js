const express = require('express');
const {getUsers, getUser, updateUser,deleteUser} = require('../controllers/users')
const {verifyUser}= require("../utils/verifyToken")

const router = express.Router()
router.get("/",verifyUser, getUsers)
router.get("/:id",verifyUser, getUser)
router.put("/:id",verifyUser, updateUser)
router.delete("/:id",verifyUser, deleteUser)
module.exports = router