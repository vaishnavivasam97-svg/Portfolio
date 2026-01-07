const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-wrapper">

        {/* FRONTEND */}
        <div className="skill-box">
          <h3>Frontend</h3>

          <div className="skill">
            <span>HTML5</span>
            <div className="bar"><div className="fill html"></div></div>
          </div>

          <div className="skill">
            <span>CSS3</span>
            <div className="bar"><div className="fill css"></div></div>
          </div>

          <div className="skill">
            <span>JavaScript</span>
            <div className="bar"><div className="fill js"></div></div>
          </div>

          <div className="skill">
            <span>React / JQuery</span>
            <div className="bar"><div className="fill react"></div></div>
          </div>

          <div className="skill">
            <span>Bootstrap / Tailwind</span>
            <div className="bar"><div className="fill ui"></div></div>
          </div>
        </div>

        {/* BACKEND */}
<div className="skill-box">
  <h3>Backend</h3>

  <div className="skill">
    <span>Python</span>
    <div className="bar"><div className="fill python"></div></div>
  </div>

  <div className="skill">
    <span>Django</span>
    <div className="bar"><div className="fill django"></div></div>
  </div>

  <div className="skill">
    <span>Node.js (Basics)</span>
    <div className="bar"><div className="fill node"></div></div>
  </div>

  <div className="skill">
    <span>REST APIs</span>
    <div className="bar"><div className="fill api"></div></div>
  </div>
</div>


        {/* DATABASE & TOOLS */}
<div className="skill-box">
  <h3>Databases & Tools</h3>

  <div className="skill">
    <span>MySQL</span>
    <div className="bar"><div className="fill mysql"></div></div>
  </div>

  <div className="skill">
    <span>MongoDB</span>
    <div className="bar"><div className="fill mongo"></div></div>
  </div>

  <div className="skill">
    <span>Git & GitHub</span>
    <div className="bar"><div className="fill git"></div></div>
  </div>

  <div className="skill">
    <span>Photoshop</span>
    <div className="bar"><div className="fill photoshop"></div></div>
  </div>

  <div className="skill">
    <span>Canva</span>
    <div className="bar"><div className="fill canva"></div></div>
  </div>
</div>


      </div>
    </section>
  )
}

export default Skills
