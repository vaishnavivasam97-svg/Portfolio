const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <div className="project-header">
            <h3>VS Women Clinic</h3>
            <span className="project-type">Healthcare</span>
          </div>

          <p className="project-desc">
            Responsive gynecology clinic website with clean UI,
            optimized performance, and mobile-first design.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>Dr. Srinivas Dodla</h3>
            <span className="project-type">Hospital</span>
          </div>

          <p className="project-desc">
            Hospital website with service sections, doctor profiles,
            and cross-browser compatible layouts.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>Cyonics PRP Device</h3>
            <span className="project-type">Medical Device</span>
          </div>

          <p className="project-desc">
            Promotional website with interactive UI elements
            and improved user engagement.
          </p>

          <div className="project-tech">
            <span>JavaScript</span>
            <span>Swiper JS</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>Life Care Hospital</h3>
            <span className="project-type">Healthcare</span>
          </div>

          <p className="project-desc">
            Mobile-first hospital services portal with reusable
            UI components and clean layouts.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>Responsive</span>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3>ReGenM Clinic</h3>
            <span className="project-type">Clinic</span>
          </div>

          <p className="project-desc">
            Multi-page clinic website with consistent layouts
            and cross-browser support.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
