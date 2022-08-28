const order = require("../models/ordermodel")

const ordercreation = async function (req,res){
    let orderdata =req.body
    
    if (!orderdata.userId){
        return res.send ({status:false, msg : "userId is invalid"})
    }
    if (!orderdata.productId){
        return res.send ({status:false, msg : "productId is invalid"})
    }

    let oredrcreated= await order.create(orderdata)
    res.send({data: oredrcreated})
}

module.exports.orderdata=ordercreation

