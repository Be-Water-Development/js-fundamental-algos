// The following code demonstrates the Pomodoro technique.
// Although it seems to work in principle, it never prints 
// the minute count from line 11.
// What is wrong?

// On line 61, minutes was being declared as a variable inside the function 
// definition. This meant that within the pomodoro function, the variable 
// minutes was not referencing the variable minutes defined in the global
// execution context. The while loop was not executing since minutes was
// not defined in the function at the point whe while loop is called. 
// Changing var minutes = 0 to minutes = 0 above the invocation of 
// pomodoro() within pomodoro() referenced the global variable minutes
// and resolved the issue of the count to 25 logging to the console. 

// https://en.wikipedia.org/wiki/Pomodoro_Technique

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

// Debug
// console.log(minutes) // 0

function pomodoro() {
  console.log("Work.");

  // Debug
  // console.log(minutes) // undefined
  // console.log(sessions) // 0, 1, 2, etc.

  while (minutes < 25) {

    // Debug
    // console.log("getting here") // not getting into the while loop
    minutes += 1;
    console.log("..." + minutes);
  }

  console.log("PLING!");

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log("Done!");
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log("Rest for " + rest + " minutes.");

  minutes = 0;
  // var minutes = 0;
  pomodoro();
}

pomodoro();
