const express = require('express');
const update = require("./updateMingodb");
const deletedb = require("./deleteMongodb");
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
        name : String
    });
const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/Ecommerce");
    const ProductModel = new mongoose.model("products",ProductSchema);
    let data = await ProductModel({name : "Samsung" , category : "Mobile"});
    let result  = await data.save();
    console.log(result);
}
main();
const updateData = () => {
    const Products = new mongoose.model("products",ProductSchema);
    const data = Products.updateOne({name : "Samsung"} , {$set : {name : "OnePlus"}});

}
// updateData();
const deleteData = () => {
    const Products = new mongoose.model("products",ProductSchema);
    const data = Products.deleteMany({name : "Samsung"});

}
deleteData();
const getDb = require("./getDb");
getDb();
update();
deletedb();
const app = express();
const route = express.Router();
















const reqFilter = (req,res,next) => {
    if(req.query.age < 18){
        res.send("<h1>not Valid Age");
    }
    else{
        next();
    }
}
route.get('/users',(req,res) =>{
    res.send("<h1>Hello</h1>");
})
app.use("/",route)

app.use(reqFilter);
app.get('/',(req,res)=>{
    res.send('<h1>Valid Age</h1>')
})
app.get('/user',(req,res) => {
    res.send('<h1>Valid Page</h1>')
})
app.listen(5000,()=>{
    console.log("app listen");
})