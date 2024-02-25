import React from "react";
import { Link } from "react-scroll";
// I install and used 'react scroll' package for,  when i click the link or button,  focus will go to the related section, therefor the "Link"
// "https://www.npmjs.com/package/react-scroll"
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <h1>
          Développ<span>eur</span>
        </h1>
      </div>
      <div className="header_right">
        <Link to="about" smooth={true} duration={500}>
          <h4>De moi</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Compétence</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projets</h4>
        </Link>
        <Link to="exp" smooth={true} duration={500}>
          <h4>Expérience</h4>
        </Link>
        <Link to="cintact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
        <h4 className="header_rightbutton">Rejoignez-moi</h4>
      </div>
    </div>
  );
};

export default Header;
