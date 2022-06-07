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
          msg += `${morning} ${name}`;
          break;
        case "afternoon":
          msg += `${afternoon} ${name}`;
          break;
        case "evening":
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter("Victor");
helloVictor.greet("morning"); // should output ===> Good Morning Victor
