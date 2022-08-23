const mongoose = require('mongoose');

const publisherschema= new mongoose.Schema({
    name : String,
    headquqrter :String,
    
} ,{ timestamps: true })
module.exports =mongoose.model("publisher",publisherschema)