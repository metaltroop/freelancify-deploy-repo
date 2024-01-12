const jwt=require('jsonwebtoken');
const ensureAuthenticated = async (req,res,next)=>{
const authHeader = req.headers['authorization'];

if(!authHeader){
    return res.status(403).json({message:"Unauthorized person"});
}

try{
//validation of jwtToken
const decoded=jwt.verify(authHeader,process.env.JWT_SECRET);
req.userInfo=decoded;
console.log(decoded);

if(!decoded){
    return res.status(401).json({message:"token is not correct or expired"});
}

next();

}catch{
    return res.status(401).json({message:"token is not correct or expired"});
}};

module.exports=ensureAuthenticated;