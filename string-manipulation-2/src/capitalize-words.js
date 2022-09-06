/* exported capitalizeWords */
// write a function that will capitalize every word in the string
// split the original string by its spaces to create an array of strings of each word

// write a for loop to access each character of the element (the words)
// assign the word[i] to a new variable as this will represent an individual letter
// word[i] will be reassign to:
//    capitalization of the first letter at index 0 + from second letter and after, it will be lowercased
// join the two words together by space and return it
function capitalizeWords(string) {
  var splitWords = string.split(' ');
  for (var i = 0; i < splitWords.length; i++) {
    var letter = splitWords[i];
    splitWords[i] = letter[0].toUpperCase() + letter.slice(1).toLowerCase();
  }
  return splitWords.join(' ');
}
