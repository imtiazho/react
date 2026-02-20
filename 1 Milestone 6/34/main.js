// What is js? High abstructed Programming Language, Dont have to memory allocation, garbage. Reduce details so we can focus on logic, imrpove maintainability of the code. JIT compiler, not purely interpreted, muti paradigm, prototype based, dynamically typed

// JavaScript Engine V8 Internal mechanism? Docs, how? spider monkey for mozilafirefox

// Execution context and call stack. Callback queue, event loop
// const a = 10;

// const first = () => {
//   second();
//   console.log("HEllo ami first");
// };

// const second = () => {
//   third();
//   console.log("Ami second");
// };

// const third = () => {
//   console.log("Ami third");
// };

// const b = 20;
// first();
// console.log("Ami sobar last");

// Single-threaded, Asynchronous vs Synchronous
// console.log("Hero");
// console.log("Hero");
// console.log("Hero");
// function sum()
// {
//     console.log("SUM");
// }
// sum();

// =======

// Synchronous
// const a = 10;

// const first = () => {
//   second();
//   console.log("HEllo ami first");
// };

// const second = () => {
//   third();
//   console.log("Ami second");
// };

// const third = () => {
//   console.log("Ami third");
// };

// const b = 20;
// first();
// console.log("Ami sobar last");

// Asynchronous
// const num1 = 12;
// const num2 = 23;
// console.log("AMI PROTHOM");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// setTimeout(() => {
//   console.log("ami second");
// }, 3000);

// test();

// console.log("AMI Third");

// const res = num1 + num2;
// console.log(res);

// function test() {
//   console.log("AMI TEST");
// }

// Promise, Promise All
// const loadData = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch(err => console.log(err));
// };
// loadData();

// How promise work under the hood
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     const status = true;
//     // if (status) {
//     //   resolve("HERO");
//     // } else {
//     //   reject("SERVER ERROR");
//     // }
//     if (status) {
//       const mockData = {
//         json: () => Promise.resolve({ name: "HERO" }),
//       };
//       resolve(mockData);
//     } else {
//       reject("SERVER ERROR");
//     }
//   });
// };

// fetchData()
//   .then((res) => res.json())
//   .then(data => console.log(data))
//   .catch((err) => console.log(err));

// const urls = [
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/1",
// ];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url)
//       .then((res) => res.json())
//       .then((data) => data);
//   }),
// )
//   .then((res) => res)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Async / Await in details
// const loadData = async () => {
//   //   console.log("Ami prothom");
//   //   console.log("Ami second");

//   //   setTimeout(() => {
//   //     console.log("Ami set timeout tobe second.O");
//   //   }, 2000);

//   //   fetch("https://jsonplaceholder.typicode.com/todos/1")
//   //     .then((res) => res.json())
//   //     .then((data) => console.log(data))
//   //     .catch(err => console.log(err));

//   //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   //   console.log(response);

//   //   const res = 10 + 2;
//   //   console.log(res);
//   //   console.log("Ami third");
//   //

//   // How handle error in async function
//   try {
//       console.log("Ami prothom");
//       console.log("Ami second");
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1",
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch {
//     console.log("Error");
//   }

//     const res = 10 + 2;
//     console.log(res);
//     console.log("Ami third");
// };
// loadData();

// setInterval and clearInterval
// console.log(1);
// console.log(2);

// let cnt = 0;
// const clockId = setInterval(() => {
//   cnt++;
//   console.log(cnt);

//   if (cnt == 5) {
//     clearInterval(clockId);
//   }
// }, 1000);
// // setTimeout(() => {
// //   console.log(3);
// // }, 3000);

// console.log(4);
// console.log(5);
// console.log(6);

// JavaScript event loop and concurrency
// function a() {
//   b();
//   console.log("a");
// }
// function b() {
//   c();
//   console.log("b");
// }

// setTimeout(() => {
//   console.log("AMI SET TIME OUT");
// }, 2000);
// setTimeout(() => {
//   console.log("AMI SET TIME OUT TWO");
// }, 3000);

// function c() {
//   d();
//   console.log("c");
// }
// function d() {
//   e();
//   console.log("d");
// }
// function e() {
//   console.log("e");
// }
// function f() {
//   console.log("f");
// }

// a();
