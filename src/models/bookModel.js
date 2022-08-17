const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

//assignment
const booksSchema = new mongoose.Schema( {

    bookName: {
        type: String,
        required: true
    },
    authorName :{
        type : String,
        required : true,
    },
    tags :[],
    totalPage : Number, 
    stockAvailable : Boolean,

    price :{
     indianPrice: String,
     europePrice: String,
    },
    year : {type: Number, default: 2021},
    sales: {type: Number, default: 10}
    }, { timestamps: true });
module.exports = mongoose.model('Book1', booksSchema) 
   
        
    

   
    
    
        
    
    
    

