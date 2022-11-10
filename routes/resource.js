var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Pizza_controller = require('../controllers/pizza');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Pizza ROUTES ///
// POST request for creating a Pizza.
router.post('/pizza', Pizza_controller.pizza_create_post);
// DELETE request to delete Pizza.
router.delete('/pizza/:id', Pizza_controller.pizza_delete);
// PUT request to update Pizza.
router.put('/pizza/:id', Pizza_controller.pizza_update_put);
// GET request for one Pizza.
router.get('/pizza/:id', Pizza_controller.pizza_detail);
// GET request for list of all Pizza items.
router.get('/pizza', Pizza_controller.pizza_list);

module.exports = router;