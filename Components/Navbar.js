import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <nav className='flex justify-between items-center p-3 shadow-md '>
    <div>
      <Link href='/'><h1 className='font-bold text-2xl'>LinkLift</h1>
      
      </Link>
    </div>
    <div>
      <ul className='flex space-x-4'>
        <Link href='/'><li className='hover:underline py-2.5 font-bold'>Home</li></Link>
        <Link href='/about'><li className='hover:underline py-2.5 font-bold'>About</li></Link>
        <Link href='/shortens'><li className='hover:underline py-2.5 font-bold'>Shortens</li></Link>
        <Link href='/contact'><li className='hover:underline py-2.5 font-bold'>Contact</li></Link>
        <Link href='/shortens'><li><button className='relative px-6 py-3 font-semibold text-white rounded-lg 
         bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400
         bg-[length:200%_200%] animate-gradient-x
         shadow-lg hover:scale-105 transition-transform duration-300'>Try Now</button></li></Link>
        <Link target="_blank" href='https://github.com/SanidhyaGupta-10/GetMeeChaii'><li><button className='relative px-6 py-3 font-semibold text-white rounded-lg 
         bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400
         bg-[length:200%_200%] animate-gradient-x
         shadow-lg hover:scale-105 transition-transform duration-300'>Github</button></li></Link>
      </ul>
    </div>
   </nav>
  )
}

export default Navbar
