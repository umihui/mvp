import axios from 'axios';

var calculateCountDown = function(lastTime, now, interval) {
  var oneDay = 1000*60*60*24;
  var countDown = interval - Math.floor((now - lastTime)/oneDay);
  return countDown;
}

var addNewPlant = function(message) {
  axios.post('http://127.0.0.1:3000/add',message)
  .then((result) => alert('success'))
  .catch((err) => console.error('Failed add',err));
}

var waterPlant = function(name){
  axios.post('http://127.0.0.1:3000/water',name)
  .then((result) => console.log('water!'))
  .catch((err) => console.error('fail water',err));
}


export { calculateCountDown, addNewPlant, waterPlant };
