/* exported reverseWords */
// want to reverse each word in the sentence on its own so separate each word by the spaces
// iterate through array of the words
//    pass the word into the reverse function so then only the words get reversed
// push those words into the empty array
// then join the words together to have one string and return
function reverseWords(string) {
  string = string.split(' ');
  var reversedArray = [];
  for (var i = 0; i < string.length; i++) {
    // var reverse = '';
    // reverse = string[i] + reverse;
    var reversedWord = reversed(string[i]);
    reversedArray.push(reversedWord);
  }
  // console.log(reversedArray);
  return reversedArray.join(' ');
}

// reversing the letters of each word
function reversed(word) {
  var reverse = '';
  for (var i = 0; i < word.length; i++) {
    reverse = word[i] + reverse;
  }
  return reverse;
}
