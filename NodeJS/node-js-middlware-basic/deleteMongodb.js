const dbConnect = require("./mongodb");

const main = async () => {
    let data = await dbConnect();
    data.deleteOne({"name" : "Mobile"});
    // console.log(await data);
}
module.exports = main;