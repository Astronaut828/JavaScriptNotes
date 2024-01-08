// Training File
// Reviewing Notes and writing them out.
// for training purposes i will import the SCRIPTS array from the Book Eloquent JavaScript.
const SCRIPTS = require("./Eloquent_JS/Scripts.js");
// (alias) var SCRIPTS: {
//     name: string;
//     ranges: number[][];
//     direction: string;
//     year: number;
//     living: boolean;
//     link: string;
// }[]

// Higher Order Functions
// Higher Order Functions are functions that take other functions as arguments or return functions as their results.

// Functions that create new functions are called Higher Order Functions.
// Functions that change other functions are called Higher Order Functions.
// Functions that provide new types of control flow are called Higher Order Functions.

// There are three Higher Order Functions that are most commonly used in JavaScript.
// .map() .filter() .reduce() All three of these functions are array methods.

// .map()
// The .map() method takes a function as an argument and applies it to every element in an array.
let names = SCRIPTS.map((script) => script.name);
console.log(names);
// .map() returns a new array containing all the script names.

let namesAndDirection = SCRIPTS.map((script) => {
  // the rerurn value of the function is an object containing the name and direction of each script.
  return {
    name: script.name,
    direction: script.direction,
  };
});
console.log(namesAndDirection);
// .map() returns a new array containing all the script names and their direction.

// .filter()
// The .filter() method takes a function as an argument and returns a new array containing only the elements for which the function returned true.
let filteredNames = namesAndDirection.filter(
  (script) => script.name[0] === "A"
);
console.log(filteredNames);
// .filter() returns a new array containing only elements that pass the test ( first letter of the name being A)

let filteredDirection = namesAndDirection.filter(
  (script) => script.direction === "rtl"
);
console.log(filteredDirection);
// .filter() returns a new array containing only elements that pass the test ( direction being rtl / right to left)

let filteredDirectionAndName = SCRIPTS.filter(
  (script) => script.direction === "ltr" && script.name[0] === "B"
);
console.log(filteredDirectionAndName);
// .filter() returns a new array containing only elements that pass the test ( direction being ltr / right to left and name starting with B)
// using the SCRIPTS array in this example will return their full objects again.

// .reduce()
// The .reduce() method takes a function as an argument and returns a single value.
// The function takes two arguments, the first is the value that is being built up and the second is the current element in the array.
let reducedArray = filteredDirectionAndName.reduce((living, script) => {
  if (script.living === true) {
    living.push(script.name);
  }
  return living;
}, []);
console.log(reducedArray);
// the function returns an array containing the names of all the living scripts that pass the test.

// A easy to understand example is to sum up an array of values
let arrayOfValues = [2, 2, 2, 2];
let sumEight = arrayOfValues.reduce((sum, element) => sum + element);
console.log(sumEight);
// however we can also build an array of the values by making the accumulator an array and pushing the elements into it.
let arrayOfTwo = arrayOfValues.reduce((array, element) => {
  array.push(element); // Push each element into the accumulator
  return array; // Return the accumulator in each iteration
}, []);
console.log(arrayOfTwo);

// A more complex example is to find the script with the most characters in its name.
let longestScript = SCRIPTS.reduce((longest, script) => {
  if (script.name.length > longest.name.length) {
    return script;
  } else {
    return longest;
  }
});
console.log(longestScript);
