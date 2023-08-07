import React from 'react'
import {FaBars, FaTimes, FaGithub,FaLinkedin, FaInstagram} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {ReactComponent as Logo} from '../assets/mainLogo.svg';

const Footer = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
        <p className='text-strong text-center text-gray-500'>
            &copy; 2023 Michael Gibson
                 </p>
                 <a className=' hover:ml-2 duration-500 bg-blue-500' href="https://www.linkedin.com/in/michael-gibson-067731280/">LinkedIn <FaLinkedin size={40} /></a>
                 <a className=' hover:ml-2 duration-500 bg-blue-500' href="https://github.com/mlgibson8">Github <FaGithub size={40}/></a>
                 <a className=' hover:ml-2 duration-500 bg-blue-500' href="mlgibson8@gmail.com">Email <HiOutlineMail size={40} /></a>
    </div>
  )
}

export default Footer