// Training File
// Reviewing Notes and writing them out.

// Objects
// Objects are collections of properties.
// Properties are a key-value pair.

// Object Literal
// We can declare an object using object literal syntax.
const bbq = {};
// We can add properties to an object using dot notation.
bbq.meat = "Steak";
bbq.vegetable = "Corn";
// We can also add properties to an object using bracket notation.
bbq["equipment"] = "Grill";
bbq["meat seasoning"] = "Salt and Pepper";
// Now we can log the object to the console.
console.log(bbq); // -> { meat: 'Steak', vegetable: 'Corn', equipment: 'Grill', 'meat seasoning': 'Salt and Pepper' }
// Or we can log a specific property to the console using dot notation.
console.log(bbq.meat); // -> Steak
// Or we can log a specific property to the console using bracket notation.
console.log(bbq["vegetable"]); // -> Corn

// Declaring an object in one go, to make it easier to read.
const party = {
  // We can add properties like arrays and strings to an object.
  guest: ["John", "Mary", "Joe"],
  food: "Pizza",
  drinks: "Beer",
  entertainment: "Music",
  // We can also add functions to an object.
  invite: function () {
    console.log("You are invited to the party!");
  },
};
// We can log the object to the console.
console.log(party); // -> { guest: [ 'John', 'Mary', 'Joe' ], food: 'Pizza', drinks: 'Beer', entertainment: 'Music', invite: [Function: invite] }
// We can log a specific property to the console using dot notation.
console.log(party.guest); // -> [ 'John', 'Mary', 'Joe' ]
// Functions that are properties of an object are called methods.
// We can call the method using dot notation.
party.invite(); // -> You are invited to the party!

// To avoid repeating code, we could write a function that creates objects for us.
const createCar = (make, model, year) => {
  newCar = {};
  (newCar.make = make), (newCar.model = model), (newCar.year = year);
  return newCar;
};
// Providing the values for the parameters the function will return an object.
console.log(createCar("Ford", "Mustang", 1969)); // -> { make: 'Ford', model: 'Mustang', year: 1969 }

// We can also use the new keyword to create objects.
// The new Keyword envokes the constructor function.
// Constructor functions are functions that create objects and are named with a capital letter by convention.
const Motorcycle = function (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.motorcycleInfo = function () {
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`); // When the method is called this will refer to the object it belongs to.
  };
};
// Thew constructor function does not need a to enitialize a new object nor does it need to return the object.
// We can create a new object using the constructor function.
let myMotorcycle = new Motorcycle("Ducati", "Monster", 2021);
// We can log the object to the console.
console.log(myMotorcycle); // -> Motorcycle { make: 'Ducati', model: 'Monster', year: 2021, motorcycleInfo: [Function (anonymous)] }
// The function returns anonymous because it is a function expression. We can call the function using dot notation.
myMotorcycle.motorcycleInfo(); // -> This is a 2021 Ducati Monster.
// The new keyword creates a new object and sets the value of this to the new object.
// The this keyword refers to the object it belongs to.

// We can it over the propertie keys of an object using a for...in loop.
for (let key in myMotorcycle) {
  console.log(key); // -> meat vegetable equipment meat seasoning
}
// We can also iterate over the property values of an object using a for...in loop.
for (let key in myMotorcycle) {
  console.log(myMotorcycle[key]); // -> Steak Corn Grill Salt and Pepper
}
// We can use the hasOwnProperty() method to check if an object has a specific property.
console.log(myMotorcycle.hasOwnProperty("make")); // -> true
console.log(myMotorcycle.hasOwnProperty("color")); // -> false

// We can use the Object.keys() method to return an array of the object's property keys.
console.log(Object.keys(myMotorcycle)); // -> [ 'make', 'model', 'year', 'motorcycleInfo' ]

// We can use the Object.values() method to return an array of the object's property values.
console.log(Object.values(myMotorcycle)); // -> [ 'Ducati', 'Monster', 2021, [Function (anonymous)] ]
