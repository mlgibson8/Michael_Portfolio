import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (

    <div name="home" className='w-full h-screen bg-[#0a192f]'>
    {/* container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-red-400'>Hello! Welcome to my page.</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-teal-600'>I'm Michael</h1>
      <h2 className='text-4xl sm:text-7xl font bold text-green-500'> a full-stack developer!</h2>
      <p className='text-blue-500 py-4 max-w-[700px]'>A recent graduate of Denver University blah blah</p>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-600 hover:border-pink-600'>work 
        <span className='group-hover:rotate-90 duraton-300'>
        <HiArrowNarrowRight className='ml-3' />
        </span>
        </button>
      </div>
    </div>
    </div>
  )
}

export default Home