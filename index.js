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

};
