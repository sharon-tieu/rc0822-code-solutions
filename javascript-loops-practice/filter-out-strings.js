/* exported filterOutStrings */
// write a function that will make an array of numbers, filtering out string values.
// the return value will be an array of only numbers, so establish a new variable to an empty array
// loop through the original array: use a for loop
//    initialization: begin at index 0: var i = 0
//    condition: keep looping through the array until you reach the end: i < values.length
//    final expression: increment through each index: i++
// if values[i] is a number, push values[i] into the new array. to determine what values[i] is, use the typeof operator
// return the array

// note: typeof operand is expressed as a string value so: 'string', 'number', 'boolean'

function filterOutStrings(values) {
  var numbersOnlyArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      numbersOnlyArray.push(values[i]);
    }
  }
  return numbersOnlyArray;
}
