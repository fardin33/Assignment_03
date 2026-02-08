//-----------------------------------------------//
// Problem-03: Text Analyzer for an AI Company //
//----------------------------------------------//

// ⚠️ Function Name Must be analyzeText()
// জিহাদ একটি AI কোম্পানিতে কাজ করে।
//  অনেক সময় ইউজাররা অনেক বড় লেখা (text) ইনপুট দেয়। এত বড় লেখা নিয়ে কাজ করতে AI-এর বেশি সময় লাগে।
// তাই জিহাদ এমন একটি ফাংশন বানাতে চায়, যা বড় টেক্সটকে একটু ছোট করে বিশ্লেষণ করতে সাহায্য করবে।
// তোমাকে একটি ফাংশন লিখতে হবে, যা—
// 1️⃣ ইনপুট হিসেবে একটি text (string) নেবে
//  2️⃣ ওই text থেকে  সবচেয়ে বড় (দীর্ঘ) শব্দটি খুঁজে বের করবে
//  3️⃣ পুরো text-এ মোট কতটি অক্ষর আছে তা গণনা করবে
//   ➡️ স্পেস (space) গণনায় ধরা হবে না
// এই তথ্যগুলো ব্যবহার করে জিহাদ একটি ছোট summary তৈরি করতে পারবে।
// 👉 তোমার কাজ হলো এই লজিক ব্যবহার করে একটি ফাংশন তৈরি করা।
// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি String নেবে এবং একটি Object রিটার্ন করবে যেখানে সবচেয়ে বড় শব্দ এবং মোট ক্যারেক্টার সংখ্যা থাকবে।

// 📥 Input:
// ইনপুট হবে একটি String (একটি পূর্ণ বাক্য/ Sentence)।

//  🚀 Output:
// Object: { longwords:String, token: Number }
// longwords → সবচেয়ে বড় শব্দের একটা string  (highest সাইজ এর ওয়ার্ড multiple হলে প্রথম টা)
// token → Sentence এর total length without স্পেস

// Challenge 📢 : যদি ইনপুটটি String না হয় (যেমন: Number, Array বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।

// Hints 💡:  split(), join() মেথড ব্যবহার করতে পারো।

// SAMPLE INPUT
// SAMPLE OUTPUT
// "I am a little honest person"
// { longwords: "little", token: 22 }
// "Hello world"
// { longwords: "Hello", token: 10 }
// "Keep coding keep shining"
// { longwords: "shining", token: 21 }
// 12345
// Invalid
// "Programming is fun"
// { longwords: "Programming", token: 16 }
// "A quick brown fox"
// { longwords: "quick", token: 14 }
// " "
// Invalid

//---------------------------//
// Problem - 05 : Solution //
//--------------------------//

function analyzeText(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  const words = str.split(" ");

  let longwords = "";

  for (let word of words) {
    if (word.length > longwords.length) {
      longwords = word;
    }
  }

  if (longwords === "") {
    return "Invalid";
  }

  const token = words.join("").length;

  return { longwords, token };
}

const test1 = analyzeText("I am a little honest person");
const test2 = analyzeText("Hello world");
const test3 = analyzeText("Keep coding keep shining");
const test4 = analyzeText(12345);
const test5 = analyzeText("Programming is fun");
const test6 = analyzeText("A quick brown fox");

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
