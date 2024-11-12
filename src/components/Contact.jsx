import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-full text-gray-100 bg-[rgb(11,9,9)] pt-10 flex justify-center items-center p-4 relative'>
        <form method="POST" action="https://getform.io/f/527a8956-ec4d-4da2-a97e-91ac1d02a72d" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-gray-100 py-4'>Please send a email here, or to kovacsfarkasdavid@gmail.com, if you would like to connect me.</p>
            </div>
            <input className='bg-gray-100 p-2 text-black font-medium' type="text" placeholder='Name' name="name" />
            <input className='my-4 p-2 bg-gray-100 text-black font-medium' type="email" placeholder='Email' name="email" />
            <textarea className='bg-gray-100 p-2 text-black font-medium' name="message" rows="10"></textarea>
            <button className='text-gray-100 border-2  px-4 py-3 my-8 mx-auto flex justify-center items-center'>Send</button>
        </form>
        <p className="absolute bottom-4 right-4 text-lg font-semibold text-gray-400 opacity-60">
          Contact
        </p>
    </div>
  )
}

export default Contact