var pizza = require('../models/pizza');
// List of all Pizza
exports.pizza_list = async function (req, res) {
    try {
        thepizzas = await pizza.find();
        res.send(thepizzas);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Pizza.
exports.pizza_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Pizza detail: ' + req.params.id);
};
// Handle pizza create on POST.
exports.pizza_create_post = async function (req, res) {
    console.log(req.body)
    let document = new pizza();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    
    document.pizza_Name = req.body.pizza_Name;
    document.pizza_Type = req.body.pizza_Type;
    document.pizza_Cost = req.body.pizza_Cost;
    document.pizza_Toppings = req.body.pizza_Toppings;

    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Pizza delete form on DELETE.
exports.pizza_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Pizza delete DELETE ' + req.params.id);
};
// Handle Pizza update form on PUT.
exports.pizza_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Pizza update PUT' + req.params.id);
};
exports.pizza_view_all_Page = async function (req, res) {
    try {
        thepizza = await Pizza.find();
        res.render('pizza', { title: 'Pizza Search Results', pizza_Results: thepizza });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};