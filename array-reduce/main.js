const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const initialValue = 0;
const sum = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log('sum:', sum);

const product = numbers.reduce(
  (previousValue, currentValue) => previousValue * currentValue
);
console.log('product:', product);

const balance = account.reduce((sum, currentTransaction) => {
  if (currentTransaction.type === 'deposit') {
    return sum + currentTransaction.amount;
  } else {
    return sum - currentTransaction.amount;
  }
}, 0);
console.log('balance:', balance);

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const composite = traits.reduce((composite, currentTraits) => {
  return Object.assign(composite, currentTraits);
});
console.log('composite:', composite);
