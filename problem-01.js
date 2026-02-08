//--------------------------------------//
// Problem-02: New Price for Eid Sale //
//--------------------------------------//

// ⚠️ Function Name Must be newPrice()
// আসন্ন ইদ উপলক্ষে তুমি তোমার দোকানের প্রোডাক্টে ডিসকাউণ্ট দিতে চাচ্ছ। কিন্তু প্রতিটা প্রোডাক্টের নতুন দাম আলাদা আলাদা হিসাব করতে গেলে ঝামেলা। তাই তুমি একটা ফাংশন বানাতে চাও, যা মূল দাম এবং ডিসকাউন্ট% নিলে নতুন দাম বের করে দেবে।

// Input :
// প্রথম ইনপুট:  একটি সংখ্যা যা মূল দাম। currentPrice  হবে Number
// দ্বিতীয় ইনপুট: একটি সংখ্যা যা ডিসকাউন্ট। discount হবে Number in  %

// Output :   ফাংশনটি ডিসকাউন্ট করে নতুন দাম return করবে।  Output দশমিক সংখ্যা ও হতে পারে।  দশমিক এর পর ৩ ঘর  দেখাতে হবে।

// Challenge 📢 : যদি কোনো ইনপুট সংখ্যা না হয় , অথবা discount এর পরিমান যদি 0  এর থেকে কম এবং 100 এর চেয়ে বেশি হয় তাহলে  Invalid স্ট্রিং  রিটার্ন করবে।

// Hints 💡:  যদি একটি প্রোডাক্টের currentPrice = 1500 টাকা এবং discount = 20% হয়, তাহলে:
// ডিসকাউন্টের পরিমাণ বের করো, ডিসকাউন্ট পরিমাণ = (1500 * 20) / 100 = 300 টাকা

// SAMPLE INPUT
// SAMPLE OUTPUT
// 1500, 20
// 1200.000
// 2000, 15
// 1700.000
// 1200, 7
// 1116.000
// "1000", 10
// Invalid
// 2000, 17.17
// 1656.600
// 500, "5"
// Invalid

//---------------------------//
// Problem - 01 : Solution //
//--------------------------//

function newPrice(currentPrice, discount) {
  // Step - 1 : Input Value Check : //
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  } else if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  // Step - 2 : Get Final Discount Amount //
  let discountAmount = (currentPrice * discount) / 100;
  let number = currentPrice - discountAmount;

  // Result 3 decimal Porjontto Output e Dekhabe :
  return number.toFixed(3);
}

const getDiscount1 = newPrice(1500, 20);
const getDiscount2 = newPrice(2000, 15);
const getDiscount3 = newPrice(1200, 7);
const getDiscount4 = newPrice("100", 10);
const getDiscount5 = newPrice(2000, 17.17);
const getDiscount6 = newPrice(500, "5");
console.log(getDiscount1);
console.log(getDiscount2);
console.log(getDiscount3);
console.log(getDiscount4);
console.log(getDiscount5);
console.log(getDiscount6);

//-------- Problem 01 Solved! -------//
