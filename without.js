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

const without = function(source,itemsToRemove) {
  const resort = source.filter((source) => itemsToRemove.includes(source));
  return resort;
};

// console.log(without([1, 2, 3], [3, 4, 5]));