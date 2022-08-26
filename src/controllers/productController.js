const productModel = require("../models/productModel")


const creatProduct = async function (req , res){
    let data = req.body;
    // let headerdata=req.headers["isFreeAppUser"]
    let savedData= await productModel.create(data)
    res.send({data: savedData})
}
module.exports.creatProduct=creatProduct


