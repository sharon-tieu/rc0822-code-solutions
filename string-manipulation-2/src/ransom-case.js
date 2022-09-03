/* exported ransomCase */
// write a function that will take a string and capitalize every other character in the string
// return value is a string so assign a variable to an empty string
// loop through each character of the string with a for loop
//    initialization: begin at the first character
//    condition: iterate until the end of the string is reached
//    final expression: increment to move up the string one character at a time.
// if i is EVEN, lower case the character (i = 0, 2, 4, 6, ...)
// if i is ODD number, upper case the character (i = 1, 3, 5, 7, ...)
// reassign and add i to the string
// return string
function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
}
