
var calculateCountDown = function(lastTime, now, interval) {
  var oneDay = 1000*60*60*24;
  console.log('interval', interval);
  var countDown = interval - Math.floor((now - lastTime)/oneDay);
  console.log(Math.floor((now - lastTime)/oneDay), 'countDown')
  return countDown;
}

export { calculateCountDown };
