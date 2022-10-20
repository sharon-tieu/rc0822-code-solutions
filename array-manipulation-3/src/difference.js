/* exported difference */
function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) {
      newArray.push(second[k]);
    }
  }
  return newArray;
}
