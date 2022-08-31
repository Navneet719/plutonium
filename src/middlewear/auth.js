const jwt = require("jsonwebtoken");
const validationToken = function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken){
        return res.send({ status: false, msg: "token is invalid" });
    }
    req.loggedInUser =  decodedToken.userId
    next()
}
module.exports.validationToken= validationToken

const authorization = function(req,res,next){
    try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];


    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");

    let userData = req.params.userId
    let userlogin = decodedToken.userId
 
  if (userData != userlogin ) {
    return res.send({ status: false, msg: "invalid user id" })
  }
  next()
}
catch(err){
 res.status(405).send({msg:"error",error:err})
}
}
module.exports.authorization= authorization
