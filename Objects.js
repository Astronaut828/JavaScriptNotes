// Training File
// Reviewing Notes and writing them out.

// Objects
// Objects are collections of properties and methods and are a central principle of programm organization.
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
// We can log a specific property to the console using dot notation.
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
  // We can also add functions to an object. Functions that are properties of an object are called methods.
  invite: function () {
    console.log("You are invited to the party!");
  },
};
// We can log the object to the console.
console.log(party); // -> { guest: [ 'John', 'Mary', 'Joe' ], food: 'Pizza', drinks: 'Beer', entertainment: 'Music', invite: [Function: invite] }
// We can log a specific property to the console using dot notation.
console.log(party.guest); // -> [ 'John', 'Mary', 'Joe' ]
// And we can call the method using dot notation.
party.invite(); // -> You are invited to the party!

// To avoid repeating code, we could write a function that creates objects for us.
const createCar = (make, model, year) => {
  newCar = {};
  (newCar.make = make), (newCar.model = model), (newCar.year = year);
  return newCar;
};
// Providing the values as the parameters the function will return an object.
console.log(createCar("Ford", "Mustang", 1969)); // -> { make: 'Ford', model: 'Mustang', year: 1969 }

// Encapsulation
// Encapsulation is the bundling of data and methods that act on that data.
// The 'this' keyword refers to the object it belongs to.
// (Constructor functions are functions that create objects and are named with a capital letter by convention. More on this later.)
const Motorcycle = function (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.motorcycleInfo = function () {
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`); // When the method is called this will refer to the object it belongs to.
  };
};

// The 'new' Keyword envokes the constructor function.
// We can use the 'new' keyword to create objects.
let myMotorcycle = new Motorcycle("Ducati", "Monster", 2021);
// We can log the object to the console to see the properties of the object.
console.log(myMotorcycle); // -> Motorcycle { make: 'Ducati', model: 'Monster', year: 2021, motorcycleInfo: [Function (anonymous)] }
// The function returns anonymous because it is a function expression. We can call the function using dot notation.
myMotorcycle.motorcycleInfo(); // -> This is a 2021 Ducati Monster.

// We can iterate over the property keys of an object using a for...in loop.
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

// Prototypes
// A prototype is a blueprint for an object. All objects in JavaScript are instances of a prototype.
// A prototype is anoter object that is used as a fallback source of properties.
// When a object gets searched for a property that it does not have, its prototype will be searched for the property.
// We can add properties and methods to a prototype.
let carPrototype = {
  wheels: 4,
  horn: function () {
    console.log("Beep!");
  },
};
// We can now create an object and assing properties and methods as well as inherit properties and methods from the prototype.
let myCar = Object.create(carPrototype);
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
// myCar now has access to its own properties and methods as well as the properties and methods of the prototype.
console.log(myCar); // -> { make: 'Ford', model: 'Mustang', year: 1969 }
console.log(myCar.wheels); // -> 4
myCar.horn(); // -> Beep!
// We the prototype of an object using the Object.getPrototypeOf() method.
console.log(Object.getPrototypeOf(myCar)); // -> { wheels: 4, horn: [Function: horn] }

// Object.prototype is the prototype of all objects.
// We can add properties and methods to the Object.prototype.
Object.prototype.greeting = function () {
  console.log("Hello!");
};
// Now all objects have access to the greeting method.
myCar.greeting(); // -> Hello!
// So the object myCar has access to its own properties and methods,
// the properties and methods of its prototype, and the properties and methods of the Object.prototype.

// Constructor Functions
// Constructor functions are named with a capital letter by convention.
// Constructor functions are functions that create objects and classes. Classes are a newer feature of JavaScript.
class House {
  constructor(color, size, year) {
    this.color = color;
    this.size = size;
    this.year = year;
  }
  houseInfo() {
    console.log(
      `This ${this.size} ${this.color} house is built in ${this.year}.`
    );
  }
  get age() {
    return 2021 - this.year;
  }
  set color(newColor) {
    this._color = newColor;
  }
}
// A class is a blueprint for an object. A class has a constructor method that is called when an object is created.
// The constructor method is used to set the properties of an object. A class also has a getter and setter method.
// The getter and setter methods are used to get and set the properties of an object.
let myHouse = new House("blue", "large", 1990);
myHouse.houseInfo(); // -> This large blue house is built in 1990.
myHouse.age; // -> 31 // We can call the getter method like a property.
myHouse.color = "red"; // We can call the setter method like a property.
console.log(myHouse); // -> House { color: 'red', size: 'large', year: 1990, _color: 'red' }
myHouse.houseInfo(); // -> This large red house is built in 1990.

// The instanceof operator is used to check if an object is an instance of a class.
console.log(myHouse instanceof House); // -> true
// The House class is now the prototype of the myHouse object.
console.log(Object.getPrototypeOf(myHouse)); // -> House {}

// Overriding derived properties
// We can override derived properties of an object. A derived property is a property that is inherited from a prototype.
myHouse.year = 2020;
// Now the year property of the prototype is overridden. The year property of the myHouse object is now 2020.
console.log(myHouse); // -> House { color: 'red', size: 'large', year: 2020, _color: 'red' }

// Maps and Sets
// Maps and Sets are new data structures in JavaScript.
// Maps are collections of key-value pairs.
// Sets are collections of unique values.
// Maps and Sets are iterable. We can iterate over them using a for...of loop.
let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set(true, "Yes");
// We can log the map to the console to see the key-value pairs.
console.log(myMap); // -> Map { 'name' => 'John', 'age' => 30, true => 'Yes' }
// Map has a set of methods that we can use to manipulate the map.
// get(), has(), and delete() are some of the methods we can use.

// Sets are collections of unique values.
let mySet = new Set();
mySet.add("John");
mySet.add("Mary");
mySet.add("Joe");
// We can log the set to the console to see the values.
console.log(mySet); // -> Set { 'John', 'Mary', 'Joe' }
// A set can only contain unique values. If we try to add a value that already exists in the set, it will not be added.
mySet.add("John");
// We can log the set to the console to see the values.
console.log(mySet); // -> Set { 'John', 'Mary', 'Joe' }
// Sets are useful for removing duplicate values from an array.
let myArray = [1, 2, 3, 3, 4, 5, 5, 6];
let mySet2 = new Set(myArray);
console.log(mySet2); // -> Set { 1, 2, 3, 4, 5, 6 }

// The Iterator interface
// The Iterator interface is a new feature in JavaScript.
// The Iterator interface is used to iterate over data structures. 
// The Iterator interface is used by the for...of loop.
for (let value of mySet) {
  console.log(value); // -> John Mary Joe
}
// We can use the entries() method to return an iterator object.
let myEntries = mySet.entries();
console.log(myEntries); // -> [Map Entries] { [ 'John', 'John' ], [ 'Mary', 'Mary' ], [ 'Joe', 'Joe' ] }
// The iterator object has a next() method that returns an object with the value and done properties.
console.log(myEntries.next()); // -> { value: [ 'Joe', 'Joe' ], done: false }
console.log(myEntries.next()); // -> { value: undefined, done: true }
// The iterator object lets us iterate over the values of Arrays, Maps, and Sets.

// Symbols 
// Symbols are a new primitive type in JavaScript.
// A symbol is a unique identifier. We can use symbols as property keys, they are guaranteed to be unique.
// We can use the Symbol() function to create a symbol. 
let mySymbol = Symbol();
// We can use the typeof operator to check the type of a symbol.
console.log(typeof mySymbol); // -> symbol
let myNewCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
    [mySymbol]: "This is a new car."
}
// We can log the symbol to the console to see the value.
console.log(myNewCar[mySymbol]); // -> This is a new car.

// Getter, Setter and Static Methods
// We can use the get and set keywords to create getter and setter methods.
// Getter and setter methods are used to get and set the properties of an object.
// We can use the static keyword to create static methods.
// Static methods are methods that are called on the class itself, not on an instance of the class.
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    static info() {
        console.log(`${this.name} is of the class Person.`);
    }
}
// We can call the static method on the class itself.
Person.info(); // -> Person is of the class Person.
let john = new Person("John");
// We can call the getter method like a property.
console.log(john.name); // -> John
// We can call the setter method like a property.
john.name = "Mary";
console.log(john.name); // -> Mary

// Inheritance
// Inheritance is a principle of object-oriented programming. Inheritance is used to create new classes from existing classes.
// The new classes inherit the properties and methods of the existing classes. The existing classes are called parent classes.
// The new classes are called child classes. The child classes can override the properties and methods of the parent classes.
// We can use the extends keyword to create a child class.

class Person extends Human {
  constructor(legs, arms) { 
    super(legs, arms);
  }
  
  speak() {
    console.log("Hello!");
  }
}
// We can use the super keyword to call the constructor method of the parent class.
// Now the Person class inherits the properties and methods of the Human class.
let emma = new Person(2, 2);
emma.speak(); // -> Hello!
console.log(emma.name); // -> Emma
console.log(emma.legs); // -> 2

// We can use the instanceof operator to check if an object is an instance of a class.
console.log(emma instanceof Person); // -> true
console.log(emma instanceof Human); // -> true
// The Person class is now the prototype of the emma object and the Human class is the prototype of the Person class.