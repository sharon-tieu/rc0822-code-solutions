/* exported includes */
// write a function that will return a boolean if value is included in the original array
// special case:
//     cannot use .includes()
// loop through the array using a for loop
//     initialization: begin at the beginning of the array
//     condition: keep iterating through the array until it the end of the array is reached
//     final expression: increment one by one
// if the value matches with (or equals to) element[i], then return a boolean
// return true if the value matches (or equals to) element[i]
// otherwise, return false
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
