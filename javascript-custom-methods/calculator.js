/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return Math.pow(x, 2);
  },
  sumAll: function (numbers) {
    // return the sum of an array of numbers
    // assign 0 to a variable because the return value is a number
    // iterate through the array of numbers
    // add and reassign each numbers at i to variable that was assigned to 0
    // return the variable
    var sumAllNumbers = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumAllNumbers += numbers[i];
    }
    return sumAllNumbers;
  },
  getAverage: function (numbers) {
    return calculator.sumAll(numbers) / numbers.length;
  }
};
