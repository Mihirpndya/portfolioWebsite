/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./projects.css";
import { resume } from "../../utility/resumeBuilder";

const Projects = ({ reference }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(reference.current);
      }
    });
    observer.observe(reference.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={reference} className={isVisible ? "is-visible" : ""}>
      <div className="p-6 mt-10">
        <div className="container mx-auto flex flex-col text-center relative 2xl:mb-10">
          <h1 className="mirror right-0">My Projects</h1>
          <h1 className="header text-5xl pt-4 mb-6">My Projects</h1>
        </div>
        <div
          className={`flex justify-center pt-10 mx-auto max-w-md flex-wrap md:flex-nowrap md:max-w-full`}
        >
          {resume.projects.map((details, index) => (
            <a
              key={details.id || index}
              href={details.link}
              target="_blank"
              className={`project-div project-card text-center ${
                resume.projects.length === 1 ? "w-full" : "w-full md:w-96"
              }`}
              rel="noreferrer"
            >
              <h3 className="">{details.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
