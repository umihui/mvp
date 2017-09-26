import axios from 'axios';

var calculateCountDown = function(lastTime, now, interval) {
  var oneDay = 1000*60*60*24;
  var countDown = interval - Math.floor((now - lastTime)/oneDay);
  return countDown;
}

var addNewPlant = function(message,callback) {
  axios.post('http://127.0.0.1:3001/add', message)
    .then((result) => {alert('success');callback(result);})
    .catch((err) => console.error('Failed add',err));
}

var waterPlant = function(name){
  axios.post('http://127.0.0.1:3001/water', name)
    .then((result) => console.log('water!'))
    .catch((err) => console.error('fail water',err));
}

var fetchPlantList = function(callback){
  console.log('Fetch');
  axios.get('http://127.0.0.1:3001/')
    .then((result) => {
      console.log('fetch',result);
      callback(result.data);
    })
    .catch((err) => console.error('fail fetch',err));
}

export { calculateCountDown, addNewPlant, waterPlant, fetchPlantList };
