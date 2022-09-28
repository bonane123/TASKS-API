const {createTask,updateTasks,getAllTasks,deleteTasks} = require('../controllers/tasks')
const express = require('express')
const {verifyUser} = require("../utils/verifyToken")
const router = express.Router()

// CREATE TASK
router.post("/", createTask)
// GET TASKS
router.get("/",verifyUser, getAllTasks)
// UPDATE TASK
router.put("/:id", updateTasks)
// DELETE TASK
router.delete("/:id", deleteTasks)

module.exports = router
