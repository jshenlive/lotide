const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4, 5]], [[2, 3], [4, 5]]), true); // => false
assertEqual(eqArrays([[2, [3]], [[4], 5]], [[2, [3]], [[4], 5]]), true); // => false
assertEqual(eqArrays([[2, [3]], [4, 5]], [[2, [3]], [[4], 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS