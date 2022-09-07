// write a function that will change between light bulb off to light bulb on upon each click.
// start with light-bulb off and back-light off. make query selectors for these classes

var $bulb = document.querySelector('.bulb');

var $lightBulbOff = document.querySelector('.bulb-off');
var $backLightOff = document.querySelector('.back-light-off');

// use boolean value to reflect what is "on" and what is "off".
// if the switch is on, that is false.
// if the switch is off, that is true.
var isSwitchOn = false;

$lightBulbOff.addEventListener('click', function (event) {
  if (isSwitchOn === false) {
    $bulb.className = 'bulb bulb-on';
    $backLightOff.className = 'back-light-on';
    isSwitchOn = true;
  } else if (isSwitchOn === true) {
    $bulb.className = 'bulb bulb-off';
    $backLightOff.className = 'back-light-off';
    isSwitchOn = false;
  }
});
