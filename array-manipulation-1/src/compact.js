/* exported compact */

// write a function that will omit false, null, NaN, 0, undefined and an empty string
// assign a variable to an empty array because the return value is in an array
// loop through each element of the array using a for loop
//   initialization: start at the first element of the array
//   condition: loop through each element of the array until it reaches the end
//   final expression: increment through each element of the array
// check if array[i] is equal to false, null, NaN, 0, undefined or an empty string
//   if array[i] is NOT equal to any of the conditions in the line above, then push that element into the new array.

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

