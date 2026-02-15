import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaCode, FaDownload, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>{/* <img src={logo} alt="logo" /> */}</div>
      <div className="mr-[850px]">
        // <a
        //   href="https://drive.google.com/uc?export=download&id=186rao2unEtmeo16XREa5DNOj69SC3kA3"
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   className="w-52 h-14 bg-gradient-to-r from-[#1e2024] to-[#23272b] hover:from-designColor hover:to-designColor border border-designColor text-designColor hover:text-white rounded-lg flex items-center justify-center gap-2 font-titleFont text-base font-medium transition-all duration-300 hover:scale-105 shadow-shadowOne hover:shadow-lg"
        // >
          {/* <FaDownload className="text-lg" /> */}
          <div className="flex justify-center items-center gap-4">
            <span>Resume</span>
            <span>
              <FaDownload />{" "}
            </span>
          </div>
        // </a>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                {/* <img className="w-32" src={logo} alt="logo" /> */}
                <p className="text-sm text-gray-400 mt-2">
                  I am a dedicated developer passionate about creating digital
                  experiences that resonate with users. Explore my portfolio to
                  discover innovative solutions and creative designs that bring
                  ideas to life.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <a
                      href="https://www.linkedin.com/in/sajal-khandelwal-86552220a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a
                      href="https://leetcode.com/u/Sajalsk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCode />
                    </a>
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
