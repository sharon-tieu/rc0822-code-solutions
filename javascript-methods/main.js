var rangeOfNumbersOne = 87;
var rangeOfNumbersTwo = 8;
var rangeOfNumbersThree = 123;
var maximumValue = Math.max(rangeOfNumbersOne, rangeOfNumbersTwo, rangeOfNumbersThree);
console.log('maximumValue:', maximumValue);

var heroes = ['Midoriya Izuku', 'Gon Freecss', 'Eren Yaeger', 'Monkey D. Luffy'];
var randomNumber = Math.random(heroes);
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter and the Half-Blood Prince',
    author: 'J.K. Rowling'
  },
  {
    title: 'Percy Jackson and the Olympians',
    author: 'Rick Riordan'
  },
  {
    title: 'Hunger Games',
    author: 'Suzanne Collins'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var theLordOfTheRings = {
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien'
};
var chroniclesOfNarnia = {
  title: 'The Chronicles of Narnia',
  author: 'C.S. Lewis'
};
library.push(theLordOfTheRings);
library.unshift(chroniclesOfNarnia);
library.splice(1, 1);
console.log('library array:', library);

var fullName = 'Sharon Tieu';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
