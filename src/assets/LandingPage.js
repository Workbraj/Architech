import React, { useEffect } from "react";
import "./LandingPage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import Footer from "./footer";
import buildingImage from "./images/landingpage.png";
import aboutImage1 from "./images/about1.png";
import aboutImage2 from "./images/about2.png";
import aboutImage3 from "./images/about3.png";
import sampleImage from "./images/sample.png";
import sampleImage1 from "./images/sample1.png";
import sampleImage2 from "./images/sample2.png";
import sampleImage3 from "./images/sample3.png";
import sampleImage4 from "./images/sample4.png";
import contactImage from "./images/Contact.png";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="container">
      <Navbar />
      <section id="main" className="project-overview" data-aos="fade-up">
        <div className="project-info">
          <h1>
            PROJECT
            <br />
            Architech
          </h1>
          <div className="project-controls">
            <button>&lt;</button>
            <span>01 / 02</span>
            <button>&gt;</button>
          </div>
        </div>
        <div className="project-image">
          <img src={buildingImage} alt="Project" />
          <button href="#" className="view-project">
            VIEW PROJECT<span>&rarr;</span>
          </button>
        </div>
      </section>
      <section id="about" className="about" data-aos="fade-up">
        <div className="about-images">
          <div className="aboutImage1 overflow zoom-hover">
            <img src={aboutImage1} alt="About" />
          </div>
          <div className="aboutImage2 overflow zoom-hover">
            <img src={aboutImage2} alt="About" />
          </div>
          <div className="aboutImage3 overflow zoom-hover">
            <img src={aboutImage3} alt="About" />
          </div>
        </div>
        <div className="about-text">
          <h2>About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a href="#">Read More</a>
        </div>
      </section>
      <section className="mission" data-aos="fade-up">
        <h2>Main Focus/Mission Statement</h2>
        <div className="mission-statements">
          <div className="mission-statement">
            <h3>1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="mission-statement">
            <h3>2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="projects" data-aos="fade-up">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="overflow project-image-1 zoom-hover">
            <img src={sampleImage} alt="Sample Project" />
          </div>
          <div className="overflow project-image-2 zoom-hover">
            <img src={sampleImage1} alt="Project" />
          </div>
          <div className="overflow project-image-3 zoom-hover">
            <img src={sampleImage2} alt="Project" />
          </div>
          <div className="overflow project-image-4 zoom-hover">
            <img src={sampleImage3} alt="Project" />
          </div>
          <div className="overflow project-image-5 zoom-hover">
            <img src={sampleImage4} alt="Project" />
          </div>
        </div>
        <div className="all-projects">
          <a href="#" className="all-projects-btn">
            All Projects &rarr;
          </a>
        </div>
      </section>
      <section id="contacts" className="contact" data-aos="fade-up">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="E-mail" required />
            <input type="text" placeholder="Interested In" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Email</button>
          </form>
          <div className="contact-image">
            <img src={contactImage} alt="Contact" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
