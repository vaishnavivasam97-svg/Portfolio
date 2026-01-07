const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>

      <div className="experience-card">
        <div className="exp-header">
          <div>
            <h3>Frontend Developer</h3>
            <p className="company">Irimed Technologies</p>
          </div>
          <span className="duration">Nov 2022 – Present</span>
        </div>

        <p className="exp-summary">
          Frontend Developer with hands-on experience in building responsive,
          scalable healthcare web applications with modern UI practices.
        </p>

        <div className="responsibility-grid">
          <div className="resp-item">
            Developed responsive UI using HTML, CSS, JavaScript, Bootstrap,
            Tailwind CSS, and React.
          </div>

          <div className="resp-item">
            Converted Figma designs into pixel-perfect and cross-browser
            compatible web pages.
          </div>

          <div className="resp-item">
            Built reusable UI components to improve consistency and
            development efficiency.
          </div>

          <div className="resp-item">
            Optimized website performance and improved page load times.
          </div>

          <div className="resp-item">
            Implemented client-side validations to enhance user experience.
          </div>

          <div className="resp-item">
            Collaborated with backend and QA teams to integrate REST APIs.
          </div>

          <div className="resp-item">
            Followed mobile-first approach for seamless multi-device support.
          </div>

          <div className="resp-item">
            Fixed UI bugs and layout issues during testing and production.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
