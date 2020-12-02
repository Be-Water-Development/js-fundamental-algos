/* Create an array that has every letter in the alphabet 
(hint do not hardcode-- attempt this programatically). From this array, 
return a new array that contains only vowels. 
For bonus points use the function `filter` */


//using String.fromCharCode, used unicode values to generate array of letters. 
//Found this by searching "how to create an array of a-z unicode javascript"
//then got here https://www.w3schools.com/jsref/jsref_fromcharcode.asp
const letters = []; 
for (let i = 65; i < 91; i++) {
    letters.push(String.fromCharCode(i))
}

//using filter, see if item is equal to a vowel. Return those items. 
const v = (str) => {
     return str.filter(item => item ==='A' || item ==='E' || item ==='I' || item ==='O' || item ==='U' || item ==='Y');
}; 


// uncomment for test
//console.log(v(letters)); // ['A', 'E', 'I', 'O', 'U', 'Y']

