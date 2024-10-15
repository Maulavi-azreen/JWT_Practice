const db=require("../models/index"); //or const db=require("../models");
const authConfig=require("../config/auth.config")

const User=db.user;

exports.signup=(req,res)=>{
    const [username,password,email]=req.body
    if(!username || !password || !email){
        res.status(400).send({message:"Request body is invalid"})
    }
    else{
        User.findOne({username:username}).then(user=>{
            if(user){
                res.status(400).send({message:"User already exists with this username"})
            }
        })
        User.findOne({email:email}).then(user=>{
            if(user){
                res.status(400).send({message:"User already exists with this email"})
            }
        })

        User.create({username:username,password:password,email:email}).then(user=>{
            if(user){
                res.status(200).send({message:"Sign Up Successful"})
            }
            else{
                res.status(500).send({message:"Sign Up failed"})
            }
        })
    }
}


exports.login=(req,res)=>{
    const [username,password]=req.body
    User.findOne({username:username,password:password}).then(user=>{
        if(user)
        {
            const token=jwt.sign({id:user.username},authConfig.secrete,{
                algorithm:"SH256",
                expiresIn:86400
            })
            res.status(200).send({message:"Login Successfull",token:token})
        }
        else{
            res.status(401).send({message:"Invalid Credentaisl",token:null})
        }
    })
}