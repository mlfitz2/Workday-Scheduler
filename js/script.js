var currentTimeEl = document.querySelector('#current-time');
var scheduleArea = document.querySelector('#schedule-area');


//Displays the current time
function displayTime() {
  var currentTime = moment().format("dddd, MMMM Do, YYYY, h:mm a");
  currentTimeEl.textContent = currentTime;
}
displayTime();
setInterval(displayTime, 1000);



//Create the empty planner outline
var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

hours.forEach(function(hours) {

  //Create rows
  var calRow = document.createElement('div');
  calRow.setAttribute('class', 'row');
  scheduleArea.append(calRow);
  
  //Create column for the time
  var hourColumn = document.createElement('div');
  hourColumn.setAttribute('class', 'col-2 hour-column');
  calRow.append(hourColumn);
  // hourColumn.textContent = moment(hours, 'HH').format('hh A');
  hourColumn.textContent = moment(hours, 'hh').format('hh A');

      //Change the colors to show which hours are past, present or future
      //IT'S SHOWING THE AM TIMES IN THE SAME CATEGORY AS THE PM'S, SO AT 11 PM 10 AM WILL TURN YELLOW ALONG WITH 10PM. WHY??
      //IT ALSO CHANGES THE POSITION WHEN TURNING YELLOW, BUT NO REASON FOR IT IN CSS. WHY?
      thisHour = moment().format('hh A');
      if (hourColumn.textContent < thisHour) {
        hourColumn.setAttribute('class', 'past');
        console.log(thisHour, hourColumn.textContent)
      }
      console.log(thisHour, hourColumn.textContent)
      
  //Create column where the event will go
  var eventColumn = document.createElement('div');
  eventColumn.setAttribute('class', 'col-8 events-column');
  calRow.append(eventColumn);

  //Create column for Save button
  var lockColumn = document.createElement('div');
  eventColumn.setAttribute('class', 'col-2 save-column');
  calRow.append(lockColumn); 
})

