"use client"
import React from 'react' 
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-3 shadow-md relative">
      <div>
        <Link href="/"><h1 className="font-bold text-2xl">LinkLift</h1></Link>
      </div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Menu */}
      <div className={`md:flex md:items-center md:static absolute top-full left-0 w-full text-center 
           z-10 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}  md:w-auto md:bg-transparent`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <span className="hover:underline py-2.5 font-bold block">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/shortens" onClick={() => setMenuOpen(false)}>
              <span className="hover:underline py-2.5 font-bold block">Shortens</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <span className="hover:underline py-2.5 font-bold block">Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/shortens" onClick={() => setMenuOpen(false)}>
              <button className="relative px-6 py-3 font-semibold text-white rounded-lg 
                bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400
                bg-[length:200%_200%] animate-gradient-x
                shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-auto">
                Try Now
              </button>
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/SanidhyaGupta-10/GetMeeChaii" onClick={() => setMenuOpen(false)}>
              <button className="relative px-6 py-3 font-semibold text-white rounded-lg 
                bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400
                bg-[length:200%_200%] animate-gradient-x
                shadow-lg hover:scale-105 transition-transform duration-300 w-full md:w-auto">
                Github
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar