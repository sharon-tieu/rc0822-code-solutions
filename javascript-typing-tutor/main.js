var spanElement = document.querySelectorAll('span');
var currentIndex = 0;

// console.log('current letter:', currentLetter);
// console.log('spanElement[0]:', spanElement[0].textContent);
// console.log('spanElement[1]:', spanElement[1].textContent);
// console.log('spanElement[2]:', spanElement[2].textContent);
// console.log('spanElement[6]:', spanElement[6].textContent);

document.addEventListener('keydown', function (event) {
  // currentIndex; // i = 0
  if (event.key !== spanElement[currentIndex].textContent) {
    spanElement[currentIndex].className = 'text-color-red underline-red';
  } else if (event.key === spanElement[currentIndex].textContent) {
    currentIndex++; // i = 1
    spanElement[currentIndex - 1].className = 'text-color-green'; // i = 0
    spanElement[currentIndex].className = 'font-family-typewriter underline'; // i = 1
    // spanElement[currentIndex];
  }
  // console.log('event.key:', event.key);
  // console.log('next SpanElement:', spanElement[currentIndex].textContent);
});

// if 'g' is NOT pressed
//    add the red color class name to the class
// if 'g' is pressed,
//    remove the red color class name from the class
//    add the green color class name to the class
//    remove the underline class
//    add the underline class to the next letter which is r
