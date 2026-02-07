//-----------------------------------------------//
// Problem - 01 : New Price for Eid Sale
//-----------------------------------------------//

function newPrice(currentPrice, discount) {
  // Step - 1 : Input Value Check : //
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  } else if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  //---- Step - 2 : Get Final Discount Amount ----//
  let discountAmount = (currentPrice * discount) / 100;
  let number = currentPrice - discountAmount;

  // Result 3 decimal Porjontto Output e Dekhabe :
  return number.toFixed(3);
}

//---------------Problem - 01 End-----------------//

//-----------------------------------------------//
// Problem - 02 : OTP Validation for Zapshift
//-----------------------------------------------//
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
//---------------Problem - 02 End-----------------//

//-----------------------------------------------//
// Problem - 03 : BCS Final Score Calculator
//-----------------------------------------------//
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
//---------------Problem - 03 End-----------------//

//------------------------------------------------//
// Problem - 04 : Upcoming Gono Vote
//------------------------------------------------//

//---------------Problem - 04 End-----------------//

//------------------------------------------------//
// Problem - 05 : Text Analyzer for an AI Company
//------------------------------------------------//

//---------------Problem - 05 End-----------------//
