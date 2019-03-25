const outputEl = document.getElementById("output-target")
const navItem = document.getElementsByClassName('nav-item');
const bioPage = document.getElementById('bioPage');
const techPage = document.getElementById('technologiesPage');
const projectsPage = document.getElementById('projectsPage');

const pageLoad = () => {
  toggleVisibility(techPage, 'd-none');
  toggleVisibility(projectsPage, 'd-none');
}

const toggleVisibility = (element, newClass) => {
  element.classList.toggle(newClass);
  console.log('element.classList', element.classList);
};

const handlePageClick = (e) => {
  const navId = e.target.id;
  if (navId === 'navToBio') {
    bioPage.classList.remove('d-none')
    techPage.classList.add('d-none')
    projectsPage.classList.add('d-none')
  } else if (navId === 'navToTechnologies') {
    bioPage.classList.add('d-none')
    techPage.classList.remove('d-none')
    projectsPage.classList.add('d-none')
  } else if (navId === 'navToProjects') {
    bioPage.classList.add('d-none')
    techPage.classList.add('d-none')
    projectsPage.classList.remove('d-none')
  };
};

const eventListeners = () => {
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', handlePageClick);
  };
};

/* PROJECTS */
const printToDom = (divId, textToPrint) => {
  selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const projects = [
  {
    title: "Cool Project1", 
    screenshot: "/images/test-project1-640-426.jpeg", 
    description: "This is Project 1", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project2", 
    screenshot: "/images/test-project2-640-425.jpeg", 
    description: "This is Project 2", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project3", 
    screenshot: "/images/test-project3-640-426.jpeg", 
    description: "This is Project 3", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project4", 
    screenshot: "/images/test-project4-640-426.jpeg", 
    description: "This is Project 4", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cool Project5", 
    screenshot: "/images/test-project5-640-426.jpeg", 
    description: "This is Project 5", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
];

const createProjectCards = () => {
  let domString = '';
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
      domString += `<div class="col-lg-6 portfolio-item">`;
      domString +=   `<span class="caption">`;
      domString +=     `<span class="caption-content">`;
      domString +=       `<h2><a href="${projects[i].url}">${projects[i].title}</h2></a>`;
      domString +=       `<p class="mb-0">${projects[i].description}</p>`;
      domString +=       `<p class="mb-0">Technologies Used: ${projects[i].technologiesUsed}</p>`;
      domString +=       `<p>`
      domString +=         `<a class="social-link rounded-circle mr-3" href="${projects[i].githubUrl}">`
      domString +=           `<i class="icon-social-github"></i> View on Github`
      domString +=         `</a>`
      domString +=       `</p>`
      domString +=     `</span>`;
      domString +=   `</span>`;
      domString +=   `<img class="img-fluid" src="${projects[i].screenshot}" alt="${projects[i].description}">`;
      domString += `</div>`;
    };
  };
  printToDom('projects', domString);
};

const init = () => {
  pageLoad();
  eventListeners();
  createProjectCards();
};

init();