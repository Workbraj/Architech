import React from "react";
import "./footer.css";
import logo from "./images/footer/logo.svg";

const Footer = () => {
  return (
    <footer data-aos="fade-up">
      <section className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Digital Project Logo" />
        </div>
        <div className="footer-info">
          <div>Information</div>
          <ul>
            <li>
              <a href="#main">Main</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#certifications">Certifications</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <div>Contacts</div>
          <address>
            <p>
              <i className="fa fa-map-marker"></i> 1234 Sample Street, Austin
              Texas 78704
            </p>
            <p>
              <i className="fa fa-phone"></i> 512.333.2222
            </p>
            <p>
              <i className="fa fa-envelope"></i> sampleemail@gmail.com
            </p>
          </address>
        </div>
        <div className="footer-social">
          <div>Social Media</div>
          <ul>
            <li>
              <a href="#facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#pinterest">
                <i className="fa fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="footer-bottom">
        <p>&copy; 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
