/* exported takeRight */
// write a function that will return the number of count from an array starting from the end of the array
// assign a new variable to an empty array because we want to return an array
// special case:
//    if count is larger than the length of the array, return the array
// loop through the entire array with a for loop. go backwards
//    initialization: start at the end of the array (var i = array.length - 1)
//    condition: keep iterating backwards when i is equals to or greater than 0 (i >= 0)
//    final expression: going backwards so decrement (i--)
// once the length of the new array is equals to given count, break out of the function,
// otherwise, keep putting array[i] into the new array.
// special case:
//    use .unshift() so then the most recent element looping through the array is being put first
// return new array
function takeRight(array, count) {
  var newArray = [];
  if (array.length < count) {
    return array;
  }
  for (var i = array.length - 1; i >= 0; i--) {
    if (newArray.length === count) {
      break;
    } else {
      newArray.unshift(array[i]);
    }
  }
  return newArray;
}
