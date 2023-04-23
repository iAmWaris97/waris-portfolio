window.onload = () => {
  const barMenu = document.querySelector('.bar-menu');
  const popUp = document.querySelector('.pop-up');
  const close = document.querySelector('.close');
  const menu = document.querySelector('.menu');
  const skillItems = document.querySelectorAll('.skill-item');

  // On click add active class to clicked skills list item and remove from others
  skillItems.forEach((skillItem) => {
    skillItem.addEventListener('click', () => {
      // if item is already active remove active class
      if (skillItem.classList.contains('active')) {
        skillItem.classList.remove('active');
        const icon = skillItem.querySelector('.item-1-header > i');
        icon.classList.remove('fa-solid', 'fa-angle-down');
        icon.classList.add('fa-solid', 'fa-angle-right');
        return;
      }
      skillItems.forEach((item) => {
        // Change item-1-header > i to fa-solid fa-angle-right next arrow"
        const icon = item.querySelector('.item-1-header > i');
        icon.classList.remove('fa-solid', 'fa-angle-down');
        icon.classList.add('fa-solid', 'fa-angle-right');
        item.classList.remove('active');
      });
      skillItem.classList.add('active');
      const icon = skillItem.querySelector('.item-1-header > i');
      icon.classList.remove('fa-solid', 'fa-angle-right');
      icon.classList.add('fa-solid', 'fa-angle-down');
    });
  });

  barMenu.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  menu.addEventListener('click', () => {
    popUp.classList.add('hidden');
  });

  const projectsData = [
    {
      title: 'Private Investigators',
      subtitle: 'Find the Truth, Book a P.I.',
      techStack: 'Full Stack Dev',
      year: 2023,
      src: './src/assets/img/projects/investigators.png',
      highlight: 'An app that allows users to reserve a private investigator for their case. An app that allows users to reserve a private investigator for their case.',
      description: 'Private Investigators is a unique project that is designed to provide users with a seamless experience of booking appointments with licensed investigators. The project is built using React as a front-end and Rails API app as a back-end. With the help of authentication rules embedded in the app, users can easily book appointments with a licensed private investigator.',
      lang: ['Ruby on Rails', 'PostgreSql', 'JWT', 'React', 'Redux', 'Netlify'],
      live: 'https://something.netlify.app/',
      source: 'https://github.com/iAmWaris97/investigators-frontend',
    },
    {
      title: 'Private Investigators',
      subtitle: 'Find the Truth, Book a P.I.',
      techStack: 'Full Stack Dev',
      year: 2023,
      src: './src/assets/img/projects/investigators.png',
      highlight: 'An app that allows users to reserve a private investigator for their case. An app that allows users to reserve a private investigator for their case.',
      description: 'Private Investigators is a unique project that is designed to provide users with a seamless experience of booking appointments with licensed investigators. The project is built using React as a front-end and Rails API app as a back-end. With the help of authentication rules embedded in the app, users can easily book appointments with a licensed private investigator.',
      lang: ['Ruby on Rails', 'PostgreSql', 'JWT', 'React', 'Redux', 'Netlify'],
      live: 'https://something.netlify.app/',
      source: 'https://github.com/iAmWaris97/investigators-frontend',
    },
    {
      title: 'Private Investigators',
      subtitle: 'Find the Truth, Book a P.I.',
      techStack: 'Full Stack Dev',
      year: 2023,
      src: './src/assets/img/projects/investigators.png',
      highlight: 'An app that allows users to reserve a private investigator for their case. An app that allows users to reserve a private investigator for their case.',
      description: 'Private Investigators is a unique project that is designed to provide users with a seamless experience of booking appointments with licensed investigators. The project is built using React as a front-end and Rails API app as a back-end. With the help of authentication rules embedded in the app, users can easily book appointments with a licensed private investigator.',
      lang: ['Ruby on Rails', 'PostgreSql', 'JWT', 'React', 'Redux', 'Netlify'],
      live: 'https://something.netlify.app/',
      source: 'https://github.com/iAmWaris97/investigators-frontend',
    },
    {
      title: 'Private Investigators',
      subtitle: 'Find the Truth, Book a P.I.',
      techStack: 'Full Stack Dev',
      year: 2023,
      src: './src/assets/img/projects/investigators.png',
      highlight: 'An app that allows users to reserve a private investigator for their case. An app that allows users to reserve a private investigator for their case.',
      description: 'Private Investigators is a unique project that is designed to provide users with a seamless experience of booking appointments with licensed investigators. The project is built using React as a front-end and Rails API app as a back-end. With the help of authentication rules embedded in the app, users can easily book appointments with a licensed private investigator.',
      lang: ['Ruby on Rails', 'PostgreSql', 'JWT', 'React', 'Redux', 'Netlify'],
      live: 'https://something.netlify.app/',
      source: 'https://github.com/iAmWaris97/investigators-frontend',
    },
  ];

  const projectCardString = projectsData.map((project) => `
    <div class="card grid__item ">
      <div class="inner-card">
        <div class="card-img card-1">
          <img
            src="${project.src}"
            alt="Project Snapshot"
          />
        </div>
        <div class="desc">
          <h3>${project.title}</h3>
          <h4>${project.subtitle} <span>${project.techStack}</span> <span>${project.year}</span></h4>
          <p>${project.highlight}</p>
          <ul>
            ${project.lang.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>
          <button type="button" class="project-btn button">
            See Project
          </button>
        </div>
      </div>
    </div>
  `);

  const popupContainer = document.querySelector('.project-popup-container');
  const recentWork = document.querySelector('.recent-work');
  const parser = new DOMParser();

  projectCardString.forEach((projectString, index) => {
    const projectElement = parser.parseFromString(projectString, 'text/html').body.firstChild;

    const mobilePopup = `
      <div class="project-popup-hidden ">
        <div class="project-background"></div>
          <div class="project-popup">

            <div class="project-header">
              <i class="fa-solid fa-xmark project-close"></i>
              <h2>${projectsData[index].title}</h2>
              <p>${projectsData[index].subtitle} <span>${projectsData[index].techStack}</span> <span>${projectsData[index].year}</span></p>
            </div>
            <div class="project-img" style="background-image: url(${projectsData[index].src})">
            </div>
            <div class="project-footer">
              <p class="project-desc">${projectsData[index].description}</p>
              <div>
                <ul>
                  ${projectsData[index].lang.map((tech) => `<li>${tech}</li>`).join('')}
                </ul>
                <span></span>
                <div class="project-links">
                  <button ><a href="${projectsData[index].live}" target="_blank">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
                  <button><a href="${projectsData[index].source}" target="_blank">See Source <i class="fa-brands fa-github"></i></a></button>
                </div>
              </div>
            </div>
          </div>
      </div>
    `;

    const mobilePopupElement = parser.parseFromString(mobilePopup, 'text/html').body.firstChild;

    const projectBtn = projectElement.querySelector('.project-btn');
    const closeBtn = mobilePopupElement.querySelector('.project-close');

    projectBtn.addEventListener('click', () => {
      mobilePopupElement.classList.toggle('project-popup-hidden');
    });

    closeBtn.addEventListener('click', () => {
      mobilePopupElement.classList.toggle('project-popup-hidden');
    });

    recentWork.append(projectElement);
    popupContainer.append(mobilePopupElement);
  });

};
