/* exported firstChars */
// write a function that will return the number of characters of a string based on a set length
// return value is a string so assign a new variable to an empty string
// SPECIAL CASE:
//     if string is empty, is shorter than length, return the entire string
// loop through the string with a for loop
//     initialization: start at the beginning
//     condition: let the loop iterate until the parameter length becomes greater than the length of the string.
//     final expression: increment
// assign and add empty string with the character at string[i]
// return the string
function firstChars(length, string) {
  var newString = '';
  if (length > string.length) {
    return string;
  }
  for (var i = 0; newString.length < length; i++) {
    newString += string[i];
  }
  return newString;
}
