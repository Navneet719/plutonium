const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

//assignment

//-------------------------
const newcreateBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
module.exports.newcreateBook= newcreateBook
//-------------------------
const allbookdetail= async function (req, res) {
    
    let bookCreated = await bookModel.find().populate("author publisher")
    res.send({data: bookCreated})
}
module.exports.allbook= allbookdetail

//--------------------------
const updatebook = async function (req , res){
    const findpublisher = await bookModel.find({publisher: ["penguin" , "harrier colins"]})
    const hard = await bookModel.updateMany({findpublisher}, {$set: {isHardCover:true}})
    res.send({ msg: hard })
}

module.exports.hard= updatebook





