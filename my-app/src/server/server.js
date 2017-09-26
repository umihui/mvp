var express = require('express');
var db = require('../db/db');
var handleRequest = require('./request-handler.js');

var app = express();

app.get('/add',handleRequest.insertNewPlant);



module.exports = app;
