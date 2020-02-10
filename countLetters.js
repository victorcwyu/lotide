const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  const noSpace = str.split(" ").join("");
  const result = {};
  for (const item of noSpace) {
    if (item in result) {
      result[item] += 1;
    } else {
        result[item] = 1;
      }
    }
  return result;
};

// console.log(countLetters("lighthouse in the house"));