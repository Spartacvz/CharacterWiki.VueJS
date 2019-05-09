let express = require('express')
let Characters = require('../models').Characters

let router = express.Router()

router.get('/characters', function (req, res, next) {
    Characters.findAll({order: ['name']})
        .then( chars => {
            return res.json(chars)
        })
        .catch( err => next(err) )
})

module.exports = router