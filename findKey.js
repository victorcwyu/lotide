const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const restos = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const findKey = function(obj,cb) {
  const objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (cb(obj[key])) {
      return key;
    };
  };
};








// console.log(findKey(restos,x => x.stars === 2));


// assertEqual((findKey(restos, x => x.stars === 2)), "noma");


//second option, possibly better
// const findKey = function (obj, cb) {
//   for (let [key, value] of Object.entries(obj)) {
//     if (cb(value)) {
//       return key;
//     }
//   }
// };