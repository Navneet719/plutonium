const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
//--------------------------------
const author= async function (req, res) {
    let authore = req.body
    let authoreCreated = await AuthorModel.create(authore)
    res.send({data: authoreCreated})
}
module.exports.createAuthor= author



