// One bored and hungry evening we decided to randomly generate recipes. We can't
// wait to see the first suggestions, but JavaScript raises a TypeError,
// telling us that dishName.join is not a function. What is wrong?

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  const elements = array.slice();
  const randomElements = [];

  while (n > 0 && elements.length > 0) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    const randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

const ingredients = [
  "rice",
  "green bell pepper",
  "mushrooms",
  "carrot",
  "kebab",
  "spinach",
  "soy bean sprouts",
  "mashed potatoes",
  "corn",
  "cucumber",
  "peas",
];

const spices = [
  "peri peri",
  "cinnamon",
  "nutmeg",
  "cardamom",
  "ground ginger",
  "poppy seed",
  "cumin",
];

const extras = ["peanuts", "sesame seeds", "egg", "wasabi", "soy sauce"];

// Name

const adjective = ["Delicious", "Hot", "Exotic", "Creative", "Festive", "Dark"];
const firstNoun = ["Power", "After Work", "Holiday", "Disco", "Late Night"];
const secondNoun = ["Mix", "Delight", "Bowl", "Chunk", "Surprise", "Bliss"];

// Generate!

const dishName = [random(adjective), random(firstNoun), random(secondNoun)]; //converted string into an array with square brackets
const dish = [random(ingredients, 3) + random(spices, 2) + random(extras, 1)]; //converted string into an array with square brackets

console.log(`How about: ${dishName.join(" ")}`);
console.log(`You need: ${dish.join(", ")}`);

//.join converts an array or array-like object into a string, dishname and dish are already strings so cannot be converted. If dishname and dish is converted to an array,
//then .join operates as expected

//However, the formatting of dish is still off since the .join(", ") is only seperating the results of invoking random with ingredients, spices and extras, not the strings
//within each call to the function random. It could be fixed by generating a string inside a new variable and scrapping the .join in the console.log statement of dish. Example below:

//const prettyDish = `${random(ingredients, 3).join(", ")}, ${random(spices, 2).join(", ")}, ${random(extras, 1).join(", ")}`;
//console.log(`You need: ${prettyDish}`) // You need: mushrooms, mashed potatoes, corn, peri peri, cinnamon, sesame seeds
//console.log(`You need: ${dish.join(", ")}`); // You need: green bell pepper,mushrooms,carrotground ginger,cuminsesame seeds

// Happy with this :thumbsUp
