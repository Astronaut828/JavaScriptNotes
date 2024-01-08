// Training File
// Reviewing Notes and writing them out.

// Arrays
// Arrays are a data structure that can store multiple values.
let array = [1, 2, 3, 4, 5, 6, 7, 8]; // Array Literal, list of values separated by commas and surrounded by square brackets.
console.log(array); // -> [1, 2, 3, 4, 5]
console.log(array[0]); // Accessing an element in an array by its index, arrays are zero indexed. // -> 1
console.log(array.length); // Arrays have a length property that returns the number of elements in the array. // -> 5

console.log(typeof array); // -> object // Arrays are objects

// Objects
// Objects are a data structure that can store multiple values.
// Objects are a collection of properties, where each property has a key and a value.
// Objects are surrounded by curly braces and properties are separated by commas.
let trainingObject = {
  key: 8,
  key2: "eight",
  "key 3": "8 eight",
};
console.log(trainingObject); // -> { key: 'value', key2: 'value2', key3: 'value3' }
// All Keys can be logged using Object.keys()
console.log(Object.keys(trainingObject)); // -> [ 'key', 'key2', 'key3' ]

// Properties
// Objects, Arrays, and Functions have properties that can be accessed with a dot or square bracket notation.
// Almost all values have properties, the exceptions are null and undefined.
console.log(trainingObject.key); // Dot Notation used to access a property with literal key // -> 8
console.log(trainingObject["key 3"]); // Square Bracket Notation used to access a property with a string key. // -> 8 eight

// To loop over the properties of an object, you can use a for loop.
for (let property in trainingObject) {
  console.log(property); // -> key key2 key3
}

// Same can be done with an array, but the variable will be the index of the array.
for (let index in array) {
  console.log(index); // -> 0 1 2 3 4 5 6 7
  console.log(array[index]); // -> 1 2 3 4 5 6 7 8
}

for (let index of array) { // for of loop can be used to loop over the values of an array.
  console.log(index); // -> 1 2 3 4 5 6 7 8
}

// Methods
// Methods are properties that hold function values.
let trainingObject2 = {
  method: function () {
    console.log("Method");
  },
  functionalMethod(x) {
    return x * x;
  },
  regularKey: 8,
};

// Calling a method
trainingObject2.method(); // Calling a method with dot notation // -> Method
console.log(trainingObject2.functionalMethod(4)); // Calling a method with dot notation to execute a function. // -> 16

let string = "METHODS ARE FUNCTIONS THAT ARE PROPERTIES OF OBJECTS";
let newString = string.toLowerCase(); // .toLowerCase() is a string method that returns a new string with all lowercase letters.
console.log(newString);
// There are many more string methods like:
// .toUpperCase() .length() .split() .slice() .indexOf() .replace() .trim() .repeat() .concat() .charAt() .charCodeAt()
// .includes() .startsWith() .endsWith() .search() .match() .padStart() .padEnd() ...

// Arrays have many methods as well:
let array2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array2.indexOf(8)); // .indexOf() returns the index of the first element that matches the argument. // -> 7
console.log(array2.includes(8)); // .includes() returns true if the array contains the argument. // -> true
// There are many more array methods like:
// .push() .pop() .shift() .unshift() .splice() .slice() .concat() .join() .reverse() .sort()...
// .filter() .map() .reduce() are higher order functions that take a function as an argument (See HigherOrderFunctions.js)

// Mutability
// Strings, Numbers, and Booleans are immutable, meaning they cannot be changed.
// Objects and Arrays are mutable, meaning they can be changed.
trainingObject2.regularKey = 16; // Objects can be changed by assigning a new value to a property.
console.log(trainingObject2.regularKey); // -> 16

array2[0] = 16; // Arrays can be changed by assigning a new value to an index.
console.log(array2[0]); // -> 16
