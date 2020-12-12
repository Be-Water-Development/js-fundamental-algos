// There are a lot of exciting classes offered in our region. 
// We wrote a small script that checks which ones are
// still upcoming and compatible with our calendar. 
// We must be available to attend all sessions
// of a particular class in order to sign up for it. 
// We can always arrange that on weekends,
// but for weekdays we have to check whether our calendar is free.

// Although the code below runs, something is wrong with it.
// Why is everything except for the Back To The Future Movie Night 
// in the list of compatible classes?

// Hint: Look up Date --> its a JS object :-)

const TODAY = toDate("2018-08-01");

function toDate(string) {
  return new Date(`${string}T00:00:00`);
}

function toString(date) {
  return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
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
  "Back To The Future Movie Night": ["2018-07-30", "2018-08-06"],
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
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  const compatibleClasses = [];

  Object.keys(classes).forEach((className) => {
    const classDates = classes[className].map(toDate);

    if (classDates.every(isInThePast)) {
    //if (classDates.some(isInThePast)) {
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

// Answer:

// The code doesn't show Back to the Future movie night because it is
// after the date value for TODAY. This seems expected at first since the script
// only shows upcoming classes, and the only date for BttF movie night is in
// the past. The function isInThePast() checks whether the 
// date is before or after TODAY. However, when isInThePast() is evaluated in
// the conditional statement on line 67, the array operation .some is used. 
// This will return true if any of the dates are in the past, even if there are 
// some dates that work with the calendar in the future. You can see the bug if you
// leave one date in the BttF calendar array that is in the past, and add another
// that is compatibler with myCalendar and is in the future. 

// The fix is to use .every() instead of .some() on line 67. This will return true
// only if every element in the array meets the condition. 
