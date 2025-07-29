import './Experience.css';
import { experiences } from './data';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/accordion';

function Experience() {
  return (
    <div className="experience">
      <h2 className="section-title border-t mt-8 pt-8">Experience</h2>
      <ul className="timeline flex flex-col">
        {experiences.map((experience, index) => (
          <li key={index} className="exp-card">
            <h3>
              <strong>{experience.role}</strong>
            </h3>
            <h4 className="mt-1">{experience.company}</h4>
            <h5 className="font-light mt-1">{experience.dates}</h5>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="read-more-btn">
                    Read more
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="ml-3">
                      <ul>
                        {experience.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="exp-li">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
