import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-400 z-10'>
    
      <ul className="hidden md:flex">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="resumee" smooth={true} duration={500}>Resumee</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="work" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[rgb(11,9,9)] flex flex-col justify-center items-center text-gray-400' : 'hidden'}>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="resumee" smooth={true} duration={500}>Resumee</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Projects</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      <div className='fixed top-[35%] left-[50px] flex flex-col'>
        <ul>
          <li className='w-[80px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-50px] duration-300 bg-blue-600'>
            <a className='flex justify-center items-center w-full text-white' href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/">
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[80px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-50px] duration-300 bg-[#333333]'>
            <a className='flex justify-center items-center w-full text-white' href="https://github.com/GogoMogo1989">
             <FaGithub size={30} />
            </a>
          </li>
          <Link to="email" smooth={true} duration={500} >
            <li className='w-[80px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-50px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-center items-center w-full text-white' href="/">
                <HiOutlineMail size={30} />
                </a>
            </li>
          </Link>
          <Link to="resumee" smooth={true} duration={500}>
            <li className='w-[80px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-50px] duration-300 bg-[#565f69]'>
                <a className='flex justify-center items-center w-full text-white' href="/">
                <BsFillPersonLinesFill size={30} />
                </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
