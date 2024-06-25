import React from "react";
import "./navbar.css";
import logo from "./images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <a href="#main" className="hvr-link">
            Main
          </a>
          <a href="#about" className="hvr-link">
            About
          </a>
          <a href="#projects" className="hvr-link">
            Projects
          </a>
          <a href="#certifications" className="hvr-link">
            Certifications
          </a>
          <a href="#contacts" className="hvr-link">
            Contacts
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
