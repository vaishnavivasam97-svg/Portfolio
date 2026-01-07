const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h3>Vaishnavi Vasam</h3>
          <p>
            Frontend Developer passionate about building responsive,
            user-friendly web applications.
          </p>
        </div>

        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Connect</h4>
          <div className="footer-socials">
  <a
    href="https://www.linkedin.com/in/vaishnavi-vasam-a754a036a/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a href="mailto:vaishnavi.vasam97@gmail.com">
    Email
  </a>

  <a href="tel:+916304036903">
    Call
  </a>
</div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vaishnavi Vasam. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
