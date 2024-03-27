import React from "react";
import LogoSVG from "../../../public/assets/img/icon1.svg";

function DesktopNav() {
  return (
    <nav id="desktop-nav">
      <div class="logo">
        <img src={LogoSVG} alt="Logo" />
      </div>
      <div>
        <ul class="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#funfact">Fun Fact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DesktopNav;
