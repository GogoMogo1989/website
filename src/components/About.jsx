import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#4b75ac] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className="sm:text-right pb-8 pl-4">
                    <p className='text-4xl font-bold inline border-b-4 border-[#7f779b]'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                    <p className='sm:text-right text-4xl font-bold '>Hi! I'm David, please look around.</p>
                </div>
                <div>
                    <p>I've always been interested in IT, which is why I decided to learn a new profession. In high school I had already learned html, css, and javascript, and I really liked it, and that's why I decided to become a frontend developer. I made some websites, hope you like them! If you want to contact me, please send me an email! You can find my contact details in the Contact section.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About