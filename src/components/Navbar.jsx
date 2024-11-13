import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  const handleClick = () => setNav(!nav);
  const toggleSideMenu = () => setSideMenu(!sideMenu);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-400 z-10'>
      {/* Main menu */}
      <ul className="hidden md:flex">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="resumee" smooth={true} duration={500}>Resumee</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="work" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[rgb(11,9,9)] flex flex-col justify-center items-center text-gray-400' : 'hidden'}>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="resumee" smooth={true} duration={500}>Resumee</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Projects</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Sidebar icons */}
      <div className={`fixed top-[35%] left-0 ${sideMenu ? 'translate-x-0' : '-translate-x-[90%]'} transition-transform duration-300 lg:translate-x-0`}>
        <div className='cursor-pointer bg-gray-800 text-white w-6 h-6 flex items-center justify-center' onClick={toggleSideMenu}>
          {sideMenu ? <FaTimes /> : <FaBars />}
        </div>
        <ul className='flex flex-col items-center bg-gray-800 p-2 space-y-4 w-[160px]'>
          <li className='w-full flex items-center justify-between bg-blue-600 p-2 hover:ml-2 transition-all duration-300'>
            <a className='flex justify-between items-center w-full text-white' href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-full flex items-center justify-between bg-[#333333] p-2 hover:ml-2 transition-all duration-300'>
            <a className='flex justify-between items-center w-full text-white' href="https://github.com/GogoMogo1989">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-full flex items-center justify-between bg-[#6fc2b0] p-2 hover:ml-2 transition-all duration-300'>
            <a className='flex justify-between items-center w-full text-white' href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-full flex items-center justify-between bg-[#565f69] p-2 hover:ml-2 transition-all duration-300'>
            <a className='flex justify-between items-center w-full text-white' href="/">
              Resumee <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;