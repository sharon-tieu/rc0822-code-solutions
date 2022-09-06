/* exported lastChars */
// write a function that will return the number of characters from a string starting from the last character
// return value is an empty string so assign a variable to it
// SPECIAL CASE:
//    if the length is longer than the length of the string, then return the entire string
// use a for loop to iterate through each character of the string
//    initialization: begin at the end of the string
//    condition: iterate until the length of the string variable becomes LESS than the parameter length
//    final expression: decrement to go backwards in the string
// add string[i] to newString and reassign newString
// return the string
function lastChars(length, string) {
  var newString = '';
  if (length > string.length) {
    return string;
  }
  for (var i = string.length - 1; newString.length < length; i--) {
    newString = string[i] + newString;
  }
  return newString;
}
