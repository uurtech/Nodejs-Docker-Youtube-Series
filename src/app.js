const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    console.log("request geldi")
    res.send({'message': 'pong'})
})

app.listen(port,"0.0.0.0",() => {
    console.log("uygulama çalışıyor")
})