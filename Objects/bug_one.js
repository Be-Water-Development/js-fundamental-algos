// Fix the bug

//These are fun! I want to make sure I understand what is going on, the error "morning is not defined" printed to the console, so I tried to turn morning
//into a variable, which cannot happen inside an object. Then I looked at how greet was being called, and realized that morning needs to accessed with dot 
//notation so the function knows to search inside helloVictor for the morning object?? 

function createGreeter(name) {
  return {
    name: name,
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
    greet: function (timeOfDay) {
      let msg = "";
      switch (timeOfDay) {
        case "morning":
          msg += `${helloVictor.morning} ${name}`;
          break;
        case "afternoon":
          msg += `${helloVictor.afternoon} ${name}`;
          break;
        case "evening":
          msg += `${helloVictor.evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter("Victor");
helloVictor.greet("morning"); // should output ===> Good Morning Victor
helloVictor.greet("afternoon"); // Good Afternoon Victor
helloVictor.greet("evening"); // Good Evening Victor


