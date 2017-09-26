var express = require('express');
var db = require('../db/db');
var handler = require('./request-handler.js');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname,'client));


app.post('/add', handler.insertNewPlant);
app.post('/water', (req, res) => {
  console.log('GET +++');
});



module.exports = app;
