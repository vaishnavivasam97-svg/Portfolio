import profile from "../assets/photo.jpeg"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <span className="badge">FRONTEND DEVELOPER / UI DEVELOPER</span>

        <h1>
          Hello, I'm <span>Vaishnavi Vasam</span>
        </h1>

        <p>
          Frontend Developer with 3+ years of experience building scalable,
          responsive, and high-performance healthcare and business websites.
          Specialized in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.
        </p>

        <div className="buttons">
          <a
           href="/Portfolio/Vaishnavi_Vasam_Frontend_Developer.pdf"
            download
             className="btn primary"
            >
            Download CV
           </a>
            <a
             href="www.linkedin.com/in/vaishnavi-vasam-a754a036a"
                  className="btn secondary"
             target="_blank"
            rel="noopener noreferrer"
              >
               LinkedIn
             </a>
          <a href="#contact" className="btn secondary">
            Hire Me
          </a>
        </div>
      </div>

      <div className="hero-img">
        <div className="glow-circle">
          <img src={profile} alt="Vaishnavi Vasam" />
        </div>
      </div>
    </section>
  )
}

export default Hero
