//-------------------------------------------//
// Problem-03: Upcoming Gono Vote //
//-------------------------------------------//

// ⚠️ Function Name Must be gonoVote()
// আসন্ন গণভোটের ফলাফল বিশ্লেষণের জন্য তোমাকে একটি দায়িত্ব দেওয়া হয়েছে। ভোটের ডাটাগুলো একটি Array-তে জমা করা হয়েছে যেখানে ভোটারদের মতামত "ha" অথবা "na" হিসেবে আছে। তোমার কাজ হলো একটি ফাংশন তৈরি করা যা ভোট গণনা করবে এবং দেখবে "ha" ভোট সংখ্যাগরিষ্ঠ (Majority) কি না।
// ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Array নেবে এবং ভোটের সংখ্যার ওপর ভিত্তি করে একটি Boolean (true/false) অথবা equal (string) রিটার্ন করবে।
// 📥 Input:
// ইনপুট হবে একটি Array। যেমন: ["ha", "na", "ha"]

// 🚀 Output:
// যদি "ha" সংখ্যা "na" এর বেশি → true
// যদি "ha" সংখ্যা "na" এর সমান → “equal”
// অন্যথায় → false

// 🚩 Challenge:
// যদি ইনপুটটি একটি Array না হয় (যেমন: String, Number বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।

// SAMPLE INPUT
// SAMPLE OUTPUT
// ["ha", "na", "ha", "na"]
// equal
// ["ha", "na", "na"]
// false
// ["ha", "ha", "ha", "na"]
// true
// "ha, na"
// Invalid
// 12345
// Invalid

//---------------------------//
// Problem - 04 : Solution //
//--------------------------//

function gonoVote(array) {
  if (!Array.isArray(array)) {
    return "Invalid";
  }

  let haVote = 0;
  let naVote = 0;

  for (let vote of array) {
    if (vote === "ha") {
      haVote++;
    } else if (vote === "na") {
      naVote++;
    }
  }

  if (haVote > naVote) {
    return true;
  } else if (haVote === naVote) {
    return "equal";
  } else {
    return false;
  }
}

const testArray1 = gonoVote(["ha", "na", "ha", "na"]);
const testArray2 = gonoVote(["ha", "na", "na"]);
const testArray3 = gonoVote(["ha", "ha", "ha", "na"]);
const testArray4 = gonoVote(["ha na"]);
const testArray5 = gonoVote([12345]);

console.log(testArray1);
console.log(testArray2);
console.log(testArray3);
console.log(testArray4);
console.log(testArray5);
