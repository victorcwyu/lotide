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

const words = ["ground", "control", "to", "major", "tom"];


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);



// const words = ["ground", "control", "to", "major", "tom"]; //[ 'g', 'c', 't', 'm', 't' ]
// const words = ["ground", 12]; //[ 'g', 1 ]
// const words = [222, 333]; //[ 2, 3 ]


// console.log(assertArraysEqual((map(words, word => word[0])), ['g', 'c', 't', 'm', 't']));
// console.log(assertArraysEqual((map(words, word => word[0])), ['g', 1]));
// console.log(assertArraysEqual((map(words, word => word[0])), [2, 3]);