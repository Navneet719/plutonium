const express = require('express');
const lodash=require('lodash')
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    const mnth =['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec']
    const mnthRes= lodash.chunk(mnth,3)
    console.log(mnthRes)

    const odd=[3,5,7,9,11,13,15,17,19]
    const resOdd=lodash.tail(odd)
    console.log(resOdd)

    const arr1=[1,2,2,3]
    const arr2=[2,3,4,5]
    const arr3=[5,5,6,7]
    const arr4=[7,7,8,9]
    const arr5=[9,9,7,7]
    const oddRes=lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log(oddRes)

    const movie= [['horror','the shining'],['drama','titanic'],['thriller','shutter island'],['fantsy','pans labyrinth']]
    const resMovie=lodash.fromPairs(movie)
    console.log(resMovie)
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason