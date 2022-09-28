const User = require("../models/Users")

const getUsers = async(req,res,next)=>{
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
const getUser = async(req,res,next)=>{
    try {
        const user = await User.findById(req,params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

const updateUser = async(req,res,next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}
const deleteUser = async(req,res,next)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user deleted successfully")
    } catch (error) {
        next(error)
    }
}
module.exports = {getUsers, getUser, updateUser, deleteUser}