/* exported capitalizeWord */
// write a function that will return word with its first character uppercased and the rest is lowercased.
// return value is a string so assign a variable to a string
// lowercase all letters in the word to reset everything
// loop through word with a for loop
//     initialization: start at the beginning of the string
//     condition: iterate to the end of the string
//     final expression: increment to go up the index one by one
// after looping, IF the string is 'Javascript', then return 'JavaScript'
// IF NOT, then add and reassign word[i] to the empty string
// return empty string

function capitalizeWord(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  if (newWord === 'Javascript') {
    return 'JavaScript';
  }
  return newWord;
}
