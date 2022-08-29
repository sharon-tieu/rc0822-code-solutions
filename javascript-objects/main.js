var student = {
  firstName: 'Gon',
  lastName: 'Freecss',
  age: '12'
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Hunter';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Porsche',
  model: '911 GT3 RS',
  year: '2022'
};
vehicle.color = 'blue';
vehicle.isConvertible = true;
console.log('value of vehicle["color"]:', vehicle.color);
console.log('value of vehicle["isConvertible"]:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Derek',
  type: 'British Shorthair cat'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
