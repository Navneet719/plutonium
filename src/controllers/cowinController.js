let axios = require("axios");
const { options } = require("../routes/route");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp

//-----------assignment---------

let getDistrictsDetails = async function (req, res) {
    try {
        let id = req.query.district_id
        let date = req.query.date

        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);

        let data = result.data


        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getDistrictsDetails = getDistrictsDetails
//-------weather-----------------
let getWeather = async function (req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid

        //console.log(city)

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`

        }
        let result = await axios(options);

        let data = result.data

        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getWeather = getWeather

let SortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        let CityObjArray = []
        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let appid = req.query.appid

            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`)
            //console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp
            CityObjArray.push(obj)
            let sorted = CityObjArray.sort(function (a, b) { return a.temp - b.temp })
            res.status(200).send({ status: true, data: sorted })

        }
    }
    catch (err) {
        //console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.SortedCities = SortedCities

//----meems----
let getmeems = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        //console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        //console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getmeems=getmeems

let meem = async function (res, req) {
    //try {
        let meemId = req.query.id
    
        
        let textupper = req.query.text0
        let textlower = req.query.text1
        let user = req.query.username
        let pass= req.query.password
        //console.log(template)

        
        let options={
            method :"post",
            url:`https://api.imgflip.com/caption_image?id=${meemId}&text0=${textupper}&text1=${textlower}&username=${user}&password=${pass}`
           
        }
        let result=await axios(options)
        res.send({data:result.data})

    //}
    // catch (err) {
    //     //console.log(err)
    //     res.status(500).send({ msg: err.message })
    // }
}
module.exports.meem=meem