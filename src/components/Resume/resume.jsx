/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./resume.css";
import { resume } from "../../utility/resumeBuilder";

const Resume = ({ reference }) => {
  const [isVisible, setVisible] = useState(false);
  const [educationHoverIndex, setEducationHoverIndex] = useState(-1);
  const [experienceHoverIndex, setExperienceHoverIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio >= 0) {
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
          <h1 className="mirror right-0">Resume</h1>
          <h1 className="header text-5xl pt-4 mb-6">Resume</h1>
        </div>
        <p className="text-center">{resume.bio}</p>
        <div
          className={`flex justify-center mx-auto max-w-md flex-wrap md:max-w-full`}
        >
          {resume.experience.map((details, index) => (
            <div
              className={`resume-card`}
              key={details.id || index}
              onMouseEnter={() => {
                if (!details.description.length) return;
                setExperienceHoverIndex(index);
              }}
              onMouseLeave={() => {
                if (!details.description.length) return;
                setExperienceHoverIndex(-1);
              }}
            >
              {experienceHoverIndex !== index ? (
                <>
                  <span>{details.year}</span>
                  <h2 className="mb-4">{details.name}</h2>
                  <p className="text-xs font-semibold uppercase tracking-widest">
                    {details.affiliation}
                  </p>
                </>
              ) : (
                <div className="max-h-44 overflow-hidden text-ellipsis animate-[opacity_1s_ease-in-out_1]">
                  {details.description}
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className={`flex justify-center mx-auto max-w-md flex-wrap md:max-w-full`}
        >
          {resume.education.map((details, index) => (
            <div
              className={`resume-card`}
              key={details.id || index}
              onMouseEnter={() => {
                if (!details.description.length) return;
                setEducationHoverIndex(index);
              }}
              onMouseLeave={() => {
                if (!details.description.length) return;
                setEducationHoverIndex(-1);
              }}
            >
              {educationHoverIndex !== index ? (
                <>
                  <span>{details.year}</span>
                  <h2 className="mb-4">{details.name}</h2>
                  <p className="text-xs font-semibold uppercase tracking-widest">
                    {details.affiliation}
                  </p>
                </>
              ) : (
                <div className="max-h-44 overflow-hidden text-ellipsis animate-[opacity_1s_ease-in-out_1]">
                  {details.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href={`https://drive.google.com/uc?export=download&id=${resume.resumeDriveLinkCode}`}
        >
          <button className="btn btn-primary py-4 px-5">DOWNLOAD CV</button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
