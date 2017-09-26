
var calculateCountDown = function(lastTime, now, interval) {
  var oneDay = 1000*60*60*24;
  var countDown = interval - Math.floor((now - lastTime)/oneDay);
  return countDown;
}

var updateLastTime = function(plant) {
  var now = new Date().getTime();
  //update the database
}

export { calculateCountDown };
