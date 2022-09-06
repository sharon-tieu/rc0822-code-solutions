/* exported take */
// write a function that will take the number of count given from the array
// assign a new variable to an empty array because the return value is an array
// loop through an array with a for loop
//    initalization: start at the beginning of the array
//    condition: iterate until the loop reaches the end of the array
//    final expression: increment one by one
// push the elements of the original array to the new array until i becomes greater than count
// return new array
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
