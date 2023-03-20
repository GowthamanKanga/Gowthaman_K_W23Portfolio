import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center h-full px-8 md:px-0">
        <div className="w-full text-center mb-8">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline-block">
            About
          </p>
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2 text-center">
          <p className="text-lg md:text-2xl mb-4">
            Hi, I'm Gowthaman Kangatharan, a Computer Programming and Analyst
            student at George Brown College. I've gained a strong foundation in
            programming, web development, database management, and mobile app
            development. My coursework includes C#, HTML/CSS/JavaScript, MySQL,
            Java, Android, Springboot, PHP, Swift, and React. During my free
            time, I enjoy working on personal programming projects and
            experimenting with new programming languages and technologies. I am
            always seeking to expand my knowledge and skills in software
            development. I believe that programming has the potential to solve
            many real-world problems and I am eager to contribute to the
            development of innovative solutions that have a positive impact on
            society
          </p>
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2 text-center mt-8">
          <div className="flex flex-col md:flex-row">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mb-4 md:mr-4 inline-flex items-center"
            >
              Download Resume <HiArrowNarrowRight className="ml-2" />
            </a>
            <a
              href="/cover-letter.pdf"
              download
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mb-4 md:mr-4 inline-flex items-center"
            >
              Download Cover Letter <HiArrowNarrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
