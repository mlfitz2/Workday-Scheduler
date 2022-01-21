var currentTimeEl = document.querySelector('#current-time');



//Displays the current time
function displayTime() {
    var currentTime = moment().format("dddd, MMMM Do, YYYY, h:mm a");
    currentTimeEl.textContent = currentTime;
  }
  displayTime();
  setInterval(displayTime, 1000);

