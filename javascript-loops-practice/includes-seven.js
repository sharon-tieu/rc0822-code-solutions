/* exported includesSeven */
// write a function that will take an array of values and return whether or not a number includes the number 7 by returning a boolean
// loop through an array of numbers with a for loop
//   initialization: index 0
//   condition: as long as it can loop to the end of the array. i < array.length
//   final expression: increment to the next index everytime: i++
// if the index contains the number 7, then true will be returned.
// if the index does NOT contain the number 7, then false will be returned.
// .includes( ) determines whether an array includes a certain value among its entries, returning a boolean- true or false.

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
