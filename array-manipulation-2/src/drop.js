/* exported drop */
// write a function that will only return the elements of an array after the number of count that is given.
// assign a variable to an empty array as an array will be the return value.
// SPECIAL CASE:
//    if the count is longer than the length of the array, then just return the array
// loop through the array with a for loop
//    initalization: begin at the start of the array
//    condition: keep iterating until the end of the array is reached
//    final expression: increment
// if i is equal to or greater than count, then push the element
// push element into new array
// return new array
function drop(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (i >= count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
