/* exported isPalindromic */
// write a function that will spell the same words forwards and backwards
// split each string by each individual letter with .split()
// return value will be an string so assign a var with an empty string
// the return value will be the same string but joined back together by each letter so use .join('')
// iterate through the string
//    initialization: start at the end of the string
//    condition: iterate until the loop hits the beginning of the string so keep iterating as long as i is greater than and equal to 0
//    final expression: decrement to go backwards
// emptrystring variable will add on from the beginning so += string[i]
// return the string if it is equal to our new empty string
// string should be joined back together at each letter
function isPalindromic(string) {
  string = string.split(' ').join('');
  var emptyString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    emptyString += string[i];
  }
  return string === emptyString;
}
