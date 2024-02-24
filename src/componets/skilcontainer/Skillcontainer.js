import React from "react";
import "./Skillcontainer.css";
import { Element } from "react-scroll";
import Skillsimg2 from "../../assert/images/Skillsimg.png";
import { LinearProgress } from "@mui/material";

const Skillcontainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className="skillcontainer_image">
        <img src={Skillsimg2} alt="Competences" />
      </div>
      <div className="skillcontainer_text">
        <h2>COMPÉTENCES</h2>
        <div className=" skillcontainer_skillsets">
          <h5>React</h5>
          <div className= "skillcontainer_slider skillcontainer_slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className=" skillcontainer_skillsets">
          <h5>Node js</h5>
          <div className="skillcontainer_slider skillcontainer_slider2">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className=" skillcontainer_skillsets">
          <h5>React Nativ</h5>
          <div className="skillcontainer_slider skillcontainer_slider3">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className=" skillcontainer_skillsets">
          <h5>mysql</h5>
          <div className="skillcontainer_slider skillcontainer_slider4">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillcontainer_skillsets">
          <h5>Node js</h5>
          <div className="skillcontainer_slider skillcontainer_slider5">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className=" skillcontainer_skillsets">
          <h5>Node js</h5>
          <div className="skillcontainer_slider skillcontainer_slider6">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skillcontainer;
