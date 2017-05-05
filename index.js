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
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  let date = new Date()
  console.log(`request at: ${date.toString()}`)
  next()
})


// Routes

app.use('/', require('./routes'))


// Errors handling

app.use(function (err, req, res, next) {
  console.log(err.stack)
  res.status(err.status || 500).json({ err: err.message })
})


// Server
module.exports = app;
