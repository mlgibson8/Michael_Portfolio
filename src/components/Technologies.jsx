import React from 'react'
import GithubLogo from '../assets/github.png'
import MongodbLogo from '../assets/mongo.png'
import NodeLogo from '../assets/node.png'
import ReactLogo from '../assets/react.png'
import JavascriptLogo from '../assets/javascript.png'

const Portfolio = () => {
  return (
    <div name='technology' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
              <p className='text-4xl font-bold inline border-b-4 border-teal-400 '>Experience</p>
            <p className='py-4'> These are the technologies I've build projects with</p>
            </div>
            <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-8'> 
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={MongodbLogo} alt="Mongo Logo" /> <p className='my-4 '>MongoDb</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactLogo} alt="React Logo" /> <p className='my-4 '>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NodeLogo} alt="Node Logo" /> <p className='my-4 '>Node</p>
                </div>
                {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavascriptLogo} alt="Javascript Logo" />  <p className='my-4 ' >Javascript</p>
                </div> */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GithubLogo} alt="Github Logo" />  <p className='my-4 '>Github</p>
                </div>
                
                </div> 
            </div>
        </div>  
  )
}

export default Portfolio