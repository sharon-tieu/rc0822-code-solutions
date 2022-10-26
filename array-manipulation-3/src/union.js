/* exported union */
function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var k = 0; k < second.length; k++) {
    if (!newArray.includes(second[k])) {
      newArray.push(second[k]);
    }
  }
  return newArray;
}
