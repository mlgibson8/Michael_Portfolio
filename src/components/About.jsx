import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-grey-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-white'>About</p>
                </div>
                <div>                    
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 text-gray-300 px-4' >
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hello, I'm michael. this is my homepage</p>
                    </div>
                    <p>filler About me text</p>
                     </div>
            </div>
         </div>
   </div>  
  )
}

export default About