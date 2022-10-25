const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'Ecommerce';
const client = new MongoClient(url);

async function connectDb(){
    const result = await client.connect();
    const db = result.db(database);
    return db.collection('products');
    // const collection = db.collection('products');
    // console.log(await collection.find({name: "product2"}).toArray());
}
module.exports = connectDb;