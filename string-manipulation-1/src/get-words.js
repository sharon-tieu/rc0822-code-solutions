/* exported getWords */

// write a function that separtes a string by each of its spaces
// special case: if there are no words in the string, then return and empty array
// return value is an array of string(s) of individual words

function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}
