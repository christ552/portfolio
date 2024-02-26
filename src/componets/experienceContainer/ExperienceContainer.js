import React from "react";
import "./ExperienceContainer.css";
import { Element } from "react-scroll";
import Experience from "../experienceBox/Experience";
const ExperienceContainer = () => {
  return (
    <Element className="experiencecontainer" id="exp">
      <h1>Experience</h1>
      <div className="experienceContainer_info">
        <Experience number="+10" title="Clients" />
        <Experience
          number="60+"
          title="Projects"
          style={{ backgroundColor: "#f64c08" }}
        />
        <Experience number="6+" title="Years teaching" />
        <Experience number="600+" title="Students" />
      </div>
    </Element>
  );
};

export default ExperienceContainer;
