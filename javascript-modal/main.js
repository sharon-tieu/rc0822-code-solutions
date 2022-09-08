var $openModalButton = document.querySelector('.open-modal-btn');
var $modalContainer = document.querySelector('#modal-container');
$openModalButton.addEventListener('click', function (event) {
  $modalContainer.classList.remove('hide');
});

var $noButton = document.querySelector('.no-btn');
$noButton.addEventListener('click', function (event) {
  $modalContainer.classList.add('hide');
});

$modalContainer.addEventListener('click', function (event) {
  $modalContainer.classList.add('hide');
});
