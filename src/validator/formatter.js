const myName= function my(){
    let text = "    Navneet      kumar   "
    console.log(text.trim())

}

module.exports.trim=myName


const lowercase= function lower(){
    let text = "NAVNEET KUMAR"
    console.log(text.toLowerCase())

}
module.exports.toLowerCase=lowercase

const uppercase = function upper(){
    let text = "navneet kumar"
    console.log(text.toUpperCase())
} 
module.exports.toUpperCase=uppercase