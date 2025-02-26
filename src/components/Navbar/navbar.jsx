import React, { useState } from "react";
import "./navbar.css";

const Navbar = ({ refs }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((prevVal) => !prevVal);
  };
  return (
    <nav className="p-6 sticky">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="text-white font-black text-xl">
            <div to="/">
              <span>Mihir Pandya</span>
            </div>
          </div>

          <div className="flex md:hidden">
            <button onClick={toggleNav}>
              <div className="flex items-center">
                <div className="space-y-1.5 top-0 pr-6">
                  <span className="block h-35 w-6 bg-gray-600"></span>
                  <span className="block h-0.5 w-6 bg-gray-600"></span>
                  <span className="block h-0.5 w-6 bg-gray-600"></span>
                </div>
                <span className="font-bold">MENU</span>
              </div>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div
              onClick={() =>
                refs.home.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="on-hover text-white">Home</span>
            </div>
            <div
              onClick={() =>
                refs.resume.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="on-hover text-white">Resume</span>
            </div>
            <div
              onClick={() =>
                refs.skills.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="on-hover text-white">Skills</span>
            </div>
            <div
              onClick={() =>
                refs.projects.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="on-hover text-white">Projects</span>
            </div>
            <div
              onClick={() =>
                refs.contactme.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="on-hover text-white">Contact</span>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col md:hidden space-y-4 ham-transition ${
            isNavOpen ? "ham-show" : "ham-hide"
          }`}
        >
          <div
            onClick={() =>
              refs.home.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="on-hover text-white">Home</span>
          </div>
          <div
            onClick={() =>
              refs.resume.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="on-hover text-white">Resume</span>
          </div>
          <div
            onClick={() =>
              refs.skills.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="on-hover text-white">Skills</span>
          </div>
          <div
            onClick={() =>
              refs.projects.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="on-hover text-white">Projects</span>
          </div>
          <div
            onClick={() =>
              refs.contactme.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="on-hover text-white">Contact</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
