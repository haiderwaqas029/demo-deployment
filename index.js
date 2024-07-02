const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/' , (req,res) => {
    res.send("Hello Wordl!")
})

app.get('/profile', (req,res) => {
    res.send("Waqas Ahmad")
})

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port ${port}')
})


