import './Header.css';

function Header() {
  return (
    <>
      <div className="hero">
        <div className="flex">
          <div className="w-1/2 p-0 flex flex-col justify-center">
            <h1 className="name">
              <strong>Bob Baxter</strong>
            </h1>
            <h2 className="under-title">
              <strong>Senior Software Engineer</strong>
            </h2>
            <div className="under-title flex flex-row">
              <a
                href="https://github.com/bobbybaxter"
                className="fab fa-github fa-fw"
                data-toggle="tooltip"
                title="Github"
              ></a>
              <a
                href="https://www.linkedin.com/in/bob-e-baxter/"
                className="fab fa-linkedin fa-fw"
                data-toggle="tooltip"
                title="LinkedIn"
              ></a>
              <a
                href="@mailto: bob.e.baxter@gmail.com"
                className="far fa-envelope fa-fw"
                data-toggle="tooltip"
                title="Email"
              ></a>
              <a
                href="/src/assets/Bob Baxter Resume 2025.pdf"
                className="fas fa-file-pdf fa-fw"
                data-toggle="tooltip"
                title="Resume"
              ></a>
            </div>
          </div>

          <div className="w-1/2 flex justify-center">
            <div id="headshot-img" className="circle-crop"></div>
            <img className="headshot-img" />
          </div>
        </div>

        <h3 className="solo-lead">
          I'm a Senior Software Engineer with experience in developing and
          delivering robust, scalable, and user-friendly applications and ETL
          pipelines.
          <br />
          <br />
          I’m not opposed to picking up new skills, but I’m most comfortable in
          the following tech stack: JavaScript/TypeScript, React/Next.js,
          Node.js (any framework), AWS/GCP, and any SQL or NoSQL database.
        </h3>
      </div>
    </>
  );
}

export default Header;
