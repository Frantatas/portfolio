import "./App.css";

function App() {
  const projects = [
    {
      title: "CIIT Marketplace",
      description:
        "Contributed to frontend development for a student marketplace platform using React. Worked on page structure, layout consistency, and user-facing interface elements while collaborating through a branching workflow in GitHub.",
      link: "https://github.com/berired/CIIT-Marketplace",
    },
    {
      title: "Thrift App",
      description:
        "Android-based thrift and clothing swap application designed for browsing items, posting listings, and managing swap requests. Focused on navigation flow, usability, and screen-level implementation.",
      link: "https://github.com/Frantatas/thrift",
    },
    {
      title: "Retail Intelligence System",
      description:
        "A machine learning-based system that predicts retail sales and classifies transactions as HIGH or LOW using multiple models.",
      link: "https://github.com/Frantatas/Retail-Intelligence-System",
    },
  ];

  const skills = {
    Frontend: ["React", "JavaScript", "HTML", "CSS"],
    Mobile: ["Kotlin", "Android Studio"],
    Backend: ["Node.js", "Express.js"],
    Tools: ["Git", "GitHub", "Metabase", "REST API Integration"],
  };

  return (
    <div className="app">
      <div className="portfolio-window">
        <div className="window-header">
          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>MY PORTFOLIO</p>
        </div>

        <section className="hero">
          <p className="eyebrow">FRONTEND • UI • CREATIVE DEV</p>
          <h1>Hi, I’m Fran</h1>
          <p className="hero-text">
            Computer Science student building clean, aesthetic, and functional
            interfaces with a focus on frontend development and user experience.
          </p>

          <div className="hero-buttons">
            <a href="/Fran_CV.pdf" download className="secondary-btn">
              Download CV
            </a>
          </div>

          <div className="blob blob-right"></div>
        </section>

        <section className="section-window">
          <div className="section-header">
            <div className="window-dots small">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>WWW.ABOUT_ME</p>
          </div>

          <div className="about-section">
            <div className="about-text">
              <h2>FRAN</h2>
              <p className="subtitle">CS Student • Frontend-Focused Developer</p>

              <p>
                I’m a Computer Science student who enjoys building clean,
                creative, and functional interfaces. I’m especially interested
                in frontend development, UI design, and projects that combine
                both aesthetics and usability.
              </p>

              <p>
                I’ve worked on web, Android, and machine learning projects, and
                I like turning ideas into interfaces that feel polished and easy
                to use.
              </p>

              <p className="location">Philippines</p>
            </div>

            <div className="about-badge">
              <div className="badge-circle">
                <span>F</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-window">
          <div className="section-header">
            <div className="window-dots small">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>WWW.SKILLS</p>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-card" key={category}>
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-window">
          <div className="section-header">
            <div className="window-dots small">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>WWW.PROJECTS</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="section-window">
          <div className="section-header">
            <div className="window-dots small">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>WWW.CONTACT</p>
          </div>

          <div className="contact-box">
            <p>
              I’m open to frontend, web, and creative development opportunities.
            </p>
            <div className="contact-actions">
              <a
                href="mailto:maria.solomon@ciit.edu.ph"
                className="primary-btn"
              >
                Email Me
              </a>
              <a
                href="https://github.com/Frantatas"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;