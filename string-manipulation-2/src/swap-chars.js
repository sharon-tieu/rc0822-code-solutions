/* exported swapChars */
// write a function that will take two parameters and swap them in a given string
// split the string by each individual characters and assign it a new variable.

function swapChars(firstIndex, secondIndex, string) {
  var newString = string.split('');
  var charOne = newString[firstIndex];
  var charTwo = newString[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString[i] = charTwo;
    } else if (i === secondIndex) {
      newString[i] = charOne;
    }
  }
  // console.log('newString:', newString);
  return newString.join('');
}
