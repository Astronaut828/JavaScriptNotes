// Training File
// Reviewing Notes and writing them out.

// Functions
// Name functions clearly, so that it is easy to understand what the function does.
// Functions should do one thing and do it well, avoid complexity in your code by breaking down tasks into smaller functions.
let newFunction = (x) => x * x;
console.log(newFunction(4)); // Variable with Function Expression // -> 16

function Multiply(x) {
  return x * x;
}
console.log(Multiply(4)); // Produces Value // -> 16

function noParameters() {
  console.log("No Parameters");
}
noParameters(); // Produces Side Effects // -> No Parameters

function produceUndefined() {
  return;
}
console.log(produceUndefined()); // "return" Without a value returns undefined // -> undefined

function produceUndefined2() {}
console.log(produceUndefined2()); // A function without a return statement returns undefined // -> undefined

function parameterValue(a, b) {
  // Parameters receive values when the function is called
  return a + b;
}
console.log(parameterValue(8, 8)); // -> 16

const arrow = (y) => {
  return y * y;
};
console.log(arrow(4)); // Arrow Function // -> 16

const arrowOneLine = (y) => y * y; // All Parenthesis can be removed if there is only one parameter
console.log(arrowOneLine(4)); // Produces Value // -> 16

const arrowNoParameters = () => console.log("Side Effects"); // Arrow Function with no parameters
arrowNoParameters(); // Produces Side Effects // -> Side Effects

function optionalParameters(a, b, c) {
  console.log(a, b, c);
}
optionalParameters(8, 8); //Parameters can be left empty and will get the value undefined // -> 8 8 undefined

function optionalParameters2(a, b) {
  console.log(a, b);
}
optionalParameters2(8, 8, 8); // Calling a function with more parameters than it has will not produce an error,
// but the extra parameters will be ignored // -> 8 8

function defaultParameters(a, b = 8) {
  // Parameters can be given a default value
  console.log(a, b);
}
defaultParameters(8); // Parameters can be left empty in the function call and will get the default value // -> 8 8

function restParameters(...args) {
  // Rest Parameter ...
  console.log(args);
}
restParameters(8, [8], "eight"); // Rest Parameters are used to get an array of all the parameters passed to a function // -> [8, [8], "eight"]
// Allowing for an unlimited amount and type of parameters

function closure() {
  let a = 8; // Variables declared inside a function are not accessible outside of the function (local scope)
}
// console.log(a); // -> ReferenceError: a is not defined

function recursion(n) {
  if (n == 0) {
    // Base Case (Stops the function from calling itself)
    return;
  } else {
    console.log(n);
    recursion(n - 1); // Recursive Case (Calls the function again) and changes the parameter by subtracting 1
  }
}
recursion(8); // -> 8 7 6 5 4 3 2 1
