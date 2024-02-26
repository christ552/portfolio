import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact_container">
        <p>
          Email: <span>christiyustin@gmail.com</span>
        </p>
        <p>
          GitHub Username: <span>christ552</span>
        </p>
        <div className="contact_icons">
          <a href="#">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href="#">
            <IconButton>
              <Twitter />
            </IconButton>
          </a>
          <a href="#">
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a href="#">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
