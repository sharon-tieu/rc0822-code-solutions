/* exported truncate */

// write a function that will return a given length of a string
// return value is a string so assign an empty string to a variable
// iterate through the string with a for loop
//    initialization: start at the beginning of the string
//    condition: the loop should iterate through the string
//    final expression: increment
// as long as i remains less than length, string[i] can be pushed into empty string
// add '...' to the string and return it
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i < length) {
      newString += string[i];
    }
  }
  return newString + '...';
}
