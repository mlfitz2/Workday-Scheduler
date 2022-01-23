let currentTimeEl = $('#current-time');
let scheduleArea = $('#schedule-area')

//Displays the current time
function displayTime() {
  let currentTime = moment().format("dddd, MMMM Do, YYYY, h:mm a");
  currentTimeEl.text(currentTime);
}
displayTime();
setInterval(displayTime, 1000);


//Create the empty planner outline
let hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

hours.forEach(function(hours) {

  //Create rows
  let calRow = document.createElement('div');
  calRow.setAttribute('class', 'row');
  scheduleArea.append(calRow);
  
  //Create column for the time
  let hourColumn = document.createElement('div');
  hourColumn.setAttribute('class', 'col hour-column');
  calRow.append(hourColumn);
  hourColumn.textContent = moment(hours, 'hh').format('hh A');

      //Change the colors to show which hours are past, present or future
      let currentHour = moment().hours();
      let hourCol = parseInt(hourColumn.textContent);
      if (hours < currentHour) {
        hourColumn.setAttribute('class', 'past');
      } else if (hours > currentHour) {
        hourColumn.setAttribute('class', 'future')
      } else if (hours === currentHour) {
        hourColumn.setAttribute('class', 'present')
      }

      
  //Create column where the event will go
  let eventColumn = document.createElement('div');
  eventColumn.setAttribute('class', 'col events-column');
  calRow.append(eventColumn);

      //Create input field to type in the name of the event to add
      let eventInput = document.createElement('input');
      eventInput.setAttribute('class', 'form-control')
      eventColumn.append(eventInput);

  //Create column for Save button
  let lockColumn = document.createElement('div');
  lockColumn.setAttribute('class', 'col-2 save-column');
  calRow.append(lockColumn); 

      let unsavedIcon = document.createElement('i');
      unsavedIcon.setAttribute('class', 'fas fa-lock-open');
      lockColumn.append(unsavedIcon); 
      
  function saveActivity(eventInput) {
    let myActivity = $(eventInput).val();
    console.log(myActivity);
  }

  lockColumn.addEventListener('click', saveActivity);
})



