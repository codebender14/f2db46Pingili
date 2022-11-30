var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var pizza_controlers = require('../controllers/test');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Pizza ROUTES ///
// POST request for creating a Pizza.
router.post('/pizza', pizza_controlers.pizza_create_post);
// DELETE request to delete Pizza.
router.delete('/pizza/:id', pizza_controlers.pizza_delete);
// PUT request to update Pizza.
router.put('/pizza/:id', pizza_controlers.pizza_update_put);
// GET request for one Pizza.
router.get('/pizza/:id', pizza_controlers.pizza_detail);
// GET request for list of all Pizza items.
router.get('/pizza', pizza_controlers.pizza_list);

module.exports = router;