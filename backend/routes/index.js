const router = require('express').Router()

require('../db/mongoConnection')

const book = require('./book')

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: 'Please, do not call /api, it is out for our server.'
    })
})

router.use('/book', book)

module.exports = router