function handleClick(event) {
  console.log('button clicked');
  console.log(event.target);
}
var buttonClick = document.querySelector('.click-button');
buttonClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered!');
  console.log(event.target);
}
var hoverButton = document.querySelector('.hover-button');
hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event.target);
}
var doubleClickbtn = document.querySelector('.double-click-button');
doubleClickbtn.addEventListener('dblclick', handleDoubleClick);
