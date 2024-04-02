const PORT = parseInt(process.env.PORT || "8080")
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/1', (req, res) => {
    res.send('Page 1')
})

app.get('/2', (req, res) => {
    res.send('Page 2')
})

app.listen(PORT, () => {
    console.log(`Listening for response on http://localhost:${PORT}`)
})

