var express = require('express')
var Characters = require('../models').Characters

var router = express.Router()

router.get('/characters', function(req, res, next){
    Characters.findAll({order: ['name']})
        .then( characters => {
            return res.json(characters)
        })
        .catch( err => next(err))
})

router.get('/characters/:name', function(req, res, next) {
    Characters.findOne({where: {name: req.params.name}})
        .then(character => {
            if (character) {
                return res.json(character)
            } else {
                return res.status(404).send()
            }
        })
        .catch( err => next(err))
})

router.patch('/character/:name', function(req, res, next){
    Characters.update({ visited: req.body.visited }, { where: {
            name: req.params.name
        }
    })
        .then( rows => {
            if (rows) {
                return res.send('ok')
            } else {
                return res.status(404).send()
            }
        })
        .catch( err => next(err))
})

module.exports = router