// const nums = [1, 2, 3, 4, 5, 6];

// const newArray = nums.map((eachElement, index) => {
//   console.log(index);
//   return eachElement * 2;
// });

// console.log(newArray);

/* 
// For Each 
const team = [
    { name: "Alex", role: "Developer" },
    { name: "Sam", role: "Designer" },
    { name: "Charlie", role: "Manager" }
];

team.forEach((member) => {
  console.log(`${member.name} is our team's ${member.role}.`);
}); */


/* // Filter 
const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Coffee Mug", price: 15, category: "Kitchen" },
  { name: "Phone", price: 800, category: "Electronics" }
];

// Get only the electronics
const electronics = products.filter(item => item.category === "Electronics");

console.log(electronics); */


/* // Find Operation
const staff = [
  { id: 101, name: "Alice" },
  { id: 202, name: "Bob" },
  { id: 303, name: "Charlie" }
];

// Find the person with a specific ID
const user = staff.find(person => person.id === 202);

console.log(user.name) */


/* // Instance of Object:: 
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Creating an instance
const genericAnimal = new Animal("Mysterious Creature");
// genericAnimal.makeSound()
// console.log(genericAnimal.makeSound()); */


/* // Parent Class 
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a noise.`);
  }
}

// The Child Class
class Dog extends Animal {
  constructor(name, breed) {
    // super() calls the constructor of the Parent (Animal)
    super(name); 
    this.breed = breed;
  }

  // Overriding or adding new methods
  makeSound() {
    console.log(`${this.name} the ${this.breed} barks!`);
  }
}

// Creating an instance of the inherited class
const myPet = new Dog("Rex", "Golden Retriever");
myPet.makeSound(); // Rex the Golden Retriever barks!  */


/* // Encapsulation
class BankAccount {
  // Private field (marked with #)
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  // Public method to modify private data safely
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    }
  }

  // Public method to view private data (Getter)
  getBalance() {
    return `The balance for ${this.owner} is $${this.#balance}`;
  }
}

const myAccount = new BankAccount("Alex");

myAccount.deposit(100);      // Works! "Deposited $100"
console.log(myAccount.getBalance()); // Works! "The balance... is $100"

// ATTEMPTING TO BREAK ENCAPSULATION:
// console.log(myAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class
myAccount.#balance = 5000000;      // Syntax Error! */