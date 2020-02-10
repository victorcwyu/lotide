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

// const flatten = function (array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       for (let j = 0; j < array[i].length; j++)
//         result.push(array[i][j]);
//     } else {
//       result.push(array[i]);
//     };
//   };
//   return result;
// };


const flatten = function(array) {
  let result = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      for (let j of i) {
        result.push(j);
      }
    } else {
      result.push(i);
    }
  }
  return result;
}


// const flatten = function (array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// };


// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// arrays = [1, 2, [3, 4], 5, [6]] // => [1, 2, 3, 4, 5, 6]
