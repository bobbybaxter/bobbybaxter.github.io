import Header from './components/header/Header.tsx';
import Technologies from './components/technologies/Technologies.tsx';
import Experience from './components/experience/Experience.tsx';
import Education from './components/education/Education.tsx';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Technologies />
        <Experience />
        <Education />
      </div>
    </>
  );
}

export default App;
