/* exported oddOrEven */

// write a function that will return the string 'odd' or 'even'
// the return value will be an array of strings that says either 'odd' or 'even'
// loop through an array of numbers with a for loop
//    initialization: begin at index 0, the first number in the array
//    condition: keep looping until you reached the end
//    final expression: to go through each number of the array, increment
// determine if the number at i is divisible by 2 by using the modulus operand
// if it is divisible by 2, then push the string 'even' into the array
// if it is NOT divisible by 2, then push the string 'odd' into the array
// return the array of strings

function oddOrEven(numbers) {
  var strings = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      strings.push('even');
    } else {
      strings.push('odd');
    }
  }
  return strings;
}
