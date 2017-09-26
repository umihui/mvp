var db = require('../db/db');
var Plant = require('../db/plant');

exports.fetchList = function(req, res) {
  console.log('START FETCH');
  Plant.find({}).exec(function(err, list) {
    if (err) {
      res.send(500, err);
    } else {
      console.log(list);
      res.status(200).send(list);
    }
  });
};

exports.insertNewPlant = function(req, res) {
  var name = req.body.name;
  //console.log('INASWR+++++++',name);
  Plant.findOne({name: name})
    .then(function(found) {
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

exports.updateWaterTime = function(req, res) {
  var name = req.body.name;
  console.log('waterRequest',name);
  //Tank.update({ _id: id }, { $set: { size: 'large' }}, callback);
  var now = new Date().getTime();
  Plant.update({name: name}, {$set: {lastWatering: now}})
    .then(function(result){
      res.status(200).send('ok');
    })
    .catch((err) => res.send(500, err));
}
