const express = require("express");
require("./config");
const Product = require("./product");
const app = express();

app.use(express.json());
app.post("/product", async (req,res) => {
    // res.send()
    const data = new Product(req.body);
    const result = await data.save();
    console.log(data);
    res.send("done");
})

app.get("/get", async (req,res) => {
    const data = await Product.find();
    res.send(data);
    
})
app.get("/get/:name",async (req,res) => {
    const data = await Product.find({
        "$or" : {
            regex : req.body
        }
    })
})
app.delete("/delete/:_id",async (req,res) => {
    res.send("done");
    const data = await Product.deleteOne(req.params);
    console.log(data);
})
app.put("/update/:_id",async (req,res) => {
    const data = await Product.updateOne(
        req.params ,
        {
            $set : req.body
        }
    )
    res.send(data);
})

app.listen(4000,() => {
    console.log("lsiten at 4000");
});