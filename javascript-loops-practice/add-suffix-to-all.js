/* exported addSuffixToAll */

// write a function that will add a suffix string to each word
// return value will be an array of strings. establish an empty array with a new variable
// loop through words- an array of strings using a for loop
//    initialization: begin at index 0: var i = 0;
//    condition: only loop through to the end of the array of strings: i < words.length
//    final expression: increment through the array: i++
// add suffix to the end of the words
// push the new words to the array variable
// return the array

function addSuffixToAll(words, suffix) {
  var newWords = [];
  for (var i = 0; i < words.length; i++) {
    newWords.push(words[i] + suffix);
  }
  return newWords;
}
