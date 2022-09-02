import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen text-gray-300 bg-[#08192f] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/527a8956-ec4d-4da2-a97e-91ac1d02a72d" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#7f779b] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Please write a email here, if you would like to connect me.</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name="name" />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email" />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10">Message</textarea>
            <button className='text-white border-2 hover:border-[#7f779b] hover:bg-[#7f779b] px-4 py-3 my-8     mx-auto flex justify-center items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact