/* exported isVowel */

// write a function that will determine whether or not a character in a string is a vowel
//    vowels are AEIOU or aeiou
// return value will be a boolean
//    return true if char is a vowel
//    return false if char is NOT a vowel

function isVowel(character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
    return true;
  }
  return false;
}
