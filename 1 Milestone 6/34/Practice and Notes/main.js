// JavaScript Engine V8 Internal mechanism? Docs, how? spider monkey for mozilafirefox

// To understand how JavaScript runs so fast, we have to look inside the Engine. While different browsers use different engines—V8 for Google Chrome/Node.js and SpiderMonkey for Mozilla Firefox—they follow a very similar internal pipeline to turn your text into machine action.

// The General Workflow:
// All modern engines follow these four main steps:
// Parsing: The engine reads your code and turns it into an Abstract Syntax Tree (AST) (a tree-like structure of your code).
// Compilation: A "Baseline Compiler" quickly turns that AST into Bytecode.
// Execution: The engine starts running the bytecode immediately.
// Optimization: While the code runs, a "Profiler" watches for "hot code" (code that runs over and over) and sends it to an Optimizing Compiler to turn it into highly efficient Machine Code.

// ==

// 1. V8 Internal Mechanism (Chrome/Node.js): V8 is famous for being extremely aggressive with performance. It uses two main components: Ignition: The Interpreter. It generates and executes bytecode quickly so the website starts working right away. TurboFan: The Optimizing Compiler. It takes the bytecode and "re-compiles" it into optimized Machine Code based on data collected while the app was running. Example of Optimization: If you have a function add(a, b) and you always pass Numbers, TurboFan says "I'll assume this function only handles numbers" and creates a super-fast machine code version of it.

// 2. SpiderMonkey (Mozilla Firefox): SpiderMonkey was the first-ever JavaScript engine (created by Brendan Eich). Today, it is very sophisticated and uses a "multi-tier" compilation strategy. Baseline Interpreter: Starts execution immediately. Baseline Compiler: Compiles code to a slightly faster version. IonMonkey (The Optimizer): This is Firefox's version of TurboFan. It performs deep mathematical optimizations for long-running code.

// ==

// Execution Context (The Environment): Whenever you run JavaScript code, it creates an Execution Context. Think of it as an environment or a "box" that contains all the variables and code currently being executed. Global Execution Context: Created when the script starts. Function Execution Context: Created every time a function is called.

// Call Stack (The "To-Do" List): The Call Stack is a data structure that keeps track of where we are in the script. It follows the LIFO (Last In, First Out) principle.
/* const a = 10;
const first = () => {
  second();
  console.log("HEllo ami first");
};
const second = () => {
  third();
  console.log("Ami second");
};
const third = () => {
  console.log("Ami third");
};

first(); */

// ==

// Single-threaded: Single-threaded means JavaScript has only one Call Stack and can execute only one command at a time. It’s like a chef in a kitchen who only has one burner. They can’t boil water and fry an egg at the exact same millisecond.
/* console.log("Hero");
console.log("Hero");
console.log("Hero");
function sum()
{
    console.log("SUM");
}
sum(); */

// Synchronous (The "Wait Your Turn" Way): In synchronous code, every line of code must wait for the previous line to finish before it can start. If one line takes a long time (like a huge calculation), the whole program "freezes."
/* const first = () => {
  second();
  console.log("HEllo ami first");
};
const second = () => {
  third();
  console.log("Ami second");
};
const third = () => {
  console.log("Ami third");
};

first(); */

// Asynchronous (The "Parallel" Way): Asynchronous code allows the program to start a long-running task and then move on to the next task without waiting. When the long task is finished, it notifies the program to handle the result.
/* const num1 = 12;
const num2 = 23;
console.log("AMI PROTHOM");

fetch("https://jsonplaceholder.typicode.com/todos/1") // Async
  .then((res) => res.json())
  .then((data) => console.log(data));

setTimeout(() => {                                    // Async
  console.log("ami second");
}, 3000);

test();

console.log("AMI Third");

const res = num1 + num2;
console.log(res);

function test() {
  console.log("AMI TEST");
} */

// ==

// Promise: In JavaScript, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Think of it like ordering a pizza: you receive a receipt (the Promise). The pizza is currently Pending. Eventually, the pizza is either delivered (Fulfilled) or the shop calls to say they ran out of ingredients (Rejected).

// How promise work under the hood
/* const fetchData = () => {
  return new Promise((resolve, reject) => {
    const status = true;
    if (status) {
      const mockData = {
        json: () => Promise.resolve({ name: "HERMO" }),
      };
      resolve(mockData);
    } else {
      reject("ERROR");
    }
  });
};

fetchData()
  .then((res) => res.json())
  .then((data) => console.log(data)); */

// Promise.all():  is used when you want to run multiple asynchronous tasks at the same time and wait for all of them to finish before doing something. The Rule: If all promises resolve, it returns an array of results. If even one promise fails, the whole thing fails immediately.

/* const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/1",
];

Promise.all(
  urls.map((url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }),
) */

// Async / Await: Async and Await are modern JavaScript features that act as "syntactic sugar" for Promises. They allow you to write asynchronous code that looks and behaves like synchronous code, making it much easier to read and maintain.
/* const loadData = async () => {
    console.log("Ami prothom");
    console.log("Ami second");

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(err => console.log(err));

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);

    const res = 10 + 2;
    console.log(res);
    console.log("Ami third");
}

loadData(); 

In this case how we handle error. 
.try{}
.catch{}
*/

// setInterval and clearInterval: setInterval(function, delay)This function takes two arguments:The function you want to run.The delay (time in milliseconds) between each execution.Example:This code will print "Tick..." to the console every 1 second ($1000$ ms).

/* setInterval(() => {
  console.log("Tick...");
}, 1000);

let cnt = 0;
const clockId = setInterval(() => {
  cnt++;
  console.log("Tick...", cnt);

  if (cnt == 5) {
    clearInterval(clockId);
  }
}, 1000); */


// ==

// JavaScript event loop and concurrency: To understand JavaScript's Concurrency Model, you first have to accept a contradiction: JavaScript is Single-threaded (can only do one thing at a time), yet it feels Multi-threaded because it can handle many things at once (like clicking buttons while a file is downloading). The Event Loop has one simple job: Look at the Call Stack and look at the Callback Queue. If the Call Stack is empty, it takes the first thing from the Queue and pushes it onto the Stack.
function a() {
  b();
  console.log("a");
}
function b() {
  c();
  console.log("b");
}

setTimeout(() => {
  console.log("AMI SET TIME OUT");
}, 2000);
setTimeout(() => {
  console.log("AMI SET TIME OUT TWO");
}, 3000);

function c() {
  d();
  console.log("c");
}
function d() {
  e();
  console.log("d");
}
function e() {
  console.log("e");
}
function f() {
  console.log("f");
}

a();