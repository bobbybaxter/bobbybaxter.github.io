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
      // domString += `<div class="card">`;
      // domString +=   `<h3 class="project-title">${projects[i].title}</h3>`;
      // domString +=   `<img src="${projects[i].screenshot}"></img>`;
      // domString +=   `<p class="description">${projects[i].description}</p>`;
      // domString +=   `<p>${projects[i].technologiesUsed}</p>`;
      // domString +=   `<p><a href="${projects[i].url}">Preview</a></p>`;
      // domString +=   `<p><a href="${projects[i].githubUrl}">Github</a></p>`;
      // domString += `</div>`;
    };
  };
  printToDom('projectsPage', domString);
};

const init = () => {
  createProjectCards();
};

init();