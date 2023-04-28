const express = require('express')
const app = express()
const fs = require('fs')
const expressLayouts = require('express-ejs-layouts')
const port = 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {
    res.render('index', {
        layout: 'layouts/app',
        title: 'Home page',
    })
})
app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/app',
        title: 'Contact page',
    })
})
app.get('/register', (req, res) => {
    res.render('register', {
        layout: 'layouts/auth',
        title: 'Register page',
    })
})

app.use('/', (req, res) => {
    res.status(404)
    console.log('404');
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})