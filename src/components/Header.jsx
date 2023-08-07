import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub,FaLinkedin, FaInstagram} from 'react-icons/fa';
/* import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'; */
import {ReactComponent as Logo} from '../assets/mainLogo.svg';
import { Link } from 'react-scroll';

const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
 <div >
<Logo style={{width: '85px'}} />
 </div>
{/* menu */}

    <ul className='hidden md:flex'>
        <li><Link  to="home"  smooth={true}  duration={500}>
          Home
        </Link></li>
        <li><Link  to="about"  smooth={true}  duration={500}>
          About
        </Link></li>
        <li><Link  to="technology"  smooth={true}  duration={500}>
          Technologies
        </Link></li>
        <li><Link  to="work"  smooth={true}  duration={500}>
          Projects
        </Link></li>
        <li><Link  to="contact"  smooth={true}  duration={500}>
          Contact
        </Link></li>
        <li><Link  to="resume"  smooth={true}  duration={500}>
          Resume
        </Link></li>
    </ul>

{/* menu2 */}
<div onClick={handleClick} className='md:hidden z-10'>
    {!nav ? <FaBars/> : <FaTimes/>}
</div>
{/* mobile menu */}
<ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li  className='py-6 text-4xl'><Link onClick={handleClick}  to="home"  smooth={true}  duration={500}>
          Home
        </Link></li>
        <li  className='py-6 text-4xl'><Link onClick={handleClick}  to="about"  smooth={true}  duration={500}>
          About
        </Link></li>
        <li  className='py-6 text-4xl'><Link onClick={handleClick}  to="technology"  smooth={true}  duration={500}>
          Technologies
        </Link></li>
        <li  className='py-6 text-4xl'><Link onClick={handleClick}  to="work"  smooth={true}  duration={500}>
          Projects
        </Link></li>
        <li  className='py-6 text-4xl'><Link onClick={handleClick}  to="contact"  smooth={true}  duration={500}>
          Contact
        </Link></li>
        <li  className='py-6 text-4xl'><Link onClick={handleClick}  to="resume"  smooth={true}  duration={500}>
          Resume
        </Link></li>
    </ul>
    </div>
  )}


export default Header