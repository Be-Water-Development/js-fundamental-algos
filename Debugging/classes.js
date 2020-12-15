// There are a lot of exciting classes offered in our region. We wrote a small script that checks which ones are
// still upcoming and compatible with our calendar. We must be available to attend all sessions
// of a particular class in order to sign up for it. We can always arrange that on weekends,
// but for weekdays we have to check whether our calendar is free.

// Although the code below runs, something is wrong with it.
// Why is everything except for the Back To The Future Movie Night in the list of compatible classes?

// Hint: Look up Date --> its a JS object :-)

const TODAY = toDate("2018-08-05");


function toDate(string) {
  return new Date(`${string}T00:00:00`);
}

function toString(date) {
  //changed getYear to getFullYear, per MDN bad practice to use getYear. 
  //getMonth is corrupting the string, month's are being shifted down since month runs from a zero based index system, added one to correct 
  //get day is also corrupting the string, need to use get date for date of the month 
  
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 && date.getDay() <= 5;
}

const myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"],
};

const offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsey Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    const dateStr = toString(date);
    
   
    return calendar[!dateStr] || calendar[dateStr] === []; 
    //return !calendar[dateStr] || calendar[dateStr].length === 0; 
  }

  const compatibleClasses = [];

  Object.keys(classes).forEach((className) => {
    const classDates = classes[className].map(toDate);
    
     
    if (classDates.some(isInThePast)) {
      return;
    }


    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]

//I cannot get the selection for Mike's Hikes to work. 

/*
What is currently happening in your code?
-First issue is the toString function is corrupting the dates, fixed formatting see notes in function. 
-PowerBoating 101 confused me, I realized it's a weekend so it goes into isAvaliable without a date since isWeekday only assign dates to weekdays, 
so it passes the tests and is available. 

What do you think should be happening with your code?
-The return statement in isAvaliable isn't filtering as anticipated, if you console.log(!calendar[dateStr]) they all are truthy values, so they all pass that test and 
are not filtered out as expected. I have mixed emotions about this because I think calendar[!dateStr] should work, but if I run a test case for a new value that is not a weekend,
Powerboating 101 is the only value that passes the test. 

-the selection for Mike's Hike's is messing with me. I believe the line "calendar[dateStr].length === 0" is the selector for Mike's hikes, since the 
date of 8/16/18 in the calendar is an empty array. However, the 2nd half of the or statement is never reached since all items pass the first half of the or statement evaluate to true. 
Also, you get an undefined error if you do reach that block. I changed it to strictly equals an empty array but that doesn't work either. 


Why do you think your code is breaking?
-I believe the isAvaliable function is not filtering as anticipated. I want it to search the calendars keys, if the key is NOT equal to the dateStr passed in, then it should return 
that dateStr. If the calendar's key is equal to the dateStr BUT the value of that calendar's key is empty, it should NOT elimiate that value. I've tried to solve this with filter, forEach
and conditionals and I can't get the values to return as expected. I think by using filter and I am converting the values to an array, which is not wanted.

//this snippit confused me since ele should be equal to the dateStr, but its not, they are both stings wtf is happening. 
Object.keys(calendar).forEach((ele, index) => {
      if (ele === dateStr || Object.values(calendar).length === 0) {
        console.log(dateStr) // this never prints, if I console.log both ele and dateStr the values are the same, but I can't get them to reflect that. 
      }
      
    })

What resources have you attempted to utilize?
-Tears and honestly I don't know where to look for this. I've read MDN documentation for dates and strings and object assignment and I'm losing my shit. 


*/