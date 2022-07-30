const form = document.querySelector('.contact-form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error');

function checkEmail(input) {
  const lower = input.toLowerCase();

  if (input !== lower) {
    errorMessage.innerText = 'Please enter your email in lower case only!';
    errorMessage.className = 'alert error';
    return false;
  }
  if (input === lower) {
    errorMessage.innerText = 'Thank you! We will get back to you soon!';
    errorMessage.className = 'alert success';
    setTimeout(() => {
      form.submit();
    },
    5000);
  }
  return true;
}
form.addEventListener('submit', (event) => {
  if (checkEmail(email.value) === false) {
    event.preventDefault();
  } else {
    event.run();
  }
});