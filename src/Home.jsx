import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import person from "./person.webp";
import Projects from "./Projects";
import Skill from "./Skill";
import About from "./About";
import { Experience } from "./Experience";
import Education from "./Education";

export const Home = () => {
  const [typedText, setTypedText] = useState("");

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

  return (
    <>
      <div className="background">
        <div className="bg-black/35 h-[600px]">
          <div className="fixed w-[100%] bg-black pt-3 flex items-center">
            <div className="pl-20 text-[50px] font-mono">MK</div>
            <div className="m-auto justify-center gap-10 flex shadow-2xl text-[15px] rounded-3xl">
              <a href="#skill">
                <button className="text-white/65 hover:text-white">
                  Skill
                </button>
              </a>
              <a href="#project">
                <button className="text-white/65 hover:text-white">
                  Projects
                </button>
              </a>
              <button className="text-white/65 hover:text-white">About</button>
              <button className="text-white/65 hover:text-white">
                Experience
              </button>
            </div>
          </div>

          <div className="flex pt-[180px] justify-center w-[100%] m-auto items-center p-20">
            <div>
              <img 
                src={person}
                className="w-[300px] h-[300px] rounded-lg hover:scale-105"
                alt=""
              />
            </div>
            <div className="m-auto w-[60%] h-fit text-[40px] ">
              <div className="text-white/65">{typedText}</div>
              <div className="text-white/65 text-[20px]">
                Experienced MERN stack developer specializing in building robust
                web applications. Proficient in React.js, Node.js, Express.js, and
                MongoDB. Passionate about crafting seamless user experiences and
                solving complex problems. Let's build something amazing together!
              </div>
              <div className="mt-2 flex gap-4 text-white/65">
                <FaLinkedin size={30} />
                <FaGithub size={30} />
                <SiGmail size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[600px] bg-black/55">
        <Projects />
        <div className="h-[600px] mt-16">
          <Skill />
        </div>
        <div className="h-[500px] mt-16">
          <About />
        </div>
        <div className="h-[600px] ">
          <Experience />
        </div>
        <div className="h-[600px] ">
          <Education />
        </div>
      </div>
    </>
  );
};
