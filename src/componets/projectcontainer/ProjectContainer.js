import React from "react";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import Project from "../project/Project";

const ProjectContainer = () => {
  const projects = [
    {
      title: "project1234",
      desc: "The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects,",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvsAfsZnLFehH49IdyiEganywVsUaGMXhgeScaPEFRfdPKwhrWbMSZl06taccJF551Hw&usqp=CAU",
      link: "www.google.fr",
    },
    {
      title: "project1234",
      desc: "The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvsAfsZnLFehH49IdyiEganywVsUaGMXhgeScaPEFRfdPKwhrWbMSZl06taccJF551Hw&usqp=CAU",
      link: "#",
    },
    {
      title: "project1234",
      desc: "The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvsAfsZnLFehH49IdyiEganywVsUaGMXhgeScaPEFRfdPKwhrWbMSZl06taccJF551Hw&usqp=CAU",
      link: "#",
    },
    {
      title: "project1234",
      desc: "The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects,",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvsAfsZnLFehH49IdyiEganywVsUaGMXhgeScaPEFRfdPKwhrWbMSZl06taccJF551Hw&usqp=CAU",
      link: "www.google.fr",
    },
    {
      title: "project1234",
      desc: "The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects,",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvsAfsZnLFehH49IdyiEganywVsUaGMXhgeScaPEFRfdPKwhrWbMSZl06taccJF551Hw&usqp=CAU",
      link: "www.google.fr",
    },
    {
      title: "project1234",
      desc: "The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects,",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvsAfsZnLFehH49IdyiEganywVsUaGMXhgeScaPEFRfdPKwhrWbMSZl06taccJF551Hw&usqp=CAU",
      link: "www.google.fr",
    },
    {
      title: "project1234",
      desc: "The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects,",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvsAfsZnLFehH49IdyiEganywVsUaGMXhgeScaPEFRfdPKwhrWbMSZl06taccJF551Hw&usqp=CAU",
      link: "www.google.fr",
    },
  ];
  return (
    <Element className="projectContainer" id="projects">
      <h1>Les projets</h1>
      <p>We could create multiple state Hooks to track individual values.</p>

      <div className="projectContainer_projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
