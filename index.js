const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/lab1', express.static('lab1/build'))
app.use('/lab3', express.static('lab3/build'))
app.use('/lab4', express.static('lab4/build'))

app.get("/", (req, res) => {
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
