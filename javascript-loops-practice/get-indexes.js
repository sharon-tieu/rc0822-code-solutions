/* exported getIndexes */
// write a function that will return an array of indexes
// return value will be an array so establish a variable for an empty array
// loop through an array of strings using a for loop
//     initalization: begin at index 0
//     condition: only go through the array so i < array.length
//     final expression: increment: i++
// return i

function getIndexes(array) {
  var indexArray = [];
  for (var i = 0; i < array.length; i++) {
    indexArray.push(i);
  }
  return indexArray;
}
