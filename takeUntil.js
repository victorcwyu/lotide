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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function (array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    };
  };
  return result;
};

// console.log(takeUntil(data1,x => x < 0));


const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

(assertArraysEqual((takeUntil(data1, x => x < 0)), [1, 2, 5, 7, 2]));




// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);