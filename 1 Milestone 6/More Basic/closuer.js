/* function sum(){
    let counter = 0;

    return function () {
        counter++;
        console.log(counter);
    }
}

const res = sum();
res();
res();
res();

const res1 = sum();
res1();
res1();
res1();

res(); */

// Another example
function createAccount(userName) {
  let balance = 0; // এটি ওই নির্দিষ্ট একাউন্টের প্রাইভেট ডাটা

  return function (amount) {
    balance += amount;
    return `${userName}, your balance is: ${balance}`;
  };
}

// এখানে দুটি আলাদা 'রেপ্লিকা' বা এনভায়রনমেন্ট তৈরি হচ্ছে:
const rahimAccount = createAccount("Rahim");
const karimAccount = createAccount("Karim");

console.log(rahimAccount(500)); // Output: Rahim, your balance is: 500
console.log(karimAccount(200)); // Output: Karim, your balance is: 200
console.log(rahimAccount(100)); // Output: Rahim, your balance is: 600 (আগের ৫০০ মনে রেখেছে)

/* 
    || আসল মেকানিজমটি কী?
    ১. মেমরি স্পেস (Not Code Replica): যখন আপনি createAccount("Rahim") কল করেন, জাভাস্ক্রিপ্ট মেমরিতে একটি ছোট্ট জায়গা (Scope) বুক করে ফেলে। সেখানে সে userName = "Rahim" এবং balance = 0 কে সেভ করে রাখে।

    ২. লিঙ্ক বা রেফারেন্স: রিটার্ন করা ফাংশনটি যখন বাইরে আসে, সে ওই নির্দিষ্ট মেমরি স্পেসের সাথে একটি "অদৃশ্য সুতো" বা Reference দিয়ে যুক্ত থাকে।

    ৩. আলাদা জগত: যখন আপনি আবার createAccount("Karim") কল করেন, জাভাস্ক্রিপ্ট একদম নতুন আরেকটি মেমরি স্পেস তৈরি করে। এটি আগের "Rahim"-এর স্পেসের সাথে কোনোভাবেই যুক্ত নয়। 
*/
