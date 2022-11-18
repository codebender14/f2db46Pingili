var express = require('express');
var router = express.Router();
const pizza_controlers= require('../controllers/pizza'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pizza', { title: 'Search Results for Pizza Class' });
});

router.get('/', pizza_controlers.pizza_view_all_Page);
router.get('/detail', pizza_controlers.pizza_view_one_Page);
router.get('/create', pizza_controlers.pizza_create_Page);
router.get('/update', pizza_controlers.pizza_update_Page);
router.get('/delete', pizza_controlers.pizza_delete_Page);

module.exports = router;