/* exported isAnagram */
// write a function that will return a boolean if the strings are anagrams of one another
// if the length of firstString is not the same as the length of the secondString, then return false
// for both strings, split the string by each letter of the word, sort it alphabetically, then join them back again
//    this is used with .split('') to split each letter
//    sort each letter alphabetically with .sort()
//    join the letters back together with .join('')
//        .split('').sort().join('')
// return firstLetters === secondLetters
//    this will return a boolean
function isAnagram(firstString, secondString) {
  // debugger;
  if (firstString.length !== secondString.length) {
    return false;
  }
  var firstLetters = firstString.split('').sort().join('');
  var secondLetters = secondString.split('').sort().join('');
  return firstLetters === secondLetters;
}

// function isAnagram(firstString, secondString) {
//   // debugger;
//   if (firstString.length !== secondString.length) {
//     return false;
//   }
//   var firstLetters = firstString.split('').sort().join('');
//   var secondLetters = secondString.split('').sort().join('');
//   for (var i = 0; i < firstLetters.length; i++) {
//     for (var k = 0; k < secondLetters.length; k++) {
//       if (firstLetters[i] === secondLetters[k]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
