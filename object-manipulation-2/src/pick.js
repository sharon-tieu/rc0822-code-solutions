/* exported pick */
// Write a function that will loop through the parameter keys and find the matching properties from the source object then return the matching key/value pairs in a new object
// assign a new variable to an empty object as the return value will be an object
// loop through keys with a for loop
//    initialization: begin at the beginning of keys
//    condition: iterate to the end of keys.
//    final expression: increment
// //
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    var property = keys[i];
    var value = source[property];
    // console.log('keys[i]:', keys[i]);
    // console.log('source[property]:', source[property]);
    if (value !== undefined) {
      newObject[property] = value;
    }
  }
  return newObject;
}
