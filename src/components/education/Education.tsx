import './Education.css';
import { education } from './data';

function Education() {
  return (
    <div>
      <h2 className="section-title border-t mt-8 pt-8">Education</h2>

      {education.map((edu, index) => (
        <div key={index} className="list-card">
          <h3 className="exp">{edu.school}</h3>
          <div>
            {edu.bullets.map((bullet, bulletIndex) => (
              <div key={bulletIndex}>
                {bullet[0] && (
                  <span className="font-light mr-1">{bullet[0]}</span>
                )}
                {bullet[1] && <span>{bullet[1]}</span>}
                {bulletIndex < edu.bullets.length - 1 && <br />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
