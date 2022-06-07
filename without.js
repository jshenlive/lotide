// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

const without = function (arr1, keys) {
  let newArr = arr1.filter((item) => !keys.includes(item));
  return newArr;
};

module.exports = without

// Tests
// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

// const words = ["hello", "world", "lighthouse"];
// const newWords = without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// assertArraysEqual(words, newWords);
// assertArraysEqual(["hello","world"], newWords);
