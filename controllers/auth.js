const User = require("../models/Users")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {createError} = require("../utils/error")

const createUser = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            password: hash
        })
        await newUser.save()
        res.status(201).json("User created successfully")
        
    } catch (error) {
        next(error)
    }

}

const login = async(req,res,next)=>{
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return next(createError(400, "User not found"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400,"password is incorrect"))
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET)
        const {username, password}= user._doc
        res.cookie("access_token",token,{httpOnly: true}).status(200).json(username)
    } catch (error) {
        next(error)
    }
}

module.exports ={ createUser, login}