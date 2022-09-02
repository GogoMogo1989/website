import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className=' w-full h-screen bg-[#08192f] '>

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-[#7f779b]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font:bold text-[#ccc6f6]'>Kovács-Farkas Dávid</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Welcome to my webpage! You can see here my projects, and also you can found my availability.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7f779b] hover:border-[#7f779b]">View Work
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-2'/>
          </span> 
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home     