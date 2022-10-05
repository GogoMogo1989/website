import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#4b75ac] text-[#ccc6f6]'>
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
                    <p>I always intrested in IT, thats why I decided, I learn a new proffesion. I have already learning in highschool to html, css, and javascript, and I realy liked it, thats why I choice to frontend developer proffesion. I made many webpage, and I would like to show it to you! I hope you like it!:-) If you would like to contact me, please send me a email! You have find it my email in Contact section.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About