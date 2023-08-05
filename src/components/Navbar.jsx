import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub,FaLinkedin, FaInstagram} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {ReactComponent as Logo} from '../assets/mainLogo.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
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
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Portfolio</li>
        <li className='py-6 text-4xl'>Contact</li>
        <li className='py-6 text-4xl'>Resume</li>
    </ul>

{/* socials */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
    <a className='flex justify-between items-center w-full text-grey-300'
    href='/'>LinkedIn <FaLinkedin size={40} /></a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-900'>
    <a className='flex justify-between items-center w-full text-grey-300'
    href='/'>GitHub <FaGithub size={40} /></a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-500'>
    <a className='flex justify-between items-center w-full text-grey-300'
    href='/'>Insta <FaInstagram size={40} /></a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-amber-700'>
    <a className='flex justify-between items-center w-full text-grey-300'
    href='/'>Email <HiOutlineMail size={40} /></a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400'>
    <a className='flex justify-between items-center w-full text-grey-300'
    href='/'>Resume <BsFillPersonLinesFill size={40} /></a>
    </li>
</ul>
</div>

    </div>
  )
}

export default Navbar