export default function HeroSection() {
  return (
    <section id="profile">
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Gia Duong</h1>
        <p class="section__text__p2">Highschool Student</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            onclick="window.open('./assets/Gia-Duong-Resume.pdf')"
          >
            Download CV
          </button>
          <button class="btn btn-color-1" onclick="location.href='#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/Img/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
            onclick="location.href='https://www.linkedin.com/in/gia-duong-70804824b/'"
          />
          <img
            src="./assets/Img/github.png"
            alt="My Github profile"
            class="icon"
            onclick="location.href='https://github.com/GiaHDuong'"
          />
        </div>
      </div>
      <div class="section__pic-container">
        <img src="./assets/Img/giaphoto.png" alt="Gia Duong profile picture" />
      </div>
    </section>
  );
}
