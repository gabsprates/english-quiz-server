'use strict'

const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const app = express()


// Server config

app.use(methodOverride('X-HTTP-Method'))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  let date = new Date()
  console.log(`request at: ${date.toString()}`)
  next()
})


// Routes

app.get('/', function (req, res) {
  res.send("it work's!")
})

app.get('/questions', function (req, res) {
  res.send("questions")
})


// Errors handling

app.use(function (err, req, res, next) {
  console.log(err.stack)
  res.status(err.status || 500).json({ err: err.message })
})


// Server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
