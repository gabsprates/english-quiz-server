'use strict'

const express = require('express')
const router  = express.Router()

router.get('/', function (req, res) {

  res.status(200)
  res.send("it work's!")

})


// Questions
router.use('/questions', require('./questions'))


module.exports = router;
