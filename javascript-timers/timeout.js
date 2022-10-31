// 1 second = 1000 millisecond
// setTimeout(code function, delay);
setTimeout(myGreeting, 2000);

// code function:
function myGreeting() {
  document.querySelector('.message').textContent = 'Hello There!';
}
