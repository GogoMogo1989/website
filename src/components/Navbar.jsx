import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)  
  const handleCLick = () => setNav(nav===false)

  return (
     <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#4b75ac] text-white'>



        <ul className="hidden md:flex">
            <li>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li>
                <Link to="resumee" smooth={true} duration={500}>
                Resumee
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>
                Work
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>
    


        <div onClick={handleCLick} className="md:hidden z-10">
            {nav===false ? <FaBars /> : <FaTimes />}
        </div>

        
        <ul className={nav===false ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#4b75ac] flex flex-col justify-center items-center'}>
            <li className="py-6 text-4xl">
                <Link onClick={handleCLick} to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link onClick={handleCLick} to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link onClick={handleCLick} to="resumee" smooth={true} duration={500}>
                Resumee
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link onClick={handleCLick} to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link onClick={handleCLick} to="work" smooth={true} duration={500}>
                Work
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link onClick={handleCLick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>


        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="https://www.linkedin.com/in/d%C3%A1vid-kov%C3%A1cs-farkas-733732241/">
                        LinkedIn <FaLinkedin size={30} />  
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-white'
                    href="https://github.com/GogoMogo1989">
                        Github <FaGithub size={30} />  
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <Link to="contact" smooth={true} duration={500} className='flex justify-between items-center w-full text-white'>
                        <a className='flex justify-between items-center w-full text-white'
                        href="/">
                            Email <HiOutlineMail size={30} />  
                        </a>
                    </Link> 
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <Link to="resumee" smooth={true} duration={500} className='flex justify-between items-center w-full text-white'>
                        <a className='flex justify-between items-center w-full text-white'
                        href="/">
                            Resumee <BsFillPersonLinesFill size={30} />  
                        </a>
                    </Link>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar