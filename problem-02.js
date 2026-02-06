//-------------------------------------------//
// Problem-02: OTP Validation for Zapshift //
//-------------------------------------------//

// ⚠️ Function Name Must be validOtp()

// Zapshift কোম্পানি তাদের প্রোডাক্ট ডেলিভারি করার সময় OTP পাঠায়। কিন্তু কিছু লোক Fraud OTP ব্যবহার করে প্রোডাক্ট রিসিভ করে ফেলে। তাই তোমার কাজ হলো একটি ফাংশন বানানো, যা OTP সঠিক কিনা চেক করবে।
// ফাংশনটি একটি Boolean (true/false) রিটার্ন করবে। যদি ইনপুটটি সঠিক ফরম্যাটে না থাকে তবে Invalid  রিটার্ন করবে।

// Input :  ইনপুট হবে একটি string.

// 🚀 Output:
// Boolean true বা false রিটার্ন করবে

// 🚩 Challenge:
// যদি ইনপুটটি String না হয় (যেমন: Number, Array বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।

// 💡 Validation Rules:
// ১. OTP অবশ্যই ৮ অক্ষরের (length) হতে হবে।
// ২. OTP অবশ্যই "ph-" দিয়ে শুরু হতে হবে।

// Hints 💡: startsWith() মেথড ব্যবহার করতে পারো।

// SAMPLE INPUT
// SAMPLE OUTPUT
// "ph-10985"
// true
// "ph-1234"
// false
// "abc-12345"
// false
// ["ph-10985"]
// Invalid
// 12345678
// Invalid

//---------------------------//
// Problem - 02 : Solution //
//--------------------------//

function validOtp(otp) {
  // Check Input Value Type is string or number/array/object or something :
  if (typeof otp !== "string") {
    return "Invalid";
  } else if (otp.length !== 8) {
    return false;
  } else if (!otp.startsWith("ph-")) {
    return false;
  }
  return true;
}

const inputValue = validOtp("ph-12345");
console.log(inputValue);

//-------- Problem 02 Solved! -------//
