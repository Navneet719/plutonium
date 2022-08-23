const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

//---------------------
router.post("/creatpublisher",publisherController.publisher)

router.post("/newauthor",authorController.createAuthor)

router.post("/newbook",bookController.newcreateBook)

router.get("/allbook",bookController.allbook)

router.put("/hard",bookController.hard)




module.exports = router;





