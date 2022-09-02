import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Github from '../assets/github.png'
import Node from '../assets/node.png'
import React2 from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'

export const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#08192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justiy-center w-full h-full'>

        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#7f779b]">Experience</p>
          <p className='py-4'>These technologies what I use it to my works.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={HTML} alt="html"/>
            <p className='my-4'>HTML</p>
          </div>
  
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={CSS} alt="html"/>
            <p className='my-4'>CSS</p>
          </div>
       
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={Javascript} alt="html"/>
            <p className='my-4'>Javascript</p>
          </div>
     
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={Node} alt="html"/>
            <p className='my-4'>Node</p>
          </div>
      
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={Github} alt="html"/>
            <p className='my-4'>Github</p>
          </div>
  
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={React2} alt="html"/>
            <p className='my-4'>React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto' src={Tailwind} alt="html"/>
            <p className='my-4'>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Skills 