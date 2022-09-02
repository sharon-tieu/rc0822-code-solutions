/* exported capitalize */

// write a function that will capitalize the first letter of a word in a string
// the return value will be a new string with the first letter being capitalized
// loop through the string with a for loop
//   initialization: initialize at the second letter as the first letter will already be a variable
//   condition: loop through the entire string
//   final expression: increment up through each letter
// make each letter after the first letter lowercased
// add each letter to the already capitalized letter and reassign it.
// return the word

function capitalize(word) {
  var newWord = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}
