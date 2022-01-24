# Workday-Scheduler

Deployed Site:
https://mlfitz2.github.io/Workday-Scheduler/

GitHub Repository:
https://github.com/mlfitz2/Workday-Scheduler

This site is a workday planner covering the hours of 8:00 am to 5:00 pm. The user can enter the activities they have planned for each hour, and save the info to local storage so that it will continue to display after the page is refreshed. The header includes the current date and time, and the hours on the planner are color coded to indicate time slots that are past (gray), present (green) or in the future (blue). Upon saving an activity, the user receives confirmation that it has been saved as the open lock icon becomes closed, and the background of the button becomes green. 

The code features Bootstrap to create and format elements, Moments API to display the current time and help format the hours on the planner, and jQuery to power the site's functionality. 

In the screnshots below, one shot includes extra hours that are not in the deployed site. I added 6:00 pm - 11:00 pm just to be able to show the appearance of present and future times, since I was taking the screenshots after 6pm when the business hours were all in the past. 


![Screenshot-1](./screenshots/blankschedule.jpg "Upon loading")
![Screenshot-2](./screenshots/colorcoding.jpg "Color-coded past, present and future times")
![Screenshot-3](./screenshots/savedactivity.jpg "Button appearance when activity is saved")

