/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./contactme.css";
import { resume } from "../../utility/resumeBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const ContactMe = ({ reference }) => {
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
          <h1 className="mirror right-0">Contact Me</h1>
          <h1 className="header text-5xl pt-4 mb-16">Contact Me</h1>
        </div>
        <div className="container mx-auto !mt-16 flex flex-col gap-24 justify-center 2xl:mb-10 lg:gap-48 md:flex-row">
          <div className="flex flex-col items-center text-center">
            <button className="contact-card">
              <FontAwesomeIcon icon={faMap} fontSize={32} className="yellow" />
            </button>
            <h3 className="contact-card-text mb-4">Address</h3>
            <p>{resume.address}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <button className="contact-card">
              <FontAwesomeIcon
                icon={faPhone}
                fontSize={32}
                className="yellow"
              />
            </button>

            <h3 className="contact-card-text mb-4">Contact Number</h3>
            <a className="yellowhov" href={`tel:${resume.Phone}`}>
              <p>{resume.Phone}</p>
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <button className="contact-card">
              <FontAwesomeIcon
                icon={faPaperPlane}
                fontSize={32}
                className="yellow"
              />
            </button>
            <h3 className="contact-card-text mb-4">Email Address</h3>
            <a className="yellowhov" href={`mailto:${resume.email}`}>
              <p>{resume.email}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
