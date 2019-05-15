let express = require('express')
let Character = require('../models').Character

let router = express.Router()

router.get('/characters', function (req, res, next) {
    Character.findAll({order: ['name']})
        .then( character =>{
            return res.json(character)
        })
        .catch( err => next(err))
})

module.exports = router