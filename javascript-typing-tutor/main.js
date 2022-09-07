var spanElement = document.querySelectorAll('span');
var g = document.querySelector('.g-key');
var r = document.querySelector('.r-key');
var currentLetter = spanElement[0].textContent;

// console.log('current letter:', currentLetter);
// console.log('spanElement[0]:', spanElement[0].textContent);
// console.log('spanElement[1]:', spanElement[1].textContent);
// console.log('spanElement[2]:', spanElement[2].textContent);

document.addEventListener('keydown', function (event) {
  if (event.key !== currentLetter) {
    g.classList.add('text-color-red');
  } else if (event.key === 'g') {
    g.classList.remove('text-color-red');
    g.classList.add('text-color-green');
    g.classList.remove('underline');
    r.classList.add('underline');
  } else if (event.key !== 'r') {
    r.classList.add('text-color-red');
  }
  // console.log('event.key:', event.key);
});

// if 'g' is NOT pressed
//    add the red color class name to the class
// if 'g' is pressed,
//    remove the red color class name from the class
//    add the green color class name to the class
//    remove the underline class
//    add the underline class to the next letter which is r
