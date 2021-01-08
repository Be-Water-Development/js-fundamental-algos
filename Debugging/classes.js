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

const TODAY = toDate("2018-08-01"); // always use camel case for js -- this is python syntax where they lack 'const' to denote

function toDate(string) {
  return new Date(`${string}T00:00:00`);
}

function toString(date) {
  // fix: (toString was formatting date in way that wasn't matching keys in myCalendar)
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" + date.getDate()
  ).slice(-2)}`;
  // old toString(date)
  // return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`; ---> GREAT DEBUGGING!
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

//EXCELLENT CODE SMELL-- SUPER CLEAN EXACTLY HOW WE WOULD WRITE IT PROFFESIONALLY

function getCompatibleEvents(classes, calendar) {
  // LOVE THIS; THIS FUNCTION IS ONLY NECESSARY WITHIN THIS SCOPE SO KEEP IT TIGHTLY SCOPED
  function isAvailable(date) {
    const dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  const compatibleClasses = [];
  // VERY FUNCTIONAL==> WILL COVER THIS IN REACT BUT THIS IS VERY NICE STYLE AS YOU'LL SEE
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

//ABSOLUTELY GORGEOUS
