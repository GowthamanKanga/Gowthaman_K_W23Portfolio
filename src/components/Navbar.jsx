import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[##0368fc] text-gray-300'>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Project
          </Link>
        </li>

      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0368fc] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Project
          </Link>
        </li>
      </ul>

        {/* Social icons */}
  <div className="hidden md:flex">
    <a
      href="https://www.linkedin.com/in/gowthaman-k-a88b16192/"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-2"
    >
      <FaLinkedin className="text-3xl text-white hover:text-gray-400 transition-colors duration-300" />
    </a>
    <a
      href="https://github.com/GowthamanKanga"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-2"
    >
      <FaGithub className="text-3xl text-white hover:text-gray-400 transition-colors duration-300" />
    </a>
  </div>
  <div className="hidden md:flex items-center">
    <HiOutlineMail className="mr-2 text-2xl" />
    <a
      href="mailto:gowthamankanga@gmail.com"
      className="text-white hover:text-gray-400 transition-colors duration-300"
    >
      gowthamankanga@gmail.com
    </a>
  </div>
  <div className="md:hidden flex items-center">
    <BsFillPersonLinesFill className="text-3xl text-white mr-2" />
    <a
      href="mailto:gowthamankanga@gmail.com"
      className="text-white hover:text-gray-400 transition-colors duration-300"
    >
      gowthamankanga@gmail.com
    </a>
  </div>
</div>
);
};

export default Navbar;