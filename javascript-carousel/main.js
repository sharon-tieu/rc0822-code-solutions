var $leftArrow = document.querySelector('.left-arrow');
var $rightArrow = document.querySelector('.right-arrow');
// var $circle0 = document.querySelector('.circle-image-0');
// var $circle1 = document.querySelector('.circle-image-1');
// var $circle2 = document.querySelector('.circle-image-2');
// var $circle3 = document.querySelector('.circle-image-3');
// var $circle4 = document.querySelector('.circle-image-4');
var $pokemonImage = document.querySelector('.pokemon-image-1');

// IMAGE CAROUSEL
var $images = ['./images/001.png', './images/004.png', './images/007.png', './images/025.png', './images/039.png'];
var circleArray = ['.circle-image-0', '.circle-image-1', '.circle-image-2', '.circle-image-3', '.circle-image-4'];
var count = 0;

var rightArrowClick = setInterval(rightArrow, 2000);
// var leftArrowClick = setInterval(leftArrow, 2000);
function dotCarousel() {

}
setInterval(dotCarousel, 1000);

$rightArrow.addEventListener('click', rightArrow);
function rightArrow() {
  if (count === $images.length - 1) {
    count = 0;
    $pokemonImage.src = $images[0];
  } else {
    count++;
    $pokemonImage.src = $images[count];
    clearInterval(rightArrowClick);
    rightArrowClick = setInterval(rightArrow, 2000);
  }
}

$leftArrow.addEventListener('click', leftArrow);
function leftArrow() {
  if (count === 0) {
    count = $images.length - 1;
    $pokemonImage.src = $images[$images.length - 1];
  } else {
    count--;
    $pokemonImage.src = $images[count];
  }
}
