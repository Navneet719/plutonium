let date = function printDate() {
    let today = new Date().toLocaleDateString()

    console.log(today)
}

module.exports.fun2 = date


const mnth = function printMonthName() {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    const d = new Date();
    let name = month[d.getMonth()];
    console.log(name)
}
module.exports.printMonth = mnth

const info = function about() {
    console.log(' plutonium, W3D5, the topic for today is Nodejs module system')
}
module.exports.getBatchInfo = info

