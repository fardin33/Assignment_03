//-----------------------------------------------//
// Problem - 01 : New Price for Eid Sale
//-----------------------------------------------//
function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  } else if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  let discountAmount = (currentPrice * discount) / 100;
  let number = currentPrice - discountAmount;

  return number.toFixed(3);
}

//-----------------------------------------------//
// Problem - 02 : OTP Validation for Zapshift
//-----------------------------------------------//
function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  } else if (otp.length !== 8) {
    return false;
  } else if (!otp.startsWith("ph-")) {
    return false;
  }
  return true;
}

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

//------------------------------------------------//
// Problem - 04 : Upcoming Gono Vote
//------------------------------------------------//
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

//------------------------------------------------//
// Problem - 05 : Text Analyzer for an AI Company
//------------------------------------------------//
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
