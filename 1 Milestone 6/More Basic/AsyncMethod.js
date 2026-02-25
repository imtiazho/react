const loadData = () => {
  try {
    console.log("First");
    console.log("Second");

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

    console.log("Third");
    console.log("Fourth");
  } catch {
    console.log("Error");
  }
};

loadData();

/* Output:
First
Second
Third
Fourth
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false } */

/* লাইন বাই লাইন কী ঘটছে? (Example Breakdown)
১. First & Second: এগুলো সাধারণ সিঙ্ক্রোনাস কোড, তাই সাথে সাথে প্রিন্ট হয়েছে।
২. fetch: এটি একটি Asynchronous operation। জাভাস্ক্রিপ্ট একে ব্যাকগ্রাউন্ডে পাঠিয়ে দিয়েছে "ডাটা নিয়ে আসো" বলে। কিন্তু সে ডাটা আসার জন্য বসে থাকেনি।
৩. Third & Fourth: জাভাস্ক্রিপ্ট সাথে সাথেই পরের লাইনগুলোতে চলে গেছে এবং এগুলো প্রিন্ট করেছে।
৪. JSON Object: যখন নেটওয়ার্ক থেকে ডাটা চলে এসেছে, তখন .then() ব্লকের ভেতর থাকা console.log(json) কল হয়েছে। ততক্ষণে আপনার পুরো ফাংশনটি পড়া শেষ হয়ে গেছে। */
