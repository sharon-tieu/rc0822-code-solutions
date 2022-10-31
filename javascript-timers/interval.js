// count begins at four
var count = 4;

// setInterval (function, delay) and assign to variable
// delay: 1000 (countdown from 4 every second)
// decrement the count bc we are counting down
// query select the class countdown-display and change the text content to count
// once the count his 0 then clear the interval to the interval timer can stop
// change the h1 class to the new message.
var blastOff = setInterval(function () {
  count--;
  document.querySelector('.countdown-display').textContent = count;
  if (count === 0) {
    clearInterval(blastOff);
    document.querySelector('.countdown-display').textContent = '~~Earth Beeeelooowww Us~';
  }
}, 1000);
