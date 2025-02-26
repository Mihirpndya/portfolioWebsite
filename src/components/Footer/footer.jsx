import React from 'react';
import './footer.css';
import { resume } from '../../utility/resumeBuilder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='p-6 mt-16 flex flex-col gap-10'>
      <div className='container mx-auto flex justify-center gap-5 relative 2xl:mb-10 md:gap-10'>
        {resume.links.linkedIn && (
          <a href={resume.links.linkedIn} target='_blank' rel='noreferrer'>
            <button className='btn footer-button'>
              <FontAwesomeIcon icon={faLinkedinIn} fontSize={30} />
            </button>
          </a>
        )}
        {resume.links.github && (
          <a href={resume.links.github} target='_blank' rel='noreferrer'>
            <button className='btn footer-button'>
              <FontAwesomeIcon icon={faGithub} fontSize={30} />
            </button>
          </a>
        )}
        {resume.links.facebook && (
          <a href={resume.links.facebook} target='_blank' rel='noreferrer'>
            <button className='btn footer-button'>
              <FontAwesomeIcon icon={faFacebook} fontSize={30} />
            </button>
          </a>
        )}
        {resume.links.instagram && (
          <a href={resume.links.instagram} target='_blank' rel='noreferrer'>
            <button className='btn footer-button'>
              <FontAwesomeIcon icon={faInstagram} fontSize={30} />
            </button>
          </a>
        )}
      </div>
      <div className='text-center mt-14'>
        | Copyright ©{new Date().getFullYear()} {resume.name} All rights
        reserved |
      </div>
    </div>
  );
};

export default Footer;
