const object = {
  name: "Imtiaz Hossain",
  age: 12,
  homeTown: "Lakshmipur",
};

/* const {name, age} = object;
console.log(name); */

/* Object.seal(object);
Object.freeze(object);
Object.seal(obj): Property values can be updated, but new properties cannot be added, and existing ones cannot be removed.
Object.freeze(obj): Property values are locked, and the object cannot be altered at all.
Checking Status: Object.isSealed(obj) and Object.isFrozen(obj) are used to verify the state.
// const status = Object.isSealed(object); it reaturn true or false in the result
// const status = Object.isFrozen(object) it reaturn true or false in the result
console.log(status); */

/* for in loop to print object
for (let key in object) {
  console.log(`Key: ${key} and value: ${object[key]}`);
} */

/* we can run for of loop in object in systematically
for(let [key, value] of Object.entries(object))
{
    console.log(`Key: ${key}. and value: ${value}`);
}
 */

// console.log(Object.entries(object)); It provide key and value in an array
