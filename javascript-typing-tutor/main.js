// var spanElement = document.querySelectorAll('span');
var g = document.querySelector('.g-key');
var r = document.querySelector('.r-key');
// var u = document.querySelector('.u-key');

document.addEventListener('keydown', function (event) {
  if (event.key !== 'g') {
    g.classList.add('text-color-red');
  } else if (event.key === 'g') {
    g.classList.remove('text-color-red');
    g.classList.add('text-color-green');
    g.classList.remove('underline');
    r.classList.add('underline');
    event.key = '';
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
