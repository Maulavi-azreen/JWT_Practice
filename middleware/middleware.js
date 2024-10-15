const config= require("../config/auth.config")   //to verify jwt
const jwt=require("jsonwebtoken")

const verifytoken=(req,res,next)=>{
    let token = req.headers('Authorization');
    token=token.split(" ")[1]    //splitting the header at 0 Bearer is there  (SYNTAX:"Authorization: Bearer mytoken123")
    jwt.verify(token,config.secrete,(err,decoded)=>
    {
        if(decoded.id)
        {
            next()
        }
        else{
            return res.status(401).send((messsage="Token invalid!! Login again"))
        }
    }
    )
}
// export default verifytoken
module.exports=verifytoken