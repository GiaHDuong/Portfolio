export default function DesktopNav() {
  return (
    <nav id="desktop-nav">
      <div className="logo">
        <img src="public/icon.svg" alt="Icon" />
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
