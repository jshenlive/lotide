const flatten = function(arr) {
  let newArr = [];
  for (let item of arr){
    
    //recurse
    if (Array.isArray(item)){
      let temp = flatten(item);
      for (let item of temp){
        newArr.push(item);
      }
    } else {
      newArr.push(item);
    }
  }
  return newArr
};
// console.log(flatten([1, 2, [3, [4,4.5,[4.6,4.7,4.8]]], 5, [6]]));