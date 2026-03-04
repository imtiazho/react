/** Template String */
/* ১. Concept & Logic (কেন?)
প্রথাগত জাভাস্ক্রিপ্টে স্ট্রিংয়ের সাথে ভেরিয়েবল যোগ করতে আমাদের + অপারেটর (Concatenation) ব্যবহার করতে হতো, যা বড় স্ট্রিংয়ের ক্ষেত্রে কোডকে হিজিবিজি এবং রিডিবিলিটি কমিয়ে দিত। এছাড়া মাল্টি-লাইন স্ট্রিং লেখার জন্য \n ব্যবহার করা ছিল বেশ ঝামেলার। Template String এই সমস্যার সমাধান করে। এটি আমাদের স্ট্রিংয়ের ভেতরে সরাসরি ভেরিয়েবল বসানোর (Interpolation) এবং সহজে মাল্টি-লাইন টেক্সট লেখার সুবিধা দেয়। এটি ব্যাকটিক (`) চিহ্নের মাধ্যমে ডিফাইন করা হয়।
*/

const name = "Imtiaz";
const role = "Mora Engine Er Helper";
const projects = 5;

// Old system with lots of complication
const meaasge =
  "Hello im " +
  name +
  " and im a " +
  role +
  " i have " +
  projects +
  " in my portfolio.";

// New system with much easier with backtick that template string
const messageNew = `Hello im ${name} and im a ${role} i have ${projects} in my portfolio.`;

// console.log(meaasge);

/** Arrow Function */
/* Concept & Logic
ঐতিহ্যগত function কীওয়ার্ডের একটি সংক্ষিপ্ত এবং আধুনিক রূপ হলো অ্যারো ফাংশন। এটি ES6-এ আনা হয়েছে কোডকে আরও ক্লিন করার জন্য। তবে এর বড় একটি লজিক্যাল পার্থক্য হলো this কীওয়ার্ডের ব্যবহারে। সাধারণ ফাংশনের নিজস্ব this থাকে, কিন্তু অ্যারো ফাংশন তার চারপাশের (Parent) স্কোপ থেকে this-কে ধার করে। */

// Normal Arrow Function
const add = (a, b) => a + b;

// It can be write without braces if there is only one parameter
const double = (a) => a * 2;

// If arrow function is multiline then you have to must return result otherwise it wont work perfectly
const greet = (name) => {
  const messageAnother = `Hello from ${name}`;
  return messageAnother;
};

// console.log(greet("Ismail"));

/** Spread Operator (...) */
/* Concept & Logic
স্প্রেড অপারেটর হলো একটি অত্যন্ত শক্তিশালী টুল যা কোনো অ্যারে বা অবজেক্টের ভেতরের উপাদানগুলোকে "ছড়িয়ে" (Spread) দেয়। এটি মূলত ইমিউটেবলিটি (Immutability) বজায় রেখে ডাটা কপি বা মার্জ করার জন্য ব্যবহার করা হয়। রিয়্যাক্ট স্টেটে ডাটা আপডেট করার সময় এটি সবচেয়ে বেশি ব্যবহৃত হয়। */

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];

// const user = { name: "Arif", age: 24 };
// const updateUser = { ...user, age: 25, city: "Dhaka" };

// console.log(user);
// console.log(updateUser);

/** Map, Filter, Find and ForEach */
/* Common Concept: Callback & Loop
এই চারটি মেথডই হলো Higher-Order Functions। এদের সবার আন্ডার দ্যা হুডে একটি সাধারণ for লুপ চলে। প্রতিটি মেথড অ্যারের প্রতিটি উপাদানের ওপর দিয়ে যায় (Iterate করে) এবং আপনার দেওয়া একটি Callback Function-কে কল করে। */

/* Map (ম্যাপ)
Concept & Logic
map ব্যবহার করা হয় যখন আপনি একটি অ্যারের প্রতিটি উপাদানকে পরিবর্তন করে একটি নতুন অ্যারে তৈরি করতে চান। এটি আদি (Original) অ্যারেটিকে পরিবর্তন করে না। */
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2); // [2, 4, 6]

// Under the Hood (কীভাবে কাজ করে?)
// একটি কাস্টম ম্যাপ ফাংশন
// Under The hood
function myMap(array, callback) {
  const newArray = []; // ১. নতুন একটি খালি অ্যারে নেয়
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array); // ২. আপনার লজিক অ্যাপ্লাই করে
    newArray.push(result); // ৩. রেজাল্টটি নতুন অ্যারেতে ঢোকায়
  }
  return newArray; // ৪. নতুন অ্যারেটি রিটার্ন করে
}

/* Filter (ফিল্টার)
Concept & Logic
filter ব্যবহার করা হয় একটি নির্দিষ্ট শর্তের ওপর ভিত্তি করে কিছু উপাদানকে বাছাই করে একটি নতুন অ্যারে তৈরি করতে। */
const ages = [12, 18, 25, 10];
const adults = ages.filter((age) => age >= 18); // [18, 25]

function myFilter(array, callback) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    // যদি আপনার কন্ডিশন (Callback) 'true' রিটার্ন করে, তবেই পুশ হবে
    if (callback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

/* Find (ফাইন্ড)
Concept & Logic
এটি অ্যারের ভেতর কোনো কিছু খোঁজে। শর্ত মিলে গেলে সে প্রথম উপাদানটি রিটার্ন করে এবং লুপ থামিয়ে দেয়। শর্ত না মিললে undefined দেয়। */
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const user = users.find((u) => u.id === 2); // {id: 2, name: 'B'}

// Under the Hood
function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i]; // ১. শর্ত মিললে সাথে সাথে আইটেমটি নিয়ে বের হয়ে যায় (Break)
    }
  }
  return undefined; // ২. পুরো লুপ ঘুরেও না পেলে আনডিফাইন্ড
}

