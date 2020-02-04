const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const arrayEquate = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    assertEqual(actual[i], expected[i]);
  }
};

const tail = function(array) {
  return array.slice(1);
};

let result = tail(["Hello", "Lighthouse", "Labs"]);
arrayEquate(result, ["Lighthouse", "Labs"]);