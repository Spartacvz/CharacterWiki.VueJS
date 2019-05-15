let express = require('express')
let bodyParser = require('body-parser')
let characters_api = require('./routes/characters.js')

let app = express()

app.use(bodyParser.json())
app.use('/api', characters_api)

// Error handlers - for not found, and app errors
app.use(function (req, res, next) {
    res.status(404).send('Not Found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server Error')
})

// Start server running
let server = app.listen(process.env.Port || 3000, function () {
    console.log('app running on port', server.address().port)
})