/* ForEach (ফর-ইচ)
Concept & Logic
এটি শুধু একটি লুপ। এটি কোনো কিছু রিটার্ন করে না। এটি দিয়ে আপনি অ্যারের প্রতিটি উপাদানের ওপর কোনো অ্যাকশন পারফর্ম করেন (যেমন: কনসোলে প্রিন্ট করা বা ডাটাবেসে সেভ করা)। */
const colors = ["red", "green"];
colors.forEach((color) => console.log(color));

// Under the hood
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array); // ১. শুধু কলব্যাক রান করে, কোনো ভ্যালু স্টোর বা রিটার্ন করে না
  }
  // No return statement (returns undefined by default)
}

/** Array and Object Destructuring */
/* Object Destructuring (অবজেক্ট ডিস্ট্রাকচারিং)
Concept & Logic
অবজেক্ট ডিস্ট্রাকচারিং হলো একটি অবজেক্ট থেকে নির্দিষ্ট কিছু প্রোপার্টি বের করে সরাসরি ভেরিয়েবল হিসেবে ব্যবহার করার একটি সংক্ষিপ্ত পদ্ধতি। আগে আমাদের user.name, user.age এভাবে বারবার লিখতে হতো, যা কোডকে বড় করে দিত। ডিস্ট্রাকচারিং কোডকে অনেক বেশি ক্লিন এবং রিডিবল (Readible) করে। */
const user2 = {
  id: 101,
  name2: "Arif",
  email: "arif@example.com",
  city: "Dhaka",
};

// ১. বেসিক ডিস্ট্রাকচারিং
const { name2, email } = user;
console.log(name2); // Arif

// ২. রিনেম করা (Alias)
const { city: homeTown } = user;
console.log(homeTown); // Dhaka

// ৩. ডিফল্ট ভ্যালু সেট করা
const { country = "Bangladesh" } = user;
// console.log(country); // Bangladesh (যেহেতু অবজেক্টে দেশ নেই)

/* Array Destructuring (অ্যারে ডিস্ট্রাকচারিং)
Concept & Logic
অ্যারে ডিস্ট্রাকচারিং অবজেক্টের মতোই, তবে এখানে কী-এর বদলে ইন্ডেক্স (Index) বা সিরিয়াল অনুযায়ী ভ্যালু অ্যাসাইন করা হয়। এটি মূলত তখন ব্যবহার করা হয় যখন অ্যারের এলিমেন্টের নাম আমরা নিজেরা ঠিক করতে চাই। রিয়্যাক্টের useState হুক এই পদ্ধতিতেই কাজ করে। */

const color = ["Red", "Green", "Blue", "Yellow"];

// ১. সিরিয়াল অনুযায়ী ভ্যালু নেওয়া
const [first, second] = colors;
console.log(first, second); // Red Green

// ২. নির্দিষ্ট এলিমেন্ট স্কিপ করা
const [primary, , thirdColor] = colors;
console.log(primary, thirdColor); // Red Blue (মাঝখানের কমা দিয়ে একটি স্কিপ করা হয়েছে)

// ৩. রেস্ট অপারেটর (...) ব্যবহার করা
const [top, ...rest] = colors;
console.log(rest); // ["Green", "Blue", "Yellow"]

// Nested Destructuring
const response = {
  status: 200,
  data: {
    user: {
      fullName: "Rahim Uddin",
      address: {
        zip: 1212,
        street: "Banani",
      },
    },
  },
};

// এক লাইনে ডিপ লেভেল ডিস্ট্রাকচারিং
const {
  data: {
    user: {
      fullName,
      address: { street },
    },
  },
} = response;

// console.log(fullName); // Rahim Uddin
// console.log(street); // Banani



/** Truthy and Falsey Value */
/* Truthy and Falsy Values
Concept & Logic
জাভাস্ক্রিপ্টে প্রতিটি ভ্যালুর একটি অন্তর্নিহিত বুলিয়ান (Boolean) চরিত্র থাকে। যখন আমরা কোনো ভ্যালুকে if কন্ডিশন বা লজিক্যাল অপারেশনে ব্যবহার করি, তখন জাভাস্ক্রিপ্ট সেটিকে হয় True অথবা False হিসেবে গণ্য করে।

Falsy Values: জাভাস্ক্রিপ্টে মাত্র ৬টি ভ্যালু আছে যা সবসময় false হিসেবে কাজ করে। এগুলো মুখস্থ রাখা জরুরি:
১. false (নিজে)
২. 0 (শুন্য)
৩. "" (খালি স্ট্রিং)
৪. null
৫. undefined
৬. NaN (Not a Number)

Truthy Values: উপরের ৬টি বাদে বাকি সব ভ্যালু (যেমন: "0", "false", [], {}) Truthy। */



/** Ternary Operator */
/* Ternary Operator (টারনারি অপারেটর)
Concept & Logic
এটি if-else স্টেটমেন্টের একটি সংক্ষিপ্ত রূপ। যখন আমাদের একটি কন্ডিশনের ওপর ভিত্তি করে কোনো ভ্যালু অ্যাসাইন করতে হয় বা ছোট কোনো ডিসিশন নিতে হয়, তখন এটি কোডকে অনেক ক্লিন রাখে। এর নাম 'Ternary' কারণ এটি ৩টি অংশ নিয়ে কাজ করে: condition ? trueValue : falseValue। */