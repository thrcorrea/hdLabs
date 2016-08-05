var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //  res.send(__base);
  res.sendFile('index.html', {root : path.join(__base + 'views')});
  // res.render('index', { title: 'Express' });
});

module.exports = router;
