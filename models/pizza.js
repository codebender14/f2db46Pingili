const mongoose = require("mongoose")
const pizzaSchema = mongoose.Schema({
Pizza_Name: {
    type: String, 
    required: true
},
Pizza_Type: {
    type: String, 
    required: true
} ,
Pizza_Cost:  {
    type: Number, 
    min:0,max:10,
    required: true 
},
Pizza_Toppings:   {
    type: String, 
    required: true 
}
})
module.exports = mongoose.model("pizza",
pizzaSchema)