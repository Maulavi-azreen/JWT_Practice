const verifyToken=require("../middleware/middleware")


module.exports=app=>{
    const user=require('../controller/user.controller')

    const route=require('express').Router();

    route.post("/signup",user.signup);
    route.post("/auth/login",user.login);

    app.use('/user',route)
   
}