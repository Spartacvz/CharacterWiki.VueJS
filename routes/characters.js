let express = require('express')
let characters = require('../models').characters

let router = express.Router()

router.get('/characters', function (req, res, next) {
    characters.findAll({order: ['name']})
        .then( characters => {
            return res.json(characters)
        })
        .catch( err => next.err() )
})

module.exports = router