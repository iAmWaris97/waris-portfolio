const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');
const close4 = document.querySelector('.close4');

// card 1
document.querySelector('.see-pro1').addEventListener('click', () => {
  document.querySelector('.pop-1').classList.toggle('active');
  // document.querySelector('.overlay').classList.toggle('active');
});

close1.addEventListener('click', () => {
  document.querySelector('.pop-1').classList.toggle('active');
});

// card 2
document.querySelector('.see-pro2').addEventListener('click', () => {
  document.querySelector('.pop-2').classList.toggle('active');
});

close2.addEventListener('click', () => {
  document.querySelector('.pop-2').classList.toggle('active');
});

// card 3
document.querySelector('.see-pro3').addEventListener('click', () => {
  document.querySelector('.pop-3').classList.toggle('active');
});

close3.addEventListener('click', () => {
  document.querySelector('.pop-3').classList.toggle('active');
});

// card 4
document.querySelector('.see-pro4').addEventListener('click', () => {
  document.querySelector('.pop-4').classList.toggle('active');
});

close4.addEventListener('click', () => {
  document.querySelector('.pop-4').classList.toggle('active');
});