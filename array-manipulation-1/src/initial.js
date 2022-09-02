/* exported initial */

// write a function that will contain all elements of the array EXCEPT for the last element of the array
// establish a variable to an empty array as this is the desired return value
// SPECIAL CASE:
//    if array is [] then return an empty array
// loop through each element of the array with a for loop
//    initalization: begin at the first element
//    condition: loop through each element of the array and STOP AT THE LAST ELEMENT OF THE ARRAY
//    final expression: increment through each element of the array
// push the elements into the variable
// return variable

function initial(array) {
  var newArray = [];
  if (array === []) {
    return [];
  }
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
