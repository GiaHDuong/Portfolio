import React, { useState } from "react";

export default function FunFacts() {
  // Define state to keep track of active faq
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle active class
  const toggleActive = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="funfact">
      <p className="section__text__p1">Wanna know my</p>
      <h1 className="title">FUN FACTS</h1>
      <div className="about-containers">
        <div className="details-container color-container">
          {/* Mapping through faqs */}
          {faqs.map((faq, index) => (
            <div
              className={`faq ${index === activeIndex ? "active" : ""}`}
              key={index}
              onClick={() => toggleActive(index)}
            >
              <div className="question">
                <h2 className="experience-sub-title project-title">
                  {faq.question}
                </h2>
                <svg width="15" height="10" viewBox="0 42 25">
                  <path
                    d="M3 3L21 21L39 3"
                    stroke="white"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="article-container">
                <div className="answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Define faqs data
const faqs = [
  {
    question: "If you could go anywhere, where would it be?",
    answer:
      "I'll visit Oxford University. Then I'll travel all around the world (= ",
  },
  {
    question: "Do you have any hidden talents?",
    answer:
      "I can read (aka scan) 2000 words of novel in 3mins. Only if that's my favorite ones!",
  },
  {
    question: "Describe your perfect day.",
    answer:
      "Oh yeah, this one can't go wrong. My perfect day is when I get to sleep in all day, reading manga, and indulging in gelato and chicken wings. However, there is one exception: I get to go to a cottage or a mountain, lie on the ground, and feel everything surrounding me!",
  },
  {
    question: "Actually...",
    answer:
      "I've been quite busy lately (aka procrastinating). I only began working on my task for this week—the portfolio website v2—yesterday, and I ended up staying awake until 3 am to catch up. Same as last week's task. =D",
  },
];
