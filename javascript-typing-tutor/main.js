var spanElement = document.querySelectorAll('span');

var currentIndex = 0;

document.addEventListener('keydown', function (event) {
  if (event.key !== spanElement[currentIndex].textContent) {
    spanElement[currentIndex].className = 'text-color-red underline-red';
  } else if (event.key === spanElement[currentIndex].textContent) {
    currentIndex++;
    spanElement[currentIndex - 1].className = 'text-color-green'; // i = 0
    spanElement[currentIndex].className = 'font-family-typewriter underline'; // i = 1
  }
});
