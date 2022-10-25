const dbConnect = require("./mongodb");

const update = async () => {
    let data = await dbConnect();
    data = await data.updateOne({"name" : "product1"} , {$set : {"name" : "Mobile"}});
    // console.log(await data);
}
module.exports = update;