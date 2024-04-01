export default function About() {
  return (
    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">ABOUT ME</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src="./assets/Img/about-pic.png"
            alt="Profile picture"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="text-container">
            <p>Gelato solves everything!</p>
            <p>-Gia Duong-</p>
          </div>
          <div class="about-containers">
            <div class="details-container">
              <img
                src="./assets/Img/experience.png"
                alt="Experience icon"
                class="icon"
              />
              <h3>EXPERIENCE</h3>
              <ul>
                <li>1 year of Java</li>
                <li>3 years of Python (& Pygame)</li>
                <li>1 year of Competitive Programming in Python, C++</li>
              </ul>
            </div>
            <div class="details-container">
              <img
                src="./assets/Img/education.png"
                alt="Education icon"
                class="icon"
              />
              <h3>EDUCATION</h3>
              <ul>
                <li>Joseph Howe Sr School (2019 - 2020)</li>
                <li>Etobicoke Collegiate Institute (2020 - On going)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/Img/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='#experience'"
      />
    </section>
  );
}
