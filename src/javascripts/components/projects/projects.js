import projectsData from '../../helpers/data/projectsData';

import util from '../../helpers/util';

const printProjects = (projects) => {
  let domString = '<h2 class="section-title">Projects</h2>';
  projects.forEach((project) => {
    if (project.shouldPrint) {
      domString += '<div class="card">';
      domString += '<div class="skill-level">';
      domString += `<h2 class="col-12">${project.title}</h2>`;
      domString += '</div>';
      domString += '<div class="skill-meta">';
      domString += `<h3>${project.subtitle}</h3>`;
      domString += `<span>${project.description}</span>`;
      domString += '</div>';
      domString += '<div class="pt-3">';
      domString += `<a href="${project.demoUrl}" class="text-center mr-5">View Demo</a>`;
      domString += `<a href="${project.gitUrl}" class="text-center">View on Github</a>`;
      domString += '</div>';
      domString += '</div>';
    }
  });
  util.printToDom('projects', domString);
};

const initProjects = () => {
  projectsData.getProjects()
    .then(projects => printProjects(projects))
    .catch(err => console.error('did not load projects', err));
};

export default { initProjects };
