const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navItem1 = document.querySelector('.item1');
const navItem2 = document.querySelector('.item2');
const navItem3 = document.querySelector('.item3');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navItem1.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navItem2.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navItem3.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});