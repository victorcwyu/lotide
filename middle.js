const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴 🔴 🔴  Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
  let output = "";
  if (array.length > 0 && array.length <= 2) {
    output = [];
    return output;
  } else if (array.length % 2 === 0) {
    output = [array[(array.length / 2) - 1], array[(array.length / 2)]];
    return output;
  } else {
    output = [array[Math.round((array.length / 2) - 1)]];
    return output;
  }
};

assertArraysEqual(middle([1, 2, 7, 6, 4, 5]),[7,6]);