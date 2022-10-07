import React from 'react'
import WorkImg from '../assets/Weather-Api.jpg'
import WorkImg2 from '../assets/Nasa.jpg'
import WorkImg3 from '../assets/Profile.jpg'
import WorkImg4 from '../assets/Ionic-React.jpg'
import WorkImg5 from '../assets/Blog.jpg'

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-white bg-[#4b75ac]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-white border-[#7f779b]'>Work</p>
                <p className='py-6'>Check out my works!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#ccc6f6] tracking-wider'>
                                React JS Weather-Api
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://gogomogo1989.github.io/weather/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/GogoMogo1989/weather">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                </div>

                <div style={{backgroundImage: `url(${WorkImg2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#ccc6f6] tracking-wider'>
                                Javascript NASA
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://gogomogo1989.github.io/nasa/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/GogoMogo1989/nasa">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                </div>

                <div style={{backgroundImage: `url(${WorkImg3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#ccc6f6] tracking-wider'>
                                Node JS Profile
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://github.com/GogoMogo1989/profile">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                </div>

                <div style={{backgroundImage: `url(${WorkImg5})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#ccc6f6] tracking-wider'>
                                Ionic-React
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://github.com/GogoMogo1989/blog">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                </div>

                <div style={{backgroundImage: `url(${WorkImg4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#ccc6f6] tracking-wider'>
                                React-Blog
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="https://github.com/GogoMogo1989/ionic_practises">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work