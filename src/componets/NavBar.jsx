import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const NavBar = ({darkMode,updateDarkMode}) => {
 
  return (
    <>
    <nav className='flex gap-2 justify-around items-center bg-blue-800 text-white text-xl font-extrabold dark:bg-black'>
        <div className='text-white py-3 px-4 hover:bg-blue-500 hover:text-black cursor-pointer transition-all duration-700'>
           iTask 
        </div>
        <ul className='flex items-center'>
            <Link to='/' ><li className='hover:bg-black dark:hover:bg-blue-600 py-3 px-2  opacity-75 cursor-pointer'>Home</li></Link>
            <Link to='/About' ><li className='hover:bg-black dark:hover:bg-blue-600 py-3 px-2 opacity-75 cursor-pointer'>About</li></Link>
             <li><button onClick={()=> updateDarkMode(!darkMode)} className=' bg-white px-2 py-1 ml-2 text-black rounded-md text-base font-extralight'>{darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}</button></li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar
