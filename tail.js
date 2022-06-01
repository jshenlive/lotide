// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr;
  return newArr.slice(1);
};

// // TEST CASE
// let test = [5,6,7,8];
// let testResult = tail(test);
// console.log(test);
// console.log(testResult);

// assertEqual(test.length, 4);

