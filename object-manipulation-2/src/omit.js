/* exported omit */
// write a function that will create an object that will have the properties of source that is NOT listed in keys.
// assign an empty object to a variable
// loop through the keys with a for loop
//   initialization: begin at the start of keys
//   condition: iterate until the end of the keys array is reached
//   final expression: increment
// determine if keys[i] does NOT match with the properties found in source

// set a new variable to keys[i]
// if it DOES NOT match with properties in source, then push the property and value of that into the new object
// return the new object
function omit(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    var keysElement = keys[i];
    var sourceValues = source[keysElement];
    // console.log('keys[i]:', keys[i]);
    // console.log('sourceValues:', sourceValues);
    // console.log('keysElement in source:', keysElement in source);
    if (keysElement in source === false) {
      newObject[keysElement] = sourceValues;
    }
  }
  return newObject;
}
