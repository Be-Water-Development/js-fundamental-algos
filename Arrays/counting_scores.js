//Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];
let test = {
    2: 3, 
    1: 5, 
    "frogs": "dogs"
}
let moreScores = [100, 102, 5, 8, 12, 233, -100, 9, 1000]


//declare a function scorecounter, takes a single parameter as input 
function scoreCounter(arr) {
    //check to see if input is an array 
    if (Array.isArray(arr)) {
        //using reduce, flip over each item, if >= 100, increment acc by 1, initial value of acc is 0. 
        return arr.reduce((acc, item) => {
            if (item >= 100) {
                acc += 1;
            }
            //return acc
            return acc;
        }, 0)

    }
    //if item is not an array, return string
    else return "this function requires an array as input";
} 

/* Option two: 
//What is faster here? Reduce or filter? 
//I'm leaning towards reduce since in filter option I need to declare a variable to run the .length property on. 

//declare function scoreCounter, arr as input
function scoreCounter(arr) {
    //check to see if input is an array
    if (Array.isArray(arr)) {
        //declare a variable equal to the result of filter for num >= 100. 
        const eleCount = scores.filter(num => num >= 100)
        //return the new variable's length with .length property. 
            return eleCount.length;
    }
    //if arr is not an array, return string 
    else return "this function requires an array as input"
} */


//Uncomment for tests
console.log(scoreCounter(scores)) // expected output is 3
console.log(scoreCounter(test)) // expected output is "this function requires an array as input"
console.log(scoreCounter(moreScores)) // expected output is 4