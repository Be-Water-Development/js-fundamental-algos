// One bored and hungry evening we decided to randomly generate recipes.
// We can't
// wait to see the first suggestions,
// but JavaScript raises a TypeError,
// telling us that dishName.join is not a function. What is wrong?

// The issue was that .join needs to be called on an array. It
// was being called on a string, resulting in the TypeError.
// changing the constants dishName and Dish to arrays resolves the issue.

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

// Old - these were creating strings. .join is an array operation
// const dishName = random(adjective) + random(firstNoun) + random(secondNoun);
// const dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

// New - fixed to create arrays, where join is a method.
const dishName = [random(adjective), random(firstNoun), random(secondNoun)];
const dish = [random(ingredients, 3), random(spices, 2), random(extras, 1)];

console.log(`How about: ${dishName.join(" ")}`);
console.log(`You need: ${dish.join(", ")}`);

// perfect
