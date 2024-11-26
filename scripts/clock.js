const timeElement = document.querySelector('.clock');

function getRealTime() {
  let realTime = new Date();

  let hours = realTime.getHours();
  let minutes = realTime.getMinutes();
  let seconds = realTime.getSeconds();

  let newSubstring = ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2) + ":" + ("0" + seconds).substr(-2)
  timeElement.textContent = newSubstring;

}

setInterval(getRealTime, 1000);