import React, { useState } from "react";
import LogoSVG from "../../../public/assets/img/icon1.svg";

function HamburgerNav() {
  // Define state to keep track of Mobile Navigation
  const [menuOpen, setMenuOpen] = useState(false);

  // Function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="hamburger-nav">
      <div className="logo">
        <img src={LogoSVG} alt="Logo" />
      </div>
      <div className="hamburger-menu">
        <div
          className={`hamburger-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HamburgerNav;
