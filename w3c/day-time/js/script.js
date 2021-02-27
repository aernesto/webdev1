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


  // good ref https://stackoverflow.com/a/10211214
  let currentdate = new Date();
  /*
  recap on methods for currentdate object above:
    getDate() returns the day of the month
    getMonth() returns the month number with January == 0
    getFullYear() returns 4-digit year

  */
  let hour = currentdate.getHours()
  let dayHalf = ' AM ';
  if (hour >= 12) {
    hour -= 12;
    dayHalf = ' PM ';
  }

  let day = dayMapping[currentdate.getDay()];
  let time = " " + hour + dayHalf + ": "
                + currentdate.getMinutes() + " : "
                + currentdate.getSeconds();

  let htmlStrings = ['Today is: ', day, '.<br>Current time is : ', time];
  timeDiv.innerHTML = '';
  for (i=0; i < htmlStrings.length; i++) {
    timeDiv.innerHTML += htmlStrings[i]
  }
}
