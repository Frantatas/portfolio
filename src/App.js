import "./App.css";

function App() {
  const projects = [
    {
      title: "Retail Intelligence System",
      description:
        "A machine learning-based retail analytics project using classification models and data-driven insights.",
      link: "https://github.com/Frantatas/Retail-Intelligence-System",
    },
    {
      title: "Thrift App",
      description:
        "An Android thrift and clothing swap app for browsing, posting, and managing swap requests.",
      link: "https://github.com/Frantatas/thrift",
    },
    {
      title: "CIIT Marketplace",
      description:
        "Frontend development for a student marketplace platform focused on UI, core pages, and overall user experience.",
      link: "https://github.com/berired/CIIT-Marketplace",
    },
  ];

  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Kotlin",
    "Java",
    "Git & GitHub",
  ];

  return (
    <div className="page">
      <div className="portfolio-window">
        <div className="window-bar main-bar">
          <div className="window-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <h1>MY PORTFOLIO</h1>
        </div>

        <div className="content">
          <section className="hero-banner">
            <div className="hero-shape hero-shape-left"></div>
            <div className="hero-shape hero-shape-right"></div>
            <div className="hero-star hero-star-2">✦</div>

            <div className="hero-banner-text">
              <p className="hero-tag">FRONTEND • UI • CREATIVE DEV</p>
              <h2>
                Hi, I’m <span>Fran</span>
              </h2>
              <p className="hero-description">
                Computer Science student building clean, aesthetic, and
                functional interfaces with a focus on frontend development and
                user experience.
              </p>

              <div className="hero-actions">
                <a
                  className="primary-btn"
                  href="https://github.com/Frantatas"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                </a>
                <a className="secondary-btn" href="mailto:maria.solomon@ciit.edu.ph">
                  Contact Me
                </a>
              </div>
            </div>
          </section>

          <section className="about-card">
            <div className="window-bar small-bar">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <h2>WWW.ABOUT_ME</h2>
            </div>

            <div className="about-inner">
              <div className="about-text">
                <h3>FRAN</h3>
                <p className="subtitle">CS Student • Frontend-Focused Developer</p>

                <p>
                  I’m a Computer Science student who enjoys building clean,
                  creative, and functional interfaces. I’m especially interested
                  in frontend development, UI design, and projects that combine
                  both aesthetics and usability.
                </p>

                <p>
                  I’ve worked on web, Android, and machine learning projects,
                  and I like turning ideas into interfaces that feel polished
                  and easy to use.
                </p>

                <div className="mini-info">
                  <p>📍 Philippines</p>
                  <p>💻 Interested in frontend and creative development</p>
                  <p>🎨 Likes dark aesthetics, purple accents, and clean layouts</p>
                </div>
              </div>

              <div className="avatar-box">
                <div className="avatar-circle">F</div>
                <div className="avatar-ring"></div>
              </div>
            </div>
          </section>

          <section className="info-grid">
            <div className="panel accent-panel">
              <h2>LINKS</h2>
              <div className="link-list">
                <a
                  href="https://github.com/Frantatas"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a href="mailto:maria.solomon@ciit.edu.ph">Email</a>
              </div>
            </div>

            <div className="panel">
              <h2>ABOUT</h2>
              <p>
                I like building visually appealing interfaces and improving user
                experience through layout, styling, and clean structure.
              </p>
            </div>

            <div className="panel accent-panel">
              <h2>SKILLS</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="panel projects-panel">
            <div className="section-heading">
              <div>
                <p className="section-label">SELECTED WORK</p>
                <h2>PROJECTS</h2>
              </div>
              <p className="section-note">Some of the projects I did this year.</p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="project-top">
                    <span className="project-number">0{index + 1}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="bottom-row">
            <div className="panel half-panel">
              <h2>INTERESTS</h2>
              <ul className="styled-list">
                <li>Frontend Development</li>
                <li>UI Design</li>
                <li>Creative Coding</li>
                <li>Android Projects</li>
              </ul>
            </div>

            <div className="panel half-panel contact-panel">
              <h2>CONTACT</h2>
              <p>GitHub: Frantatas</p>
              <p>Email: youremail@example.com</p>
              <p>Built with React + GitHub Pages</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;