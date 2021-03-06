import axios from 'axios';

var calculateCountDown = function(lastTime, now, interval) {
  var oneDay = 1000*60*60*24;
  var countDown = interval - Math.floor((now - lastTime)/oneDay);
  return countDown;
}

var addNewPlant = function(message,callback) {
  axios.post('http://127.0.0.1:3001/add', message)
    .then((result) => {alert('success');callback();})
    .catch((err) => console.error('Failed add',err));
}

var waterPlant = function(name, callback){
  axios.post('http://127.0.0.1:3001/water', name)
    .then((result) => {alert('watered!');callback();})
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

var uploadFile = function (event) {
   console.log('Fire Upload');
    var file = event.target.files[0];


    axios.post('http://127.0.0.1:3001/upload', file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    .then((result) => console.log('upload!'))
    .catch((err) => console.error('fail upload',err));
}

export { calculateCountDown, addNewPlant, waterPlant, fetchPlantList, uploadFile };
