/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

console.log('getNumbersToTen():', getNumbersToTen());
console.log('getNumbersToTwenty():', getNumbersToTwenty());
console.log("repeatWord('javascript', 30):", repeatWord('javascript', 30));
console.log("logEachCharacter('javascript):", logEachCharacter('javascript'));
console.log('doubleAll([5, 7, 9, 11])');
console.log('doubleAll([5, 7, 9, 11]):', doubleAll([5, 7, 9, 11]));

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

// numbers is an array of numbers [5, 7, 8, 9]
function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

var book =
  {
    isbn: '1234',
    title: 'harry potter',
    author: 'J.K. Rowling'
  };
console.log('book object:', book);

function getKeys(object) {
  var keys = [];
  for (var allKeys in object) {
    keys.push(allKeys);
  }
  return keys;
}
console.log(getKeys(book));

function getValues(object) {
  var values = [];
  for (var allValues in object) {
    values.push(object[allValues]);
  }
  return values;
}
console.log(getValues(book));
