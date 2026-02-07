//-------------------------------------------//
// Problem-03: BCS Final Score Calculator //
//-------------------------------------------//

// ⚠️ Function Name Must be finalScore()
// BCS পরীক্ষার OMR sheet ডিজিটালভাবে চেক করা হয়। এটা right, wrong, missed সব কটি গণনা করতে পারে, কিন্তু ফাইনাল স্কোর বের করতে পারে না। তোমার কাজ হলো একটি ফাংশন বানানো যা Object নেবে এবং ফাইনাল স্কোর ক্যালকুলেট করবে।
// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Object নেবে এবং নিচের শর্ত ও নিয়ম অনুযায়ী ফলাফল প্রদান করবে।
// 📥 Input:
// একটি Object যার প্রপার্টিগুলো হবে: { right: Number, wrong: Number, skip: Number }

// Output :  ফাইনাল স্কোর হবে নাম্বার এবং রাউন্ডেড। (Number, Rounded)

// 🎯 BCS পরীক্ষার নিয়ম:
// মোট প্রশ্ন সংখ্যা = ১০০টি।
// সুতরাং, ইনপুটে থাকা right + wrong + skip এর যোগফল অবশ্যই ১০০ হতে হবে।

// 🚩 Challenge:
// যদি right + wrong + skip এর যোগফল ১০০ না হয়, তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।

// 💡 Scoring Rules:
// প্রতিটি সঠিক উত্তরের জন্য: +১ পয়েন্ট।
// প্রতিটি ভুল উত্তরের জন্য: -০.৫ পয়েন্ট (০.৫ নম্বর কাটা যাবে)।
// বাদ দেওয়া (skip) প্রশ্নের জন্য: ০ পয়েন্ট।

// 💡Hints: Rounded ভ্যালু বের করার জন্য  Math.round() function ব্যবহার করতে পারো।

// SAMPLE INPUT
// SAMPLE OUTPUT
// { right: 67, wrong: 23, skip: 10 }
// 56
// { right: 80, wrong: 25, skip: 0 }
// Invalid
// { right: 50, wrong: 10, skip: 40 }
// 45
// { right: 30, wrong: 30, skip: 40 }
// 15
// "!@#"
// Invalid
// ["Raj"]
// Invalid

//---------------------------//
// Problem - 02 : Solution //
//--------------------------//

function finalScore(omr) {
  if (typeof omr !== "object" || Array.isArray(omr) || omr === null) {
    return "Invalid";
  }
  const { right = 0, wrong = 0, skip = 0 } = omr;
  const sum = right + wrong + skip;

  if (sum !== 100) {
    return "Invalid";
  }

  const score = right * 1 + wrong * -0.5;
  return Math.round(score);
}

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
console.log(finalScore("!@#"));
console.log(finalScore(["fardin"]));
