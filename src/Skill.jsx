import React from "react";
import { FaBootstrap, FaFigma, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const Skill = () => {
  return (
    <div className=" background1" id='skill'>
<div className="bg-black/60 pt-20 h-[500px]">

      <div  className="m-auto text-white/65 border-b-2 border-white/65   text-center text-[30px] w-[80%] pb-3 ">
        Skills
      </div>
      <div className="flex gap-2 text-white/65 mt-6 w-[80%]  m-auto  flex-wrap justify-between">
        <div className="text-[70px]   text-center w-fit mt-2">
          <FaReact />
          <div className="text-[20px]">React JS</div>
        </div>
        <div className="text-[70px]   text-center w-fit mt-2">
          <IoLogoJavascript />
          <div className="text-[20px]">Java Script</div>
        </div>
        <div className="text-[70px]  text-center w-fit mt-2">
          <FaHtml5 />
          <div className="text-[20px]">Html 5</div>
        </div>
        <div className="text-[70px]    text-center w-fit mt-2">
          <SiTailwindcss />
          <div className="text-[20px]">Tailwind</div>
        </div>
        <div className="text-[70px]   text-center w-fit mt-2">
          <FaNodeJs />
          <div className="text-[20px]">Node JS</div>
        </div>
        <div className="text-[70px] text-center w-fit mt-2">
          <SiMongodb />
          <div className="text-[20px]">Mongo Db</div>
        </div>
        <div className="text-[70px] text-center w-fit mt-2">
        <SiExpress />
          <div className="text-[20px]">Express JS</div>
        </div>
        <div className="text-[70px] text-center w-fit mt-2">
        <IoLogoCss3 />

          <div className="text-[20px]">Css</div>
        </div>
        <div className="text-[70px] text-center w-fit mt-2">
        <FaBootstrap />

          <div className="text-[20px]">Bootstrap</div>
        </div>
        <div className="text-[70px] text-center w-fit mt-2">
        <FaFigma />


          <div className="text-[20px]">Figma</div>
        </div>
        {/* <div className="text-[70px] text-center w-fit mt-2">
        <IoLogoCss3 />

          <div className="text-[20px]">Express JS</div>
        </div> */}



      </div>
    </div>
</div>

  );
};

export default Skill;
