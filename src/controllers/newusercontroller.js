const newuser = require ("../models/newusermodel")


const creatuser = async function (req , res){
    let data = req.body;
    let headerdata=req.headers["isfreeappuser"]
    if(!headerdata){
        return res.send("this is me")
    }
    console.log(headerdata)
    data.isFreeAppUser=headerdata

    let usercreated= await newuser.create(data)
    res.send({data: usercreated})
}
module.exports.creatuser=creatuser