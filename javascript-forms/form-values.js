var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var userData = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.name.value,
    message: contactForm.elements.name.value
  };
  console.log(userData);
});
