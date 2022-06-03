const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

//Our map function will take in two arguments:
// 1. An array to map
// 2. A callback function

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, (word) => word[0]);
// console.log(results1);

assertArraysEqual(
  map(["123", "", "321"], (num) => num + 1),
  ["1231", "1", "3211"]
);

assertArraysEqual(
  map(["a", "bb", "ccc"], (letter) => letter.length),
  [1, 2, 3]
);

assertArraysEqual(
  map([1, 2, 3], (num) => {
    if (num % 2 === 0) return num + 1;
    return num;
  }),
  [1, 3, 3]
);
