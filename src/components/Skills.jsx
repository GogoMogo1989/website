import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Github from '../assets/github.png'
import Node from '../assets/node.png'
import React2 from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Ionic from '../assets/ionic.png'
import MongoDB from '../assets/MongoDB.png'
import Postman from '../assets/Postman.png'

export const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#4b75ac] text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justiy-center w-full h-full'>

        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#7f779b]">Skills</p>
          <p className='py-4'>I use these technoligies for my work.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-2.5' src={HTML} alt="html"/>
            <p className='my-4'>HTML</p>
          </div>
  
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-2.5' src={CSS} alt="css"/>
            <p className='my-4'>CSS</p>
          </div>
       
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-2.5' src={Javascript} alt="javascript"/>
            <p className='my-4'>Javascript</p>
          </div>
     
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-2.5' src={Node} alt="node"/>
            <p className='my-4'>Node</p>
          </div>
      
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-2.5' src={Github} alt="github"/>
            <p className='my-4'>Github</p>
          </div>
  
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-2.5' src={React2} alt="react"/>
            <p className='my-4'>React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-2.5' src={Tailwind} alt="tailwind"/>
            <p className='my-4'>Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-2.5' src={Ionic} alt="ionic"/>
            <p className='my-4'>Ionic</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-2.5' src={MongoDB} alt="ionic"/>
            <p className='my-4'>MongoDB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className='w-20 mx-auto mt-2.5' src={Postman} alt="ionic"/>
            <p className='my-4'>Postman</p>
          </div>

        </div>
      </div>
    </div>
  ) 
}

export default Skills 
