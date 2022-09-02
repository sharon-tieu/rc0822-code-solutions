/* exported isUpperCased */

// write a function that will check if ALL characters in a string is capitalized
// the return value is a boolean
// loop through each letter of the string to see if it contains a capital letter: for loop
//    initialization: begin at the start: index 0
//    condition: loop through the entire string and stop at the end
//    final expression: increment through each letter
// if word[i] is NOT equal to a capital letter, then return false
// otherwise, return true;

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
