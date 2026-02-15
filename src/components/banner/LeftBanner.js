import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

// LeftBanner component with typewriter effect and media integration
const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "Professional Coder.",
        "Full Stack Developer.",
        "UI Designer.",
        "Web Developer.",
        "Software Engineer.",
        "React Developer.",
        "Frontend Developer.",
        "Backend Developer.",
        "Tech Enthusiast.",
        "Creative Coder.",
        "Digital Thinker.",
      ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 50,
      delaySpeed: 2000,
    });

    // Render the component
    // This component displays a welcome message, a typewriter effect for the title,
    // a brief introduction, and a media component.
    return (
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal">WELCOME TO MY Portfolio</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Sajal Khandelwal</span>
          </h1>
          <h2 className="text-4xl font-bold text-pink">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|*"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
  I am a Software Engineer specializing in Next.js, React.js, and TypeScript , Nodejs , Express.js , MongoDB . With experience in building scalable full-stack web applications,
  I focus on creating responsive, high-performance interfaces and integrating RESTful APIs and WebSocket-based real-time features.
  I'm passionate about optimizing performance and delivering exceptional user experiences.
          </p>
        </div>
        <Media />
      </div>
    );
}

export default LeftBanner