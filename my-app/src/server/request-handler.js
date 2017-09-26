var db = require('../db/db');
var Plant = require('../db/plant');

exports.insertNewPlant = function(req, res) {
  var name = req.body.name;
  console.log('insert',name);
  Plant.findOne({ name: name}).exec(function(err, found) {
    if (found) {
      res.status(200).send('already exist');
    } else {
        var plant = new Plant({
          name: name,
          interval: req.body.interval
        });
        plant.save(function(err, plant) {
          console.log('New plant',plant)
          if (err) {
            res.send(500, err);
          } else {
            res.status(200).redirect('/');
          }
        });
      });
    }
  });
}
