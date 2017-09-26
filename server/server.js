var express = require('express');
var db = require('../db/db');
var handler = require('./request-handler.js');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var fileUpload = require('express-fileupload');
var app = express();

var corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
};
var upload = multer({ dest: 'uploads/' });

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'client', 'index.html')))
app.use(fileUpload());
// app.use(express.static(__dirname,'client));

app.get('/', handler.fetchList);

app.post('/add', handler.insertNewPlant);
app.post('/water', handler.updateWaterTime);
// app.post('/upload', function(req, res) {
//   console.log('Server accept Upload')
//   if (!req.files)
//     return res.status(400).send('No files were uploaded.');
//   let sampleFile = req.files.file;
//
//   sampleFile.mv('/Users/umihui/workspaces/hrsf82-mvp/uploads/umi.png', function(err) {
//     if (err)
//       return res.status(500).send(err);
//     res.send('File uploaded!');
//   });
// });

module.exports = app;
