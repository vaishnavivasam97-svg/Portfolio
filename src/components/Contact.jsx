const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Let’s work together</h3>
          <p>
            I’m open to frontend developer roles and freelance opportunities.
            Feel free to reach out for collaboration or project discussions.
          </p>
          <div className="info-item">
  <span className="icon">📧</span>
  <a
    href="mailto:vaishnavi.vasam97@gmail.com"
    className="text"
  >
    vaishnavi.vasam97@gmail.com
  </a>
</div>

<div className="info-item">
  <span className="icon">📞</span>
  <a
    href="tel:+916304036903"
    className="text"
  >
    +91 6304036903
  </a>
</div>

<div className="info-item">
  <span className="icon">📍</span>
  <a
    href="https://www.google.com/maps/search/?api=1&query=GP+Rao+Estates+Kukatpally+Hyderabad"
    target="_blank"
    rel="noopener noreferrer"
    className="text"
  >
    GP Rao Estates, Kukatpally, Hyderabad
  </a>
</div>

<div className="info-item">
  <span className="icon">💼</span>
  <a
    href="https://www.linkedin.com/in/vaishnavi-vasam-a754a036a/"
    target="_blank"
    rel="noopener noreferrer"
    className="text"
  >
    LinkedIn Profile
  </a>
</div>





        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact
