var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/plantsHelper', { useMongoClient: true });

var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error'));



module.exports = db;
