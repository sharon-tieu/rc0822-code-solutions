var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

// console.log('$tabContainer:', $tabContainer);
// console.log('$tabNodeList:', $tabNodeList);
// console.log('$viewNodeList:', $viewNodeList);

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabNodeList.length; i++) {
      if ($tabNodeList[i] === event.target) {
        $tabNodeList[i].className = 'tab active';
      } else {
        $tabNodeList[i].className = 'tab';
      }
    }
  }
  var $getDataViewAttribute = event.target.getAttribute('data-view');
  // console.log($getDataViewAttribute);
  for (var k = 0; k < $viewNodeList.length; k++) {
    if ($getDataViewAttribute === $viewNodeList[k].getAttribute('data-view')) {
      $viewNodeList[k].className = 'view';
    } else {
      $viewNodeList[k].className = 'hidden';
    }
  }
});
