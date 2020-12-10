// Fix the bug

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
          // bug - to access an anonymous object's values
          // we needed to use this.<key>. Since <key> is not
          // a variable, it was undefined in the output. 
          msg += `${this.morning} ${name}`;
          break;
        case "afternoon":
          msg += `${this.afternoon} ${name}`;
          break;
        case "evening":
          msg += `${this.evening} ${name}`;
          break;
      }
      // bug - was logging msg to the console instead of returning msg
      // this created an undefined output after the message
      return msg;
    },
  };
}

let helloVictor = createGreeter("Victor");
console.log(helloVictor.greet("morning")); // should output ===> Good Morning Victor
