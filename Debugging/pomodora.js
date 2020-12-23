// The following code demonstrates the Pomodoro technique.
// Although it seems to work in principle, it never prints the minute count from line 11.
// What is wrong?

//The variable minutes is declared both inside and outside the function pomodoro, which is creating two seperate variables, both called minutes. When minutes is
//referred to inside the pomodoro function, the function first checks it's inner scope, where it finds the inner variable minutes, and uses that value, which is undefined until it is delcared
//at the end of the function. The minutes variable outside of the function is never accessed. And each time the function is called again, the interior minutes is undefined, then assigned to zero,
//thus never incrementing with each recursive call. If the "var minutes = 0" inside the function is changed to "minutes = 0", the function now searches the outer scope for the variable and
//the "while (minutes < 25)" block now prints to the console.

// https://en.wikipedia.org/wiki/Pomodoro_Technique

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log("Work.");

  while (minutes < 25) {
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

  var minutes = 0; //if you remove the declaration of var, and only reassign minutes to zero, the function should work as anticipated.
  pomodoro();
}

pomodoro();

// Thumbs up
