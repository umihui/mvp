var db = require('../db/db');
var Plant = require('../db/plant');

exports.insertNewPlant = function(req, res) {
  var name = req.body.name;
  //console.log('INASWR+++++++',name);
  Plant.findOne({name: name}).then(function(found) {
    if (found) {
      res.status(200).send('already exist');
    } else {
      var plant = new Plant({
        name: name,
        interval: req.body.interval
      });
      plant.save(function(err, plant) {
        console.log('New plant',plant);
        //console.log('RESPONS is', res);
        if (err) {
          res.send(500, err);
        } else {
          res.status(200).send('ok');
        }
      });
    }
  });
}
