const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('./view/index.html', {root: __dirname})
})
app.get('/register', (req, res) => {
    res.sendFile('./view/register.html', {root: __dirname})
})

app.use('/', (req, res) => {
    res.status(404)
    console.log('404');
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})