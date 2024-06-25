import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import AOS from "aos";
import Navbar from "./navbar";
import Image1 from "./images/Projects/Project1.png";
import Image2 from "./images/Projects/Project2.png";
import Image3 from "./images/Projects/Project3.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="projects-container">
        <div className="projects-header">
          <h1>
            Our <br />
            Projects
          </h1>
        </div>
        <div className="projects-content">
          <div className="projectFirst">
            <div className="project-image">
              <img src={Image1} alt="Project Image" />
            </div>
            <div className="project-info">
              <h2>Project Name</h2>
              <p>Project Description</p>
              <Link to="/">View Project</Link>
            </div>
          </div>
        </div>
        <div className="projectSecond">
          <div className="projectimage">
            <img src={Image2} alt="Project Image" />
          </div>
          <div className="projectinfo">
            <h2>Project Name</h2>
            <p>Project Description</p>
            <Link to="/">View Project</Link>
          </div>
        </div>
        <div className="projectThird">
          <div className="projectimage">
            <img src={Image3} alt="Project Image" />
          </div>
          <div className="projectinfo">
            <h2>Project Name</h2>
            <p>Project Description</p>
            <Link to="/">View Project</Link>
          </div>
        </div>
      </div>
      <div className="projects-gallery"></div>
    </div>
  );
};

export default Projects;
