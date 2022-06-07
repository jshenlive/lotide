const { assert } = require('chai');
const tail = require('../tail');
// const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns [6,7,8] for [5,6,7,8]", () => {
    assert.deepEqual(tail([5, 6, 7, 8]), [6, 7, 8]);
  });
  it("returns [6,[[7],8]] for [5,6,[[7],8]]", () => {
    assert.deepEqual(tail([5, 6, [[7], 8]]), [6, [[7], 8]]);
  });


})


// // // TEST CASE
// let test = [5, 6, 7, 8];
// let testResult = tail(test);
// console.log(test);
// console.log(testResult);

// assertEqual(test.length, 4);