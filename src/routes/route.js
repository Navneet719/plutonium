const express = require('express');
 //const abc = require('../introduction/intro')
const nav= require('../logger/logger')
const newdate= require('../util/helper')
const problem3= require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log( nav.name)
    //abc.printName()
    nav.fun1()
    newdate.fun2()
    newdate.printMonth()
    newdate.getBatchInfo()
    problem3.trim()
    problem3.toLowerCase()
    problem3.toUpperCase()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason