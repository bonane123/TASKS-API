const jwt = require("jsonwebtoken");
const {createError} = require("./error");

const verifyToken = (req,res,next)=>{
    const token  = req.cookie.access_token
    if(!token) return next(createError(401,"You are not allowed to access the data"))
    jwt.verify(token, process.env.JWT_SECRET, (err,user)=>{
        if(err) return next(createError(403, "Token is not valid"))
        req.user= user
        next()
    })
}
const verifyUser = (err, req, res, next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id === req.params.id){
            next()
        }else{
            next(createError(403,"You are not Authorized to access the data"))
        }
    })

    }

    module.exports = {verifyToken, verifyUser}