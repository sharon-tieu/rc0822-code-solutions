const takeAChance = require('./take-a-chance');

const returnPromise = takeAChance('Ichigo');

returnPromise.then(
  success => {
    console.log(success); // Success (`you're so lucky, ${ name }!`)
  },
  failure => {
    console.error(failure.message); // Error (`it's just bad luck, ${ name }.`)
  }
);
