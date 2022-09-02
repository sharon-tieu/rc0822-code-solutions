/* exported sumAll */

// write a function that will add up all the numbers in an array
// return value will be a number data type
// use a for loop to loop through an array of numbers
//      initialization: begin at the first number at i = 0
//      condition: must stop at the end of the array: i < numbers.length
//      final expression: increment, moving to the next number: i++
// add number[i] to the varaible and reassign it with the += operator
// return the variable number

function sumAll(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
