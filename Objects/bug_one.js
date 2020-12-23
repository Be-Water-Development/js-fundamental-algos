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
          msg += `${this.morning} ${name}`;
          break;
        case "afternoon":
          msg += `${this.afternoon} ${name}`;
          break;
        case "evening":
          msg += `${this.evening} ${name}`;
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

// Almost nailed it-- the way you wrote this if I were to instantiate
// another greater like so

let james = createGreeter("James");

//and then run those three functions it would work cuz name is passed thru but the code is wierd
//    msg += `${helloVictor.morning} ${name}`; now is applied to james

james.greet("morning");
james.greet("afternoon");
james.greet("evening");

// i can use the 'this' key word to bind JS to the entity it referring to
