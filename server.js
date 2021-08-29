const express = require('express')

const app = express()

app.use(express.json())

require('dotenv').config()

const api = require('./backend/routes')

app.use('/api', api)

if(process.env.NODE_ENV === 'production'){
    //Express entrega os assets de produção, como o main.js, main.css e index.html >>> caso não reconheça a rota.

    app.use(express.static('frontend/build'))

    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })

}

const PORT = process.env.PORT;

app.listen(PORT)
