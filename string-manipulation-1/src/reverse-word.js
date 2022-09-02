/* exported reverseWord */

// write a function that will reverse the letters of a string
// return value will be a string
// loop through each letter of the string by using a for loop
//    initialization: begin at the last index of the string
//    condition: loop through the entire string and stop at the end
//    final expression: decrement through the string
// add and reassign the string variable
// return the string variable

// word = 'foo'

// reversal = ''
// reversal = 'o'
// reversal = 'oo'
// reversal = 'oof'

// i = 0
// word[0] = 'f'
// i = 1
// word[1] = 'o'
// i = 2
// word[2] = 'o'

// reversal = word[i] + reversal
//     reversal = word[0] + reversal
//     reversal = 'f' + ''
//     reversal = 'f'

// reversal = word[1] + reversal
//     reversal = 'o' + 'f'
//     reversal = 'of'

// reversal = word[2] + reversal
//     reversal = 'o' + 'of'
//     reversal = 'oof'

function reverseWord(word) {
  var reversal = '';
  for (var i = 0; i < word.length; i++) {
    reversal = word[i] + reversal;
  }
  return reversal;
}
