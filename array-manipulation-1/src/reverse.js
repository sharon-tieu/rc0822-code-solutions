/* exported reverse */

// write a function that will return the elements of the array in reverse order
// assign a new variable to an empty array as an array is the return value we want.
// SPECIAL CASE:
//    if the array is an empty array, return an empty array
// increment through each element of an array with a for loop
//    initialization: begin at the last element of the array
//    condition: loop through each element as long as i is greater than or equal to 0
//    final expression: decrement through each element of the array
// push array[i] into a the new array variable
// return variable

function reverse(array) {
  var newArray = [];
  if (array === []) {
    return [];
  }
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
