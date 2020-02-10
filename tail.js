// A SECOND SOLUTION, INVOLVING EXTRA VARIABLE AND A FOR LOOP
// const arrayEquate = function (actual, expected) {
//   for (let i = 0; i < actual.length; i++) {
//     assertEqual(actual[i], expected[i]);
//   }
// };

const tail = function (array) {
  return array.slice(1);
};

module.exports = tail;