const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    category : String
})

const product = mongoose.model("product",productSchema);
module.exports = product;