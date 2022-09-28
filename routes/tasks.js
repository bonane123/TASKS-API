const {createTask,updateTasks,getAllTasks,deleteTasks} = require('../controllers/tasks')
const express = require('express')
const router = express.Router()

// CREATE TASK
router.post("/", createTask)
// GET TASKS
router.get("/", getAllTasks)
// UPDATE TASK
router.put("/:id", updateTasks)
// DELETE TASK
router.delete("/:id", deleteTasks)

module.exports = router
