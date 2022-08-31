const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const {validationToken , authorization }= require("../middlewear/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

//----------------assignment----------
router.post("/userscreation", userController.createUser1 )


router.post("/login", userController.userlogin )

router.get("/users1/:userId", validationToken , authorization , userController.getUser )

// router.put("/usersupdate/:userId",userController.update )

//------auth---------
// router.get("/usersnew/:userId", userController.Userdetils )

router.put("/usersupdate/:userId",validationToken , authorization, userController.updatprofile)
router.get("/usersdetails/:userId", validationToken , authorization , userController.getUser )





module.exports = router;

