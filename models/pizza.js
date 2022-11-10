const mongoose = require("mongoose")
const pizzaSchema = mongoose.Schema({
    Pizza_Name: String,
    Pizza_Type: String,
    Pizza_Cost: Number,
    Pizza_Toppings: String
})
module.exports = mongoose.model("pizza",
pizzaSchema)