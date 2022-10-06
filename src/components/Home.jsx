import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=' w-full h-screen bg-[#4b75ac] '>

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-white'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font:bold text-white'>Kovács-Farkas Dávid</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend Developer</h2>
        <p className='text-white py-4 max-w-[700px]'>Welcome to my website, you can see my work and find my contact details.
        </p>
        <div>
        <Link to="work" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7f779b] hover:border-[#7f779b]">View Work
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-2'/>
          </span> 
          </button>
        </Link>
        </div>
      </div>

    </div>
  )
}

export default Home     