/* exported filterOutNulls */
// write a function that will filter our nulls from an array of values
// return value will be an array of the original inputs that excludes nulls
// loop through the original array with a for loop
//    initialization: begin at index 0: var i = 0;
//    condition: as long as it loops to the end of the array: i < values.length
//    final expression: increment to the next index: i++
// if values[i] does NOT equal to null then it can be pushed into the new array
// return the new array

function filterOutNulls(values) {
  var numbers = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      numbers.push(values[i]);
    }
  }
  return numbers;
}
