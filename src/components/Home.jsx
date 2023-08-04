import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (

    <div name="home" className='w-full h-screen bg-[#0a192f]'>
    {/* container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full bg-slate-50'>
      <p className='text-red-400'>Hello! Welcome to my page.</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-teal-600'>I'm Michael</h1>
      <h2 className='text-4xl sm:text-7xl font bold text-blue-300'> a full-stack developer!</h2>
      <p>A recent graduate of Denver University</p>
      <div>
        <button>work <HiArrowNarrowRight /></button>
      </div>
    </div>
    </div>
  )
}

export default Home