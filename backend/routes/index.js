const router = require('express').Router()

require('../db/mongoConnection')

const books = require('./book')

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: 'Please, do not call /api, it is out for our server.'
    })
})

router.use('/books', books)

module.exports = router