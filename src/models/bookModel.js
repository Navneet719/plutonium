const mongoose = require('mongoose');
const publisher = require('./publisher');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author"
    }, 
    price: Number,
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)

//--------------------
const newbookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "refauthor",
        required: [true, "authore id is required!"],
        
    }, 
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "publisher",
        required: [true, "publisher id is required!"],
        
    },
   


}, { timestamps: true });
module.exports = mongoose.model('refLibraryBook', newbookSchema)


