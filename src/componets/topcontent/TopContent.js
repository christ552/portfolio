import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topcontent">
      <div className="topcontent_container">
        <h1>M Christy Justin LAMBERT</h1>
        <p>Fullstack web dévélopeur</p>
        <a
          href="https://drive.google.com/file/d/12YDsllByl7J9tWgq0pxKaUOtj6qIQK44/view?usp=drive_link"
          target="_blank"
        >
          <button className="topcontent_downloadbutton">Télécharger CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topcontent_workbutton"> Mes projets</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
