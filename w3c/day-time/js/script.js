function refreshTime() {
  let timeDiv = document.querySelector("#time-div");

  let dayMapping = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }

  let monthMapping = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  }

  // good ref https://stackoverflow.com/a/10211214
  let currentdate = new Date();
  /*
  recap on methods for currentdate object above:
    getDate() returns the day of the month
    getMonth() returns the month number with January == 0
    getFullYear() returns 4-digit year

  */
  let dayNum = currentdate.getDate();
  let month = monthMapping[currentdate.getMonth()];
  let year = currentdate.getFullYear();
  let hour = currentdate.getHours();
  let dayHalf = ' AM ';
  if (hour >= 12) {
    hour -= 12;
    dayHalf = ' PM ';
  }

  let day = dayMapping[currentdate.getDay()];

  let minutes = currentdate.getMinutes() + '';
  minutes = minutes.padStart(2, '0');
  let seconds = currentdate.getSeconds() + '';
  seconds = seconds.padStart(2, '0');

  let time = " " + hour + dayHalf + ": "
                + minutes + " : "
                + seconds;

  let htmlStrings = [
    'Today is: ',
    day, ', ', dayNum, ' ', month, ' ', year,
    '.<br>Current time is : ',
    time
  ];

  timeDiv.innerHTML = '';
  for (i=0; i < htmlStrings.length; i++) {
    timeDiv.innerHTML += htmlStrings[i]
  }
}
