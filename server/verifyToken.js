const jwt = require("jsonwebtoken");

function verify(req,res,next){
    const token = req.headers.token;
    if(token){
        jwt.verify(token,"69i574935j0j1",(err,user)=>{
            if(err){
                console.log(err)
                res.status(403).json("Token is not valid!");
                return
            } 
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("You are not authenticated!");
    }
}

module.exports = verify;