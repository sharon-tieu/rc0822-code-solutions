/* exported chunk */
// write a function that will take the number of a given count of the original array and set it to a new array as a subarray and then returned as a new array all together
// return value is a parent array with child arrays
//    assign a new variable to an empty array for the parent array
//    assign a new variable to an empty array for the child array
// special case:
//    if the length of the array is less than the size, then return the array
// use a for loop to iterate through the entire loop
//    initialization: begin at the start of the array
//    condition: iterate to the end of the array
//    final expression: increment
// if the length of the child array reaches to be equal to the same number as size, then push the child array into the parent array
// reset the child array to make another
// keep pushing elements into the child array to make children arrays
// push the child array to parent array if there is a remainder element
// return the parent array
function chunk(array, size) {
  var parentArray = [];
  var childArray = [];
  if (array.length < size) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (childArray.length === size) {
      parentArray.push(childArray);
      childArray = [];
    }
    childArray.push(array[i]);
  }
  parentArray.push(childArray);
  return parentArray;
}
