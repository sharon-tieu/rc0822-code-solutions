/* exported countdown */

// write a function that counts down from the number user establishes
// return value will be an array. establish a variable to an empty array.
// use a loop to loop through an array of numbers: for loop
//     initalization: begin at number
//     condition: i must be greater than or equal to 0 when counting down
//     final expression: decrement
// push i into empty array
// return array variable

function countdown(number) {
  var countingDownArray = [];
  for (var i = number; i >= 0; i--) {
    countingDownArray.push(i);
  }
  return countingDownArray;
}
