const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha', 'Akash', 'Pritesh'])
    console.log('The first element received from underscope function is ' + firstElement)
    res.send('My first ever api!')
});

//question:-1
router.get('/movies', function (req, res) {
    let movie = ['don', 'soley', 'bahubali']
    res.send(movie)
})

//question:-2
router.get("/movies2/:indexNumber", function (req, res) {
    const movies = ['don', 'soley', 'bahubali']
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber

    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

//question:-3

router.get("/movies3/:indexNumber", function (req, res) {
    const movies = ['don', 'soley', 'bahubali']
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber

    if (movieIndex < 0 || movieIndex >= movies.length) {

        return res.send(' Please type correct value')
    }


    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

//question:-4


router.get('/film', function (req, res) {
    let films = [
        {
            'id': 1,
            'name': 'the shinig'
        },
        {
            'id': '2',
            'name': 'Incendies'
        },
        {
            'ia': '3',
            'name': 'rang de basanti'
        },
        {
            'id': '4',
            'name': 'finding nemo'

        }
    ]
    res.send(films)


})

//question:-5
router.get("/films/:filmId", function (req, res) {
    let films = [
        {
            'id': 1,
            'name': 'the shinig'
        },
        {
            'id': '2',
            'name': 'Incendies'
        },
        {
            'ia': '3',
            'name': 'rang de basanti'
        },
        {
            'id': '4',
            'name': 'finding nemo'

        }
    ]
    let filmId = req.params.filmId


    for (let i = 0; i < films.length; i++) {
        let film = films[i]
        if (film.id == filmId) {

            return res.send(film)
        }
    }


    res.send("id does not matched")



})






router.get("/shoes", function (req, res) {
    let queryParams = req.query
    let brand = queryParams.brand
    res.send("dummy response")
})

// uses query params
router.get('/candidates', function (req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is ' + state)
    console.log('Gender is ' + gender)
    console.log('District is ' + district)
    let candidates = ['Akash', 'Suman']
    res.send(candidates)
})

// use path param
router.get('/candidates/:canidatesName', function (req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    console.log('Candidates name is ' + req.params.canidatesName)
    res.send('Done')
})

router.get("/films", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    //send all the films
    res.send(films)
})

router.get("/films/:filmId", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    let filmId = req.params.filmId

    //iterate all the films
    //search for a film whose id matches with the id recevied in request
    for (let i = 0; i < films.length; i++) {
        let film = films[i]
        if (film.id == filmId) {
            //if there is a match return the response from here
            return res.send(film)
        }
    }

    //if there is no match give an error response
    res.send("The film id doesn't match any movie")
})

module.exports = router;
// adding this comment for no reason