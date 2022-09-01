/* exported isLowerCased */

// write a function that will determine if each letter of a string is lowercased
// return value is a boolean
//   return true if all letters of the string is lowercased
//   return false if there is a letter that is uppercased
// loop through each letter of a string by using a for loop
//   initialization: first letter- or index 0
//   condition: to loop through each letter of the string, stopping at the end of the string
//   final expression: increment one by one through each letter of the string
// if word[i] is NOT equal to a lowercased letter, then return false
// otherwise, return true

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
