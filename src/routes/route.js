const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

//assignment
router.get("/cowin/districts", CowinController.getDistrictsDetails)
router.get("/weather/place", CowinController.getWeather)
router.get("/SortedCities", CowinController.SortedCities)
router.get("/getallmeems", CowinController.getmeems)
router.post("/createmeems", CowinController.meem)











module.exports = router;