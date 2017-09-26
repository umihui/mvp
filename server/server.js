var express = require('express');
var db = require('../db/db');
var handler = require('./request-handler.js');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

var corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'client', 'index.html')))
// app.use(express.static(__dirname,'client));


app.post('/add', handler.insertNewPlant);
app.post('/water', handler.updateLastWatering);



module.exports = app;
