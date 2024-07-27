const express = require('express')
const path = require('path');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3333;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//khai báo route
app.get('/', (req, res) => {
  res.send('Hello World! and nodemon')
})

app.get('/finn', (req, res) => {
    // res.send('Check check!')
    res.render('sample.ejs')
  })

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})