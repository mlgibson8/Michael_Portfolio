import React from "react";
/* import EcomBe from '../assets/Ecom_Backend.jpg'
import EmployeeTracter from '../assets/Employee_Tracker_Backend.png'
import NoteTaker from '../assets/Note_Taker_Backend.png'
import ProgressiveWeb from '../assets/Progressive_Web_App.png'
import SQL from '../assets/Project2_SQL.png'
import TechBlog from '../assets/Tech_Blog.png' */
import { data } from "../data/data.js";

const Work = () => {
  const projects = data;
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-teal-500">
            work
          </p>
          <p className="py-6">// here are some projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.title}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Repo
                    </button>
                  </a>
                  <a href={item.live}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/*     <div style={{backgroundImage: `url:(${EmployeeTracter})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        
        <div className='opacity-0 group-hover:opacity-100' >
            <span className='text-2xl font-bold text-white tracking-wider'>
                Employee Tracker Backend
            </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                    </a>
                </div>
                  </div>
    </div>
    <div style={{backgroundImage: `url:(${NoteTaker})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        
        <div className='opacity-0 group-hover:opacity-100' >
            <span className='text-2xl font-bold text-white tracking-wider'>
                Note Taker
            </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                    </a>
                </div>
                  </div>
    </div>
    <div style={{backgroundImage: `url:(${ProgressiveWeb})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        
        <div className='opacity-0 group-hover:opacity-100' >
            <span className='text-2xl font-bold text-white tracking-wider'>
                Progressive Web App 
            </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                    </a>
                </div>
                  </div>
    </div>
    <div style={{backgroundImage: `url:(${SQL})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        
        <div className='opacity-0 group-hover:opacity-100' >
            <span className='text-2xl font-bold text-white tracking-wider'>
                SQL Project
            </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                    </a>
                </div>
                  </div>
    </div>
    <div style={{backgroundImage: `url:(${TechBlog})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        
        <div className='opacity-0 group-hover:opacity-100' >
            <span className='text-2xl font-bold text-white tracking-wider'>
                Tech Blog
            </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repo</button>
                    </a>
                </div>
                  </div>
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
