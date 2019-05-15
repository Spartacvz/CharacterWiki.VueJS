let express = require('express')
let Characters = require('../models').Characters

let router = express.Router()

router.get('/characters', function (req, res, next) {
    Characters.findAll({order: ['name']})
        .then( character =>{
            return res.json(character)
        })
        .catch( err => next(err))
})

module.exports = router