var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/plantsHelper');

var plantSchema = mongoose.Schema({
  name: String,
  interval: Number,
  lastWatering: Number
});

plantSchema.pre('save', function(next) {
  this.lastWatering = new Date().getTime();
  next();
});


var Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
