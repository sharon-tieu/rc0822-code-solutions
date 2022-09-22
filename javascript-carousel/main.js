var $circle0 = document.querySelector('.circle-image-0');
var $circle1 = document.querySelector('.circle-image-1');
var $circle2 = document.querySelector('.circle-image-2');
var $circle3 = document.querySelector('.circle-image-3');
var $circle4 = document.querySelector('.circle-image-4');

var $leftArrow = document.querySelector('.left-arrow');
var $rightArrow = document.querySelector('.right-arrow');

var $pokemonImage = document.querySelector('.pokemon-image-1');

var $images = ['./images/001.png', './images/004.png', './images/007.png', './images/025.png', './images/039.png'];
// var circleArray = [$circle0, $circle1, $circle2, $circle3, $circle4];
var count = 0;

// var dotRotation = setInterval(dotCarousel, 2000);
// function dotCarousel() {
//   var currentDot = circleArray[count];
//   if (count === circleArray.length - 1) {
//     currentDot.className.remove('fa-regular');
//     currentDot.className.add('fa-solid');
//   }
// }

var rightArrowClick = setInterval(rightArrow, 2000);
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

$circle0.addEventListener('click', function () {
  $pokemonImage.src = $images[0];
  count = 0;
  $circle0.classList.add('fa-solid');
  $circle1.classList.remove('fa-solid');
  $circle2.classList.remove('fa-solid');
  $circle3.classList.remove('fa-solid');
  $circle4.classList.remove('fa-solid');
});

$circle1.addEventListener('click', function () {
  $pokemonImage.src = $images[1];
  count = 1;
  $circle0.classList.remove('fa-solid');
  $circle0.classList.add('fa-regular');
  $circle1.classList.add('fa-solid');
  $circle2.classList.remove('fa-solid');
  $circle3.classList.remove('fa-solid');
  $circle4.classList.remove('fa-solid');
});

$circle2.addEventListener('click', function () {
  $pokemonImage.src = $images[2];
  count = 2;
  $circle0.classList.remove('fa-solid');
  $circle0.classList.add('fa-regular');
  $circle1.classList.remove('fa-solid');
  $circle2.classList.remove('fa-solid');
  $circle2.classList.add('fa-solid');
  $circle3.classList.remove('fa-solid');
  $circle4.classList.remove('fa-solid');
});

$circle3.addEventListener('click', function () {
  $pokemonImage.src = $images[3];
  count = 3;
  $circle0.classList.remove('fa-solid');
  $circle0.classList.add('fa-regular');
  $circle1.classList.remove('fa-solid');
  $circle2.classList.remove('fa-solid');
  $circle3.classList.add('fa-solid');
  $circle4.classList.remove('fa-solid');
});

$circle4.addEventListener('click', function () {
  $pokemonImage.src = $images[4];
  count = 4;
  $circle0.classList.remove('fa-solid');
  $circle0.classList.add('fa-regular');
  $circle1.classList.remove('fa-solid');
  $circle2.classList.remove('fa-solid');
  $circle3.classList.add('fa-regular');
  $circle3.classList.remove('fa-solid');
  $circle4.classList.add('fa-solid');
});
