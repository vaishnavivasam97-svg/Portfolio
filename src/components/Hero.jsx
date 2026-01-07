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
          <a href="/Vaishnavi_Vasam_Frontend_Developer.pdf" className="btn primary" download>
            Download CV
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
