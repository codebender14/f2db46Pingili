var express = require('express');
const pizza_controlers= require('../controllers/test');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

router.get('/', pizza_controlers.pizza_view_all_Page );
router.get('/pizza/:id', pizza_controlers.pizza_detail); 

router.get('/detail', secured,pizza_controlers.pizza_view_one_Page);

/* GET create pizza page */
router.get('/create',secured, pizza_controlers.pizza_create_Page);

/* GET create pizza page */
router.get('/update', secured,pizza_controlers.pizza_update_Page);

/* GET delete pizza page */
router.get('/delete',secured, pizza_controlers.pizza_delete_Page);

module.exports = router;
