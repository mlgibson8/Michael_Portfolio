import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {ReactComponent as Logo} from '../assets/mainLogo.svg';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
 <div >
<Logo style={{width: '85px'}} />
 </div>
{/* menu */}
 <div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
    </ul>
 </div>
    </div>
  )
}

export default Navbar