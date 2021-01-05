// We were asked to implement a task list and the following functionality:

// * adding a new task
// * completing a given number of existing tasks
// * displaying the task list
// We decided to keep things simple and model the tasks as strings.
// Completing a task for us simply means deleting the string from the array of tasks.

// Experimenting with our code reveals that it doesn't work exactly as we expected.
// Find the problem and fix it.

// Answer

// In the while loop in completeTasks, we were deleting an element from the array.
// However, this deleted the value at the index without shortening the array
// itself. Changing this line to use array.shift removed the element from the
// beginning and shortened the array - this resulted in the right console logs
// and output.

// thumbs up

const todos = [
  "wash car",
  "exercise",
  "buy groceries",
  "balance budget",
  "call plumber",
  "feed fido",
  "get gas",
  "organize closet",
];

function addTask(task) {
  if (todos.includes(task)) {
    console.log("That task is already on the list.");
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    // Debug
    // console.log("todo list", todos)
    console.log(`${todos[0]} complete!`);
    // delete todos[0];
    todos.shift();
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log("All tasks complete!");
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`);
  console.log("---------------------");

  for (let i = 0; i < todos.length; i++) {
    console.log(`-- ${todos[i]}`);
  }
}

// Utilizing our task manager

addTask("oil change");
addTask("dentist");
addTask("homework");

completeTasks(3);
displayTaskList();
