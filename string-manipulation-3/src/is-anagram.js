/* exported isAnagram */
// write a function that will return a boolean if the strings are anagrams of one another
// anagrams have the same letters and the same amount of it in both strings
// write a function that will keep count of every letter in the string and if each of the letters match in count then return true
// iterate through firstString and secondString separately
// iterate with for loop
//   if first[letter] === undefined , then reassign it to 1
function isAnagram(firstString, secondString) {
  var first = {};
  var second = {};
  firstString = firstString.split(' ').join('');
  secondString = secondString.split(' ').join('');
  // iterate through firstString to get the count of all the letters
  for (var i = 0; i < firstString.length; i++) {
    var letter = firstString[i];
    if (first[letter] === undefined) {
      first[letter] = 1;
    } else {
      first[letter]++;
    }
  }
  for (i = 0; i < secondString.length; i++) {
    var secondLetter = secondString[i];
    if (second[secondLetter] === undefined) {
      second[secondLetter] = 1;
    } else {
      second[secondLetter]++;
    }
  }
  for (var key in first) {
    if (second[key] !== first[key]) {
      return false;
    }
  }
  return true;
}
