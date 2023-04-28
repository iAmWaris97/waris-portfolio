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

  const projectsData = [{
      title: 'Private Investigators',
      subtitle: 'Find the Truth, Book a P.I.',
      techStack: 'Full Stack Dev',
      year: 2023,
      src: './src/assets/img/projects/investigators.png',
      highlight: '<em>Private Investigators stands out as a unique and innovative solution for those looking to book private investigation services.</em> <em>The project utilizes React as a front-end development tool and Rails API as a back-end.</em> <em>The app employs authentication rules which make the booking process a simple and secure process for users.</em>',
      description: 'Private Investigators is an innovative platform that offers a streamlined booking experience for users seeking licensed investigators. This project is developed with a dynamic React front-end and a robust Rails API back-end. The app incorporates secure authentication protocols to enable effortless booking of private investigator appointments.',
      lang: ['React', 'Redux', 'Ruby on Rails', 'PostgreSql'],
      live: 'https://investigators.netlify.app/',
      source: 'https://github.com/iAmWaris97/Private-Investigators',
    },
    {
      title: 'Meal Mentor',
      subtitle: 'Discover, Plan, and Cook with Ease',
      techStack: 'JavaScript & Webpack',
      year: 2022,
      src: './src/assets/img/projects/meal-mentor.png',
      highlight: 'Meals Mentor is a user-friendly web app designed for hassle-free meal planning and cooking. Built with modern web development technologies such as HTMLCSS, JavaScript, and Webpack, it offers a seamless browsing experience where users can search for recipes, comment, and select their favorites. It was tested using Jest to ensure a high-quality deliverable.',
      description: 'Meal Mentor simplifies meal planning and cooking. Featuring a sleek and user-friendly interface, the app is designed to provide an effortless browsing experience. Its modern web development technologies, including CSS, JavaScript, and Webpack, improve the performance and provide a seamless experience. Users can search for recipes, leave comments, and select their favourite meals as they navigate through the platform.',
      lang: ['CSS', 'JavaScript', 'Webpack', 'Jest'],
      live: 'https://iamwaris97.github.io/Delicious-Meals/dist/',
      source: 'https://github.com/iAmWaris97/Delicious-Meals',
    },
    {
      title: 'Every Cent',
      subtitle: 'Track every penny!',
      techStack: 'Rails & PostgreSQL',
      year: 2023,
      src: './src/assets/img/projects/every-cent.jpg',
      highlight: 'This app is user-friendly and simplifies expense tracking while providing complete financial control with the ability to categorize expenses and view a detailed summary by category. It is built using Ruby on Rails and PostgreSQL and has a responsive design.',
      description: 'Every Cent is a mobile first application that helps users to easily track their expenses. The app is designed to be user-friendly and allows you to categorize your expenses with ease. Every Cent was created using Ruby on Rails and is fully responsive, so you can use it on any device. With Every Cent, you can quickly add expenses and view a detailed summary by category, which makes it easier for you to keep your spending in check.',
      lang: ['Ruby', 'Ruby on Rails', 'PostgreSql'],
      live: 'https://something.netlify.app/',
      source: 'https://github.com/iAmWaris97/investigators-frontend',
    },
    {
      title: 'Space Traveler\'s Hub',
      subtitle: 'Explore the Universe!',
      techStack: 'React & Redux',
      year: 2023,
      src: './src/assets/img/projects/space-travelers.png',
      highlight: ' Space Traveler\'s Hub is a cutting-edge app that brings real-time updates on space launches, missions, and more from SpaceX APIs. It offers users a chance to reserve a seat on SpaceX rockets to explore their favorite solar system destinations or take part in other missions.',
      description: 'It is an app that provides up-to-date information on space-related news and allows users to book seats on SpaceX rockets for space travel. It fetches live data from the SpaceX APIs, giving real-time alerts about launches and space missions. The app is ideal for space enthusiasts who are always on the lookout for the latest happenings in the space industry.',
      lang: ['React', 'Redux', 'API', 'Netlify'],
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

  const form = document.querySelector('#form');
  const messageContainer = document.querySelector('.message');

  const isValidEmail = (email) => {
    const eamilPattern = /^(([^<>()[\]\\.,;:\s@"A-Z]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    return eamilPattern.test(email);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const valid = isValidEmail(formData.get('email'));
    if (valid) {
      const message = document.createElement('span');
      message.classList.add('success');
      message.innerHTML = 'Message sent successfully!🚀';
      messageContainer.replaceChildren(message);
    } else {
      const message = document.createElement('span');
      message.classList.add('error');
      message.innerHTML = 'Error!⚡ Incorrect format. Enter email in lowercase';
      messageContainer.replaceChildren(message);
    }
  });

  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#mesasge');

  function saveData() {
    const data = {
      fieldName: name.value,
      fieldEmail: email.value,
      fieldComment: message.value,
    };
    localStorage.setItem('data', JSON.stringify(data));
  }

  let formObject = JSON.parse(localStorage.getItem('data'));
  if (!formObject) {
    formObject = {
      name: '',
      email: '',
      message: '',
    };
    saveData();
  }

  if (!formObject.name) {
    formObject.name = '';
  }

  if (!formObject.email) {
    formObject.email = '';
  }

  if (!formObject.message) {
    formObject.message = '';
  }

  name.value = formObject.name;
  name.addEventListener('change', (e) => {
    formObject.name = e.target.value;
    localStorage.setItem('data', JSON.stringify(formObject));
  });

  email.value = formObject.email;
  email.addEventListener('change', (e) => {
    formObject.email = e.target.value;
    localStorage.setItem('data', JSON.stringify(formObject));
  });

  message.value = formObject.message;
  message.addEventListener('change', (e) => {
    formObject.message = e.target.value;
    localStorage.setItem('data', JSON.stringify(formObject));
  });
};

// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
  // Get a reference to the portfolio grid
  const portfolioGrid = document.querySelector('.recent-work');

  // Check if the user has scrolled down to the portfolio grid
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0);
  }

  window.addEventListener('scroll', () => {
    // Get all child elements of the portfolio grid
    const portfolioItems = portfolioGrid.querySelectorAll('.card');

    // Loop through each child element and check if it's in the viewport
    portfolioItems.forEach((portfolioItem) => {
      if (isElementInViewport(portfolioItem) && !portfolioItem.classList.contains('animate__animated')) {
        // Add the 'animated' and 'fade-in' classes to the child element to trigger the animation
        portfolioItem.classList.add('animate__animated', 'animate__fadeIn');
      } else if (!isElementInViewport(portfolioItem) && portfolioItem.classList.contains('animate__animated')) {
        // Remove the 'animated' class from the child element when it goes out of view
        portfolioItem.classList.remove('animate__animated');
        portfolioItem.classList.remove('animate__fadeIn');
      }
    });
  });
});