import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

// This component is used to display the left side of the contact form
// It contains the contact image, name, designation, description, phone number,
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />

      {/* This section contains the contact details */}
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sajal Khandelwal</h3>
        <p className="text-lg font-normal text-gray-400">Software Engineer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Software Engineer with expertise in Next.js, React.js, and TypeScript.
          I specialize in developing scalable full-stack web applications with
          responsive interfaces and real-time features. Experienced in CI/CD
          workflows, GitLab, and AWS for monitoring and deployment.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9936616471</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sajalsk247@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
              href="https://github.com/sajalsk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a 
              href="https://leetcode.com/sajalsk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaCode />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
