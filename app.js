'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Karel Enrico (52019014) Teknik Informatika \n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
