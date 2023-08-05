import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ccab333c-3244-4254-bd81-480931120d03" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font bold inline border-b-4 border-teal-600 text-gray-600'>Contact</p>
                <p className='text-gray-400 py-4'>// Submit this form or email mlgibson8@gmail.com</p>
            </div>
            <input type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact!</button>
        </form>
    </div>
  )
}

export default Contact