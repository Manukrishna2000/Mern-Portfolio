import React from "react";
import person from "./person.webp";

const About = () => {
  return (
    <div id="about" className="py-16 bg-black/65">
      <div className="text-center text-white text-4xl font-semibold mb-12">
        About Me
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-11/12 md:w-4/5 mx-auto">
        <table className="text-white/70 m-auto text-lg md:text-xl mb-8 md:mb-0">
          <tbody>
            <tr>
              <td className="pr-4">Name:</td>
              <td className="p-4">Manu Krishna A P</td>
            </tr>
            <tr>
              <td className="pr-4">Date Of Birth:</td>
              <td className="p-4">11 May 2000</td>
            </tr>
            <tr>
              <td className="pr-4">Contact:</td>
              <td className="p-4">8943397231</td>
            </tr>
            <tr>
              <td className="pr-4">Email:</td>
              <td className="p-4">manukrishnaap@gmail.com</td>
            </tr>
          </tbody>
        </table>
        {/* <img src={person} className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-lg" alt="Manu Krishna A P" /> */}
      </div>
    </div>
  );
};

export default About;
