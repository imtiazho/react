// Difference Between let vs const
// const myName = "Imtiaz Hossain";
// let changeableVariable = 10;
// changeableVariable = 11;

// const friends = ["Imtiaz", "Hossain"];

// friends.push("SRK");
// console.log(friends);

// const person = {
//     name: "Imtiaz Hossain",
// }

// person.name = "Zubair";
// console.log(person.name);

// // I can chance property like push or pop but cant do change total entity.

// Function
// What is parameter?
// what is argument?
// function sum(num1 = 0, num2 = 0) // Parameter. Here we use defalt parameter. Default parameter setring is totally up to you
// {
//     const res = num1 + num2;
//     console.log(res);
// }
// sum(10, 20) // Argument
// sum(12) // Argument

// Template string, multiple line string, dynamic string
// const num = 12;
// const anthem =  `Amar ${num} sonar bangla ami
// totamy hhsjh
// `;
// console.log(anthem);

// Arrow function, multiple parameters, function body

// const add = (a, b) => {
//   console.log(a + b);
// };
// console.log(add(10, 20));

// const add = (a, b) => {
//      console.log(a + b);
// };
// add(10, 12);

// const add = (a, b) => a + b; // No need to return inline

// More About Arrow function
// document.getElementById("id").addEventListener("click", (event) => {
// console.log(event);
// }) anonymous function

// Spread operator, array max, copy arrays
// const friends = ["Sokina", "Joria", "Horina"];
// console.log(...friends);
// const newArray = [...friends, "Sami"];
// console.log(newArray);

// const nums = [1, 2, 3, 4, 5, 6, 7];
// const mx = Math.max(...nums);
// console.log(mx);

// (advanced) Object and Array Destructuring
// const hena = {
//   name: "HEna",
//   age: 12,
//   friends : ["Sokina", "Joria", "Horina"],
//   status : "Not founded"
// };

// const {name, age, friends} = hena;
// console.log(friends);

// const names = ["Sokina", {name: "Imtiaz"}, "Joria", "Horina"];
// const [nayok, obj] = names; // It works index wise

// Keys, values, entries, delete, seal, freeze
// const person = {
//   name: "Hena",
//   age: 12,
//   friends : ["Sokina", "Joria", "Horina"],
// };

// Object.seal(person); // It forbide to add new something but allows to edit or reassign.
// Object.freeze(person); // But it totally dont allow to add new or edit something

// person.status = "NOT";
// person.name = "Imtiaz Hossain";

// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// Loop through an object using for in, for of, object entries
// const person = {
//   name: "Hena",
//   age: 12,
//   friends: ["Sokina", "Joria", "Horina"],
// };

// // for(let key in person)
// // {
// //     console.log(`key : ${key}  value: ${person[key]}`);
// //     // console.log(key);
// // }

// for (let [key, value] of Object.entries(person)) {
//   console.log(`Key: ${key} || value: ${value}`);
//   // console.log(key);
// }
