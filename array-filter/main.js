const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const isEven = num => {
  return num % 2 === 0;
};
console.log('isEven:', numbers.filter(isEven));

const isOverFive = num => {
  return num > 5;
};
console.log('isOverFive:', numbers.filter(isOverFive));

const startWithE = names => {
  return names[0] === 'E';
};
console.log('startWithE:', names.filter(startWithE));

const haveD = names => {
  for (let i = 0; i < names.length; i++) {
    if (names[i].includes('D') || names[i].includes('d')) {
      return true;
    }
  }
  return false;
};
console.log('startWithD:', names.filter(haveD));

// const hasD = name => {
//   return name.toLowerCase().includes('d');
// };
// const haveD = names.filter(hasD);
// console.log('haveD:', haveD);
