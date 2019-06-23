import '../styles/main.scss';
import 'bootstrap';
import auth from './auth/auth';
import projects from './components/projects/projects';
import interests from './components/interests/interests';

const init = () => {
  auth.initializeFirebase();
  projects.initProjects();
  interests.initInterests();
};

init();
