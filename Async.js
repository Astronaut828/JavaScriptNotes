// Training File
// Reviewing Notes and writing them out.

// Global execution context
console.log("Java Script is single threaded,");
console.log("meaning it can only do one thing at a time.");
log();
console.log("This is why we have asynchronous code.");

// Function execution context
function log() {
  console.log("Top to bottom,");
  console.log(`"one line at a time."\n`);
}
// The call stack is keeping track of the execution context.
// What code is running at what time and in what order.

function one() {
  console.log("One");
}

function two() {
  setTimeout(() => {
    console.log("Two");
  }, 500);
}

function three() {
  console.log(`Three \n`);
}

one();
two();
three();
// SetTimeout is an example of asynchronous code.
// It is a web api that and the callback is placed in the callback queue (Event Loop).
// The callback queue waits for the call stack to be empty and then places the callback on the call stack.
// This is why "Three" is logged before "Two".

// This is still running synchronously.

// Callbacks
// Callbacks are a way to handle asynchronous code.
// They are functions that are passed as arguments to other functions.
// They are called when the asynchronous code is done.
// Also called the continuation-passing style.
function one() {
  console.log("1");
}

function two2(callback) {
  setTimeout(() => {
    console.log("2");
    callback();
  }, 1000);
}

function three() {
  console.log(`3 \n`);
}

one();
two2(three);

// Callbackhell
// Callbackhell is when you have many nested callbacks.
// It is hard to read and maintain.
// It is also hard to handle errors.
function callbackHell() {
  setTimeout(() => {
    const data = { name: "Bob" };
    console.log(data);
    setTimeout(() => {
      data.name = "John";
      console.log("Data is updated");
      setTimeout(() => {
        delete data.name;
        console.log("Data is deleted");
        setTimeout(() => {
          data.newData = "New Data";
          console.log(`New data is created \n`);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

callbackHell();
// This approach is not maintainable and hard to read.

// Promises
// Promises are a way to handle asynchronous code.
// They are an object that represents a future value.
// They are in one of three states: pending, fulfilled, or rejected.
// They are a cleaner way to handle asynchronous code.

// Promise constructor
// The Promise constructor takes a function as an argument.
// The function takes two arguments, resolve and reject. The resolve function is called when the asynchronous code is done. The reject function is called when there is an error.
const promise = new Promise((resolve, reject) => {
  // resolve({ name: "Bob" });
  reject("404 Error");
});

promise
  .then((user) => {
    // .then() is called when the promise is resolved.
    user.name = "not Bob";
    return user;
  })
  .then((name) => {
    console.log(name); // We can chain .then() methods and pass the value to the next .then() method. // -> { name: 'not Bob' }
  })
  .catch((error) => {
    // .catch() is called when the promise is rejected, this could be a network error or a programming error.
    console.log(error); //-> will log "404 Error"
  });

// Promise example with a fetch request
// Fetch is a web api that returns a promise. It is used to make network requests.
// The .json() method returns a promise that resolves with the result of parsing the body text as JSON.
const newPromise = new Promise((resolve, reject) => {
  resolve(fetch("https://jsonplaceholder.typicode.com/todos/5"));
});

newPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data); // Will log the data from the fetch request. // -> { userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false }
  })
  .catch((error) => {
    console.log(error); // Will log any errors if the fetch request fails.
  });

// Promise.all()
// Promise.all() takes an array of promises and returns a new promise.
// The new promise resolves when all of the promises in the array have resolved.
// The new promise rejects when one of the promises in the array rejects.
const promise1 = new Promise((resolve, reject) => {
  resolve(fetch("https://jsonplaceholder.typicode.com/todos/1"));
});

const promise2 = new Promise((resolve, reject) => {
  resolve(fetch("https://jsonplaceholder.typicode.com/todos/5"));
});

const promise3 = new Promise((resolve, reject) => {
  resolve(fetch("https://jsonplaceholder.typicode.com/todos/9"));
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Will log an array of the resolved values. // -> [ 'Promise 1', 'Promise 2', 'Promise 3' ] at once.
  })
  .catch((error) => {
    console.log(error); // Will log any errors if ANY of the promises in the array reject.
  });

// we can add a .finally() method to a promise.
// The .finally() method is called when the promise is settled, whether it is fulfilled or rejected.
// It is useful for cleanup, it is not passed any arguments.

// Async/Await
// Async/Await is a way to handle asynchronous code.
// It is built on top of promises. It is a cleaner way to write asynchronous code. Starting with ES8 this syntactic sugar was added to JavaScript.
// The async keyword is used to define an async function.
// The await keyword is used to pause the execution of the async function until the promise is resolved.

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/18");
  const data = await response.json();
  console.log(data); // Will log the data from the fetch request. // -> { userId: 1, id: 18, title: 'voluptate et itaque vero tempora molestiae', completed: true }
}
// Asyncronous code can be written in a synchronous way.
fetchData();

// Error handling
// We can use try/catch to handle errors.
// The catch block is called when there is an error.
async function fetchData2() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/18"
    );
    const data = await response.json();
    console.log(data); // Will log the data from the fetch request. // -> { userId: 1, id: 18, title: 'voluptate et itaque vero tempora molestiae', completed: true }
  } catch (error) {
    console.log(error); // Will log any errors if the fetch request fails.
  }
}
fetchData2();
