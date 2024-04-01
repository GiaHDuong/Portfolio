export default function Contact() {
  return (
    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">CONTACT ME</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="./assets/Img/email.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:giaduong5906@gmail.com" class="email-link">
              giaduong5906@gmail.com
            </a>
          </p>
        </div>
        <div class="contact-info-container">
          <img
            src="./assets/Img/linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/gia-duong-70804824b/"
              class="linkedIn-link"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
