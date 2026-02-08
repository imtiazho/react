/*
    Data Type: Primitive and Non - Primitive
    1. Primitive types are the most basic building blocks. They are immutable, meaning the value itself cannot be changed once created (though the variable can be reassigned). They store a single, simple value.

    Examples: String, Number, Boolean, Undefined, Null, Symbol, and BigInt.

    Code: 
    let city = "Paris";
    // You can't change 'P' to 'M' directly on this value. 
    // You just give the variable a whole new string:
    city = "Madrid";


    2. Non-Primitive (Reference) Data Types
    Non-primitive types are more complex. They are mutable, meaning they can be modified after they are created. Instead of storing a simple value, they store a "reference" (an address) to where the data sits in the computer's memory.

    Examples: Object, Array, and Function.
    Think of an Array (a list). You can add or remove items from it without creating a brand-new list.
    const fruits = ["Apple", "Banana"];
*/

/*
    || Why we got Undefined and NULL?
    1. Undefined means a variable has been declared, but it has not been given a value yet. It is JavaScript’s default way of saying, "I know this box exists, but there’s nothing inside it."

    When do you see it? When you declare a variable without assigning a value. When a function doesn't return anything. When you try to access a property that doesn't exist in an object.

    Example: 
    let userAge; // Declared, but no value assigned
    console.log(userAge); // Output: undefined


    2. Null is an assignment value. It is never set by JavaScript automatically; a programmer must manually set it. It is used to represent an intentional absence of any object value. It basically says, "This box is purposefully empty."

    When do you use it? When you want to reset a variable. When you want to indicate that data is currently missing or "empty" (like a user who hasn't uploaded a profile picture).

    Example:
    let currentUser = "Alice"; 
    // User logs out, so we intentionally empty the variable currentUser = null;
    console.log(currentUser); // Output: null
*/

/*
    || Different Truthy and Falsy Values in JavaScript
    1. Falsy Values
    There are only a handful of falsy values in JavaScript. If a value is not on this list, it is automatically Truthy.

    The most common falsy values are:
    .
    false
    0 (the number zero)
    -0 (negative zero)
    "" or '' (an empty string)
    null
    undefined
    NaN (Not a Number)
    Example: If you check an empty string in an if statement, the code inside won't run because the string is "falsy."


    2. Truthy Values
    A truthy value is anything that is not in the falsy list. This includes some surprising ones that often trip up beginners!

    Surprising truthy values include:
    .
    "0" (a string containing zero)
    "false" (a string containing the word false)
    [] (an empty array)
    {} (an empty object)

    Example: Even though an array is empty, JavaScript considers the existence of the array as truthy.
*/ 


/*
    || double equal (==) vs triple equal (===), implicit conversion
    1. Double Equal (==): The "Loose" Equality.
    The == operator compares two values for equality after converting them to a common type. This is called implicit conversion. JavaScript tries to be "helpful" by changing the data types so they match before comparing.

    Example: If you compare a string "5" and a number 5, JavaScript converts the string to a number and says, "Yep, they look the same to me!"

    console.log(5 == "5"); // true
    console.log(1 == true); // true (true is coerced to 1)


    2. Triple Equal (===): The "Strict" Equality
    The === operator compares both the value and the data type. No conversion happens. If the types are different, it immediately returns false. This is the gold standard in modern coding because it prevents bugs.

    Example:
    console.log(5 === "5"); // false (one is a Number, one is a String)
    console.log(1 === true); // false (one is a Number, one is a Boolean)

*/  

/*
    || Block scope global scope simple understanding of Hoisting

    1. Global Scope
    A variable is in the Global Scope if it is defined outside of any function or curly braces {}. It is accessible from anywhere in your entire script.

    Example: Imagine a billboard on a main street. Everyone in the city can see it.

    Declare in global section
    let globalMessage = "I am everywhere!";


    2. Block Scope
    A Block is anything inside curly braces { }, like an if statement or a loop. Variables declared with let and const are Block Scoped, meaning they only exist inside those braces.

    Example: Imagine a message written on a whiteboard inside a private meeting room. Only people in that room can see it.

    if (true) {
    let secret = "12345";
        console.log(secret); // Works!
    }


    3. Hoisting: The "Elevator" Concept
    Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before the code is executed. However, it behaves differently depending on how you declare the variable: var: Is hoisted and initialized as undefined. You can access it before it's declared, but it won't have its value yet. let and const: Are hoisted but not initialized. If you try to use them before the line where they are defined, you get an error (this "danger zone" is called the Temporal Dead Zone).
*/ 

/*
    || Closure

    A Closure is one of those "aha!" concepts in JavaScript. Simply put: A closure is a function that remembers the environment in which it was created. Even after the outer function has finished running, the inner function still has access to the variables of that outer function.

    How it Works.
    Think of it like a backpack. When a function is born, it gets a "backpack" that contains all the variables it had access to at that moment. Wherever that function goes later, it carries that backpack with it.
*/ 

/*
    || Callback function and pass different functions
    
    1. A Callback Function is a function that is passed into another function as an argument. The outer function then "calls back" the inner function to perform a specific task. Think of it like leaving your phone number at a busy restaurant. You don't stand at the door waiting; you go for a walk, and they call you back when your table is ready

    function processUser(name, callback) {
        console.log("Processing data for: " + name);
        callback(); // Executing the callback
    }

    2. Passing Different Functions
    The real power of callbacks is reusability. You can use the same function (the "worker") and give it different instructions (the "callback") depending on what you need.

    function handleNumbers(a, b, operation) {
        return operation(a, b); 
    }
*/ 


/*
    || (advanced) function arguments pass by reference pass by value
    1. Pass by Value (Primitive Types)
    When you pass a primitive (String, Number, Boolean, etc.), JavaScript creates a copy of that value inside the function. Anything you do to that copy does not affect the original variable outside the function.

    let score = 10;


    2. When you pass an Object or an Array, you aren't passing a copy of the data. You are passing the reference (the address) to that specific object in memory. If the function modifies a property of that object, the original object outside the function will change.

    let user = { name: "Alice" };
*/ 


/*
    || Pre Increment, Post Increment, Pre decrement, Post decrement
    1. Pre-Increment (++a) & Pre-Decrement (--a)
    Rule: Change the value before doing anything else in that line.

    2. Post-Increment (a++) & Post-Decrement (a--)
    Rule: Use the current value for the calculation, and change the value after the line is finished.
*/ 
