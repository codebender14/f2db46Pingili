var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pizza', { title: 'Search Results for Pizza Class' });
});

module.exports = router;