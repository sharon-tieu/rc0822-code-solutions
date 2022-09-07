var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var userData = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value
  };
  contactForm.reset();
  console.log(userData);
});
