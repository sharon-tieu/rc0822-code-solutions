/* exported tail */

// write a function that will return all elements of an array excluding the first element
// establish an empty array to a new variable as our return value will be an array
// special case:
//    if array is an empty array, return an empty array
// loop through the array using a for loop
//    initialization: begin at the second element: var i = 1
//    condition: loop through the entire array and stop at the end
//    final expression: increment through each element of the array
// push each element into the new array
// return the array

function tail(array) {
  var newArray = [];
  if (array === []) {
    return [];
  }
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
