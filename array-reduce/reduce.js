const numbers = [1, 2, 3, 4, 5];
const initialValue = 0;

const reduce = (array, reducer, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    console.log('initialValue:', initialValue);
    console.log('numbers[i]:', numbers[i]);
    initialValue = reducer(initialValue, numbers[i]);
  }
  return initialValue;
};
console.log(reduce(numbers, (a, b) => a + b, initialValue));
