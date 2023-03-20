import React from 'react';
import profilePic from '../assets/ProfilePic.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-full'>
        {/* Image section */}
        <div className='w-full md:w-1/2 mb-8 md:mb-0'>
          <img
            className='w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-400 shadow-lg mx-auto'
            src={profilePic}
            alt='Gowthaman Kangatharan'
          />
        </div>
        {/* Text section */}
        <div className='w-full md:w-1/2'>
          <p className='text-blue-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Gowthaman Kangatharan
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
