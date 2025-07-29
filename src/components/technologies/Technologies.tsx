import './Technologies.css';
import { technologies } from './data';
import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';

function Technologies() {
  const renderTechnologies = () => {
    return technologies.map((tech) => (
      <Tooltip key={tech.title}>
        <TooltipTrigger>
          <img className="tech-icon" src={tech.src} alt={tech.title} />
        </TooltipTrigger>
        <TooltipContent>
          <p>{tech.description}</p>
        </TooltipContent>
      </Tooltip>
    ));
  };

  return (
    <div className="technologies">
      <h2 className="section-title border-t mt-8 pt-8">Technologies</h2>
      <div className="technologies flex flex-row flex-wrap justify-center">
        {renderTechnologies()}
      </div>
    </div>
  );
}

export default Technologies;
