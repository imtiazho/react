/*
    || The Prototype Chain
    জাভাস্ক্রিপ্টে প্রতিটি অবজেক্টের একটি গোপন প্রোপার্টি থাকে যাকে বলা হয় [[Prototype]] (ডেভেলপাররা একে __proto__ হিসেবে দেখেন)। আপনি যখন কোনো অবজেক্টে কোনো প্রোপার্টি খুঁজছেন কিন্তু সেটি সেখানে নেই, তখন জাভাস্ক্রিপ্ট অটোমেটিক তার প্রোটোটাইপের ভেতর সেটি খুঁজতে থাকে। এভাবে খুঁজতে খুঁজতে সে একদম টপ লেভেলে (Object.prototype) চলে যায়। একেই বলে Prototype Chain।
*/

// প্যারেন্ট অবজেক্ট
const human = {
    isLiving : true,
    eat : function(){
        console.log("Eating...");
    }
};

// চাইল্ড অবজেক্ট
const developer = {
    writesCode : true,
    language : "JavaScript"
};

// ইনহেরিটেন্স ঘটানো (developer এখন human এর প্রোটোটাইপ ব্যবহার করবে)
Object.setPrototypeOf(developer, human);

console.log(developer.language); // Output: JavaScript (নিজস্ব প্রোপার্টি)
console.log(developer.isLiving); // Output: true (উত্তরাধিকার সূত্রে পাওয়া)
developer.eat();                 // Output: Eating...

/* যখন আপনি developer.eat() কল করলেন, জাভাস্ক্রিপ্ট প্রথমে developer অবজেক্টের ভেতর eat ফাংশনটি খুঁজলো। সেখানে না পেয়ে সে তার প্রোটোটাইপ অর্থাৎ human অবজেক্টে গেল এবং সেখান থেকে এটি খুঁজে বের করে রান করলো। */