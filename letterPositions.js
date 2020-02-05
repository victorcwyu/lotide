const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴 🔴 🔴  Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function (str) {
  console.log(str)

  const result = {};
  
  for (let i = 0; i < str.length; i ++) {
    if (str[i] in result) {
      result[str[i]].push(i);
    } else {
      result[str[i]] = [i];
    }
  }
  delete result[" "];
  return result;
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);
