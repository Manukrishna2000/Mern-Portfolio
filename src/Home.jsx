import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import person from "./file.png";
import Projects from "./Projects";
import Skill from "./Skill";
import About from "./About";
import { Experience } from "./Experience";
import Education from "./Education";

export const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const text = "Manu Krishna A P";
    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText(text.substring(0, index));
      index++;

      if (index > text.length) {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust typing speed here
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className="background">
        <div className="bg-black/35 min-h-screen flex flex-col">
          <div className="fixed w-full bg-black pt-3 flex items-center z-10">
            <div className="pl-6 md:pl-20 text-3xl md:text-5xl font-mono">
              MK
            </div>
            <div className="flex-grow flex justify-end pr-6 md:pr-20">
              <button
                className="text-white text-2xl md:text-3xl md:hidden"
                onClick={toggleNav}
              >
                {isNavVisible ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <div
              className={`${
                isNavVisible ? "flex" : "hidden"
              } md:flex flex-col md:flex-row items-center gap-6 md:gap-10 text-lg md:text-base text-white/65 bg-black/75 md:bg-transparent p-5 md:p-0 absolute md:relative top-[80px] right-[20px] md:top-0 md:right-0 w-full md:w-auto`}
            >
              <a href="#skill">
                <button className="hover:text-white">Skill</button>
              </a>
              <a href="#project">
                <button className="hover:text-white">Projects</button>
              </a>
              <a href="#about">
                <button className="hover:text-white">About</button>
              </a>
              <a href="#experience">
                <button className="hover:text-white">Experience</button>
              </a>
              <a href="#education">
                <button className="hover:text-white pr-4">Education</button>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow  px-6 md:px-20">
            <div>
              {/* <img 
                src={person}
                className="w-[300px] h-[300px] hover:scale-105"
                alt=""
              /> */}
            </div>
            <div className="w-full md:w-[60%]  text-center">
              <div className="text-white/65 text-4xl md:text-5xl">{typedText}</div>
              <div className="text-white/65 text-base md:text-xl mt-4">
                Experienced MERN stack developer specializing in building robust
                web applications. Proficient in React.js, Node.js, Express.js, and
                MongoDB. Passionate about crafting seamless user experiences and
                solving complex problems. Let's build something amazing together!
              </div>
              <div className="mt-4 flex justify-center gap-4 text-white/65">
                <a href="https://www.linkedin.com/in/manu-krishna-13b431197/" target="_blank">
                  <FaLinkedin size={30} />
                  </a>
                <a href="https://github.com/Manukrishna2000
" target="_blank">
                <FaGithub size={30} />
                </a>
                {/* <a href="manukrishnaap@gmail.com" target="_blank">
                <SiGmail size={30} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/55 py-16">
        <div id="project" className="pb-16">
          <Projects />
        </div>
        <div id="skill" className="pb-16">
          <Skill />
        </div>
        <div id="about" className="pb-16">
          <About />
        </div>
        <div id="experience" className="pb-16">
          <Experience />
        </div>
        <div id="education" className="pb-16">
          <Education />
        </div>
      </div>
    </>
  );
};
