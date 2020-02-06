// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴 🔴 🔴  Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   } return true;
// };

// const eqObjects = function (obj1, obj2) {
//   const objKeys1 = Object.keys(obj1);
//   const objKeys2 = Object.keys(obj2);
//   if (objKeys1.length !== objKeys2.length) {
//     return false;
//   }
//   for (let key of objKeys1) {
//     if (Array.isArray(obj1[key])) {
//       return eqArrays(obj1[key], obj2[key]);
//     } else {
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 🔴 🔴  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { c: "1", d: ["2", 3] };
console.log(assertObjectsEqual(cd, dc)); // => true

