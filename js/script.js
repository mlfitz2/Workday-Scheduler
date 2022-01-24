let currentTimeEl = $('#current-time');
let scheduleArea = $('#schedule-area')
let clearPastBtn = $('#clear-past')

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
  let calRow = $('<div>')
  $(calRow).attr('class', 'row');
  scheduleArea.append(calRow);
  
  //Create column for the time
  let hourColumn = $('<div>');
  $(hourColumn).addClass('col hour-column')
  $(hourColumn).attr('id', hours+"-timeslot");
  calRow.append(hourColumn);
  $(hourColumn).text(moment(hours, 'hh').format('hh A'));

      //Change the colors to show which hours are past, present or future
      let currentHour = moment().hours();
      let hourCol = parseInt(hourColumn.textContent);
      if (hours < currentHour) {
        $(hourColumn).attr('class', 'past');
      } else if (hours > currentHour) {
        $(hourColumn).attr('class', 'future');
      } else {
        $(hourColumn).attr('class', 'present');
      }

  //Create column where the event will go
  let eventColumn = $('<div>');
  eventColumn.attr('class', 'col events-column');
  calRow.append(eventColumn);

      //Create input field to type in the name of the event to add
      let eventInput = $('<input>');
      eventInput.attr('type', 'text');
      eventInput.attr('class', 'form-control event-name');
      eventInput.attr('id', hours+'-activity');
      eventColumn.append(eventInput);
      
         
      //Create column for Save button
      let lockColumn = $('<div>');
      lockColumn.attr('class', 'col-2 save-column');
      calRow.append(lockColumn); 
      
      //Add unlocked icon to Save button
      let lockIcon = $('<i>');
      lockIcon.attr('class', 'fas fa-lock-open');
      lockColumn.append(lockIcon); 
      
      //Clicking the save button saves the event to the calendar on local storage
      $(lockColumn).click(function() {
        //When it's saved, the open lock icon is replaced with a closed lock, and the button becomes green
        lockIcon.removeClass('fas fa-lock-open');
        lockIcon.addClass('fas fa-lock');
        lockColumn.addClass('saved');

        //Save activities to local storage  
        let event0800 = $('#8-activity').val();
        let event0900 = $('#9-activity').val();
        let event1000 = $('#10-activity').val();
        let event1100 = $('#11-activity').val();
        let event1200 = $('#12-activity').val();
        let event1300 = $('#13-activity').val();
        let event1400 = $('#14-activity').val();
        let event1500 = $('#15-activity').val();
        let event1600 = $('#16-activity').val();
        let event1700 = $('#17-activity').val();

        localStorage.setItem('0800-Event', event0800);
        localStorage.setItem('0900-Event', event0900);
        localStorage.setItem('1000-Event', event1000);
        localStorage.setItem('1100-Event', event1100);
        localStorage.setItem('1200-Event', event1200);
        localStorage.setItem('1300-Event', event1300);
        localStorage.setItem('1400-Event', event1400);
        localStorage.setItem('1500-Event', event1500);
        localStorage.setItem('1600-Event', event1600);
        localStorage.setItem('1700-Event', event1700);
      })

      //Pull activities from local storage when page loads
      let savedEvent0800 = localStorage.getItem('0800-Event');
      let savedEvent0900 = localStorage.getItem('0900-Event');
      let savedEvent1000 = localStorage.getItem('1000-Event');
      let savedEvent1100 = localStorage.getItem('1100-Event');
      let savedEvent1200 = localStorage.getItem('1200-Event');
      let savedEvent1300 = localStorage.getItem('1300-Event');
      let savedEvent1400 = localStorage.getItem('1400-Event');
      let savedEvent1500 = localStorage.getItem('1500-Event');
      let savedEvent1600 = localStorage.getItem('1600-Event');
      let savedEvent1700 = localStorage.getItem('1700-Event');

      $('#8-activity').val(savedEvent0800);
      $('#9-activity').val(savedEvent0900);
      $('#10-activity').val(savedEvent1000);
      $('#11-activity').val(savedEvent1100);
      $('#12-activity').val(savedEvent1200);
      $('#13-activity').val(savedEvent1300);
      $('#14-activity').val(savedEvent1400);
      $('#15-activity').val(savedEvent1500);
      $('#16-activity').val(savedEvent1600);
      $('#17-activity').val(savedEvent1700);      
    })
    


