import React from "react";
import person from "./person.webp";


const   About = () => {
  return (
    <>
      <div className="m-auto text-white/65 border-white/65 border-b-2 text-center text-[30px] w-[80%] pb-3 ">
        About Me
      </div>
      <div className="flex pt-14 text-white/65 justify-between gap-10 w-fit m-auto">
      <table className="text-[22px] pt-10 m-auto ">
        <tr className="">
          <td>Name:</td>
          <td className="p-4">Manu Krishna A P</td>
        </tr>
        <tr>
          <td>Date Of Birth:</td>
          <td className="p-4">11 May 2000</td>
        </tr>
        <tr>
          <td>Contact:</td>
          <td className="p-4">8943397231</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td className="p-4">manukrishnaap@gmail.com</td>
        </tr>
      </table>
      <img src={person} className="w-[300px] h-[300px]" alt="" />

      </div>

    </>
  );
};

export default About;
