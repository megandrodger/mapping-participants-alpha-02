var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index.html')
})

// add your routes here

router.get('/v_02/enter-info', function (req, res) {
  for (var a in req.query) req.session[a] = req.query[a];
  res.render('v_02/enter-info')
})

router.get('/v_02/dashboard', function (req, res) {
  for (var a in req.query) req.session[a] = req.query[a];
  res.render('v_02/dashboard')
})

router.get('/v_02/guidance-page', function (req, res) {
  for (var a in req.query) req.session[a] = req.query[a];
  res.render('v_02/guidance-page')
})

module.exports = router
