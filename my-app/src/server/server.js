var express = require('express');

var app = express();

app.get('/',function(req,res){
  console.log('click');
})



module.exports = app;
