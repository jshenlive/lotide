// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKey = function (lib, callback) {
  for (const element in lib) {
    if (callback(lib[element])) {
      return element;
    }
  }
};

module.exports = findKey;

// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 2
//   ),
//   "noma"
// ); // => "noma"

// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 3
//   ),
//   "Akaleri"
// ); // => "noma"
