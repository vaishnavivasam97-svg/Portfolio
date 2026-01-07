import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <h2 className="logo">Vaishnavi</h2>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li> {/* ✅ ADDED */}
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="menu" onClick={() => setOpen(!open)}>☰</div>
    </header>
  )
}

export default Navbar
