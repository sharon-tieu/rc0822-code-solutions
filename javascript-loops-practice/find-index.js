/* exported findIndex */

// write a function that will return the index at which the paramter value lies.
// if value is not found anywhere, then return -1
// loop through the array with a for loop
//     initalization: begins at index 0
//     condition: loops through the entire array until it reaches the end
//     final expression: increment through each index
// if the value does not equal to any array at i, then return -1,
// if the value DOES equal to array[i], then return that index.

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}
