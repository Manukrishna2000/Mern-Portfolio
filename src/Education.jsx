import React from 'react';

const Education = () => {
  return (
    <div className="">
      <div className="bg-black/65 py-16">
        <div className="text-center text-white text-4xl font-semibold mb-12">
          Education
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
          <div className="flex-1 flex flex-col items-center text-center md:text-left px-6">
            <div className="text-2xl md:text-3xl text-white font-medium mb-2">
              Master Of Computer Applications
            </div>
            <div className="text-xl md:text-l text-white font-medium mb-2">
              2021-2023
            </div>
            <div className="text-lg md:text-xl text-white/70">
              AWH Engineering College - KTU University
            </div>
            <div className="text-lg md:text-xl text-white/70 mt-1">
              7.56 CGPA
            </div>
          </div>
          <div className="hidden md:block border-l border-white/30 h-[150px] mx-8"></div>
          <div className="flex-1 flex flex-col items-center text-center md:text-left px-6">
            <div className="text-2xl md:text-3xl text-white font-medium mb-2">
              Bachelor Of Computer Applications
            </div>
            <div className="text-xl md:text-l text-white font-medium mb-2">
              2018-2021
            </div>
            <div className="text-lg md:text-xl text-white/70">
              UNIVERSITY OF CALICUT
            </div>
            <div className="text-lg md:text-xl text-white/70 mt-1">
              57.40%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
