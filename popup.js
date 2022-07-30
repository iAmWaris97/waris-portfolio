const popUp = document.querySelector('.pop-up');
const projTitle = document.querySelector('.pro-title');
const projDetails = document.querySelector('.projDetails');
const projPic = document.querySelector('.projPic');
const proInfo = document.querySelector('.proInfo');
const lang1 = document.querySelector('.lang1');
const lang2 = document.querySelector('.lang2');
const lang3 = document.querySelector('.lang3');
const link1 = document.getElementById('see-live');
const link2 = document.getElementById('see-source');
const close = document.querySelector('.close');
const seeButton = document.querySelector('.see-pro1');
const seeButton1 = document.querySelector('.see-pro2');
const seeButton2 = document.querySelector('.see-pro3');
const seeButton3 = document.querySelector('.see-pro4');

const projArr = [
  {
    id: 0,
    projTitle: 'Tonic',
    projDetails: 'Canopy &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    projPic: './src/assets/img/project-1.svg',
    proInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang1: 'HTML',
    lang2: 'CSS',
    lang3: 'JavaScript',
    link1: 'https://github.com/iAmWaris97/iAmWaris97-Portfolio',
    link2: 'https://github.com/iAmWaris97/iAmWaris97-Portfolio',
  },

  {
    id: 1,
    projTitle: 'Multi Post Stories',
    projDetails: 'Canopy &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    projPic: './src/assets/img/project-2.svg',
    proInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang1: 'HTML',
    lang2: 'CSS',
    lang3: 'JavaScript',
    link1: 'https://github.com/iAmWaris97/iAmWaris97-Portfolio',
    link2: 'https://github.com/iAmWaris97/iAmWaris97-Portfolio',
  },
  {
    id: 2,
    projTitle: 'Tonic',
    projDetails: 'Canopy &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    projPic: './src/assets/img/project-3.svg',
    proInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang1: 'HTML',
    lang2: 'CSS',
    lang3: 'JavaScript',
    link1: 'https://github.com/iAmWaris97/iAmWaris97-Portfolio',
    link2: 'https://github.com/iAmWaris97/iAmWaris97-Portfolio',
  },

  {
    id: 3,
    projTitle: 'Multi Post Stories',
    projDetails: 'Canopy &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2022',
    projPic: './src/assets/img/project-4.svg',
    proInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    lang1: 'HTML',
    lang2: 'CSS',
    lang3: 'JavaScript',
    link1: 'https://github.com/iAmWaris97/iAmWaris97-Portfolio',
    link2: 'https://github.com/iAmWaris97/iAmWaris97-Portfolio',
  },
];

function fillPopUp(arr, num) {
  const proj = arr[num];
  projTitle.textContent = proj.projTitle;
  projDetails.innerHTML = proj.projDetails;
  projPic.src = proj.projPic;
  proInfo.textContent = proj.proInfo;
  lang1.textContent = proj.lang1;
  lang2.textContent = proj.lang2;
  lang3.textContent = proj.lang3;
  link1.setAttribute("href", proj.link1);
  link2.setAttribute("href", proj.link2);
}

seeButton.addEventListener('click', () => {
  popUp.classList.toggle('active');
  fillPopUp(projArr, 0);
});

seeButton1.addEventListener('click', () => {
  popUp.classList.toggle('active');
  fillPopUp(projArr, 1);
});
seeButton2.addEventListener('click', () => {
  popUp.classList.toggle('active');
  fillPopUp(projArr, 2);
});
seeButton3.addEventListener('click', () => {
  popUp.classList.toggle('active');
  fillPopUp(projArr, 3);
});

close.addEventListener('click', () => {
  popUp.classList.remove('active');
});