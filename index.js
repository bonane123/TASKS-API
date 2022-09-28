const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");
const taskRouter = require("./routes/tasks")
require("dotenv").config()
const app= express()

const PORT = process.env.PORT || 5000

// routes
app.get("/",(req,res)=>{
    res.send("Welcome to the webserver!")
})


// middlewares
app.use(express.json())
app.use(cors())
app.use("/api/task", taskRouter)

//connection
const start = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
}

// listening
app.listen(PORT,()=>{
    start();
    console.log(`server is listening on port ${PORT}`);
})