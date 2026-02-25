const jsonData = '{"name": "Rahim", "age": 25}'; // সঠিক ডাটা
const corruptedData = '{"name": "Karim", age: 25}'; // ভুল ডাটা (age-এর পাশে কোট নেই)

function parseUserData(data) {
  try {
    console.log("চেষ্টা করছি ডাটা পার্স করার...");
    const user = JSON.parse(data); 
    console.log("সফল! ইউজারের নাম:", user.name);
  } catch (error) {
    console.log("দুঃখিত, ডাটাটি ভুল ছিল!");
    console.log("এরর মেসেজ:", error.message);
  } finally {
    console.log("অপারেশন শেষ।");
  }
}

parseUserData(corruptedData);