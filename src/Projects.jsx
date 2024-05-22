import React from "react";
import car from "./cqube.png";
import farm from "./farm.jpeg";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="pt-20 p-6" id="project">
      <div className="m-auto text-white/65  border-white/65 border-b-2  text-center text-[30px] w-[80%] pb-3 ">
        Projects
      </div>
      <div className="flex justify-evenly flex-wrap">
        <div class="max-w-sm mt-8 bg-white border border-gray-200 w-[300px] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={car} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h6 class="mb-2 text-[25px] font-bold  tracking-tight text-gray-900 dark:text-white">
                <a href="https://www.thecqube.com" target="_blank">
                  www.thecqube.com
                </a>
              </h6>
            </a>
            <p class="mb-3 font-normal text-gray-700 text-[20px] dark:text-gray-400">
              An Intern Tracking System developed using Mern Stack to manage
              performance of interns and assign tasks and deadlines for interns.
            </p>
          </div>
        </div>

        <div class="max-w-sm mt-8 bg-white border border-gray-200 w-[300px] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="bg-black/55 h-fit">
            <img className="rounded-t-lg" src={farm} alt="" />
          </div>
          <div class="p-5">
            <a href="#">
              <h6 class="mb-2 text-[25px] font-bold  tracking-tight text-gray-900 dark:text-white">
                Kisan Seva
              </h6>
            </a>
            <p class="mb-3 font-normal text-gray-700 text-[20px] dark:text-gray-400">
              A website for farmers and public for organic product sales, rental
              of machines for farming and to provide expert advice for farmers
              using MERN Stack.
            </p>
            <a
              href="https://github.com/Manukrishna2000/Kisan-seva-web.git
"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
