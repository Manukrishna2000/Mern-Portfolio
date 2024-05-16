import React from "react";
import car from './car.webp'
import { FaGithub } from "react-icons/fa";


const Projects = () => {
  return (
    <div className="pt-20 " id="project">
      <div className="m-auto text-white/65  border-white/65 border-b-2  text-center text-[30px] w-[80%] pb-3 ">
        Projects
      </div>
      <div className="flex shadow-inner text-white/65 items-center p-4 w-[80%] m-auto  justify-around mt-10">
        <img src={car} className="w-[250px] h-[250px] rounded-lg" alt="" />
        <div className="text-[18px]">
        <div className="">Cqube</div>
          intern Tracking System
          <div>

            Created using Mern Stack
          </div>
          <div className="mt-2">
            <FaGithub/>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
