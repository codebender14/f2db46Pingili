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


exports.pizza_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await pizza.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle pizza update form on PUT.
exports.pizza_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await pizza.findById(req.params.id)
        // Do updates of properties
        if(req.body.Pizza_Name) toUpdate.Pizza_Name = req.body.Pizza_Name;
        if(req.body.Pizza_Type) toUpdate.Pizza_Type = req.body.Pizza_Type;
        if(req.body.Pizza_Cost) toUpdate.Pizza_Cost = req.body.Pizza_Cost;
        if(req.body.Pizza_Toppings) toUpdate.Pizza_Toppings = req.body.Pizza_Toppings;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// Handle Pizza delete on DELETE.
exports.pizza_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await pizza.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a delete one view with id from query 
exports.pizza_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await pizza.findById(req.query.id) 
        res.render('Pizzadelete', { title: 'Pizza Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for updating a Pizza. 
// query provides the id 
exports.pizza_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await pizza.findById(req.query.id) 
        res.render('Pizzaupdate', { title: 'Pizza Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a Pizza. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.pizza_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Pizzacreate', { title: 'Pizza Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a show one view with id specified by query 
exports.pizza_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await pizza.findById(req.query.id)
        res.render('Pizzadetail',
            { title: 'Pizza Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}; 