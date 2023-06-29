const mongoose = require('mongoose');

const connectMongoDb = () =>{
    mongoose
    .connect(process.env.MONGO_URI)
    .then((e) =>{
        console.log(`Mongo is running on ${e.connection.host}`)
    })
}

module.exports = connectMongoDb;