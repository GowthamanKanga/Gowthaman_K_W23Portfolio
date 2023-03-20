import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Python from '../assets/python.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full text-center mb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8'>
          {[
            { src: HTML, alt: 'HTML icon', label: 'HTML' },
            { src: CSS, alt: 'CSS icon', label: 'CSS' },
            { src: JavaScript, alt: 'JavaScript icon', label: 'JAVASCRIPT' },
            { src: ReactImg, alt: 'React icon', label: 'REACT' },
            { src: GitHub, alt: 'GitHub icon', label: 'GITHUB' },
            { src: Node, alt: 'Node.js icon', label: 'NODE JS' },
            { src: Mongo, alt: 'MongoDB icon', label: 'MONGO DB' },
            { src: Tailwind, alt: 'Tailwind icon', label: 'TAILWIND' },
            { src: Python, alt: 'Python icon', label: 'PYTHON' },
          ].map(({ src, alt, label }) => (
            <div key={label} className='flex flex-col items-center justify-center p-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={src} alt={alt} />
              <p className='my-4'>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
