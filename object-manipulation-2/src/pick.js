/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = source[key];
    if (value !== undefined) {
      newObject[key] = value;
    }
  }
  return newObject;
}
