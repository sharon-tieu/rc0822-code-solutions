/* exported numVowels */
// write a function that will return the number of vowel characters found in a string
// return value is a number so assign zero to a new variable
// convert all characters in the string to lowercase
// loop through the string with a for loop
// if any of those letters contain a vowel at i, then add 1 to the number variable (increment)
// continue to do this until the end of the loop then return the number
function numVowels(string) {
  var totalNumber = 0;
  for (var i = 0; i < string.length; i++) {
    if ('aeiouAEIOU'.includes(string[i])) {
      totalNumber++;
    }
  }
  return totalNumber;
}
