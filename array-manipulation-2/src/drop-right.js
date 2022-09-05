/* exported dropRight */
// write a function that will return the elements of the array that is after the given counts from the end of the array
// assign a new variable to an empty array
// special case:
//    if the count is larger than the length of the array, then return the original array
// loop through the array with a for loop
//    initialization: begin at the start of the array
//    condition: the loop should continue to iterate as long as i is less than the difference between the length of the array and count
//    final expression: increment
// push the element of the array into the new array
// return array
function dropRight(array, count) {
  var newArray = [];
  if (array.length < count) {
    return array;
  }
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
