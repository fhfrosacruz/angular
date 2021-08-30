//conexão banco de dados mongo
JavaScript
const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost")
            .then(conn => global.conn = conn.db("curso"))
            .catch(err => console.log(err))

function findAll() {
    return global.conn.collection("customers").find().toArray();
}
 
module.exports = { findAll }
