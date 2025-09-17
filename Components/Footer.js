import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 font-semibold text-white rounded-lg
      bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400
      bg-[length:200%_200%] animate-gradient-x
      shadow-md transition-transform duration-300">
      <span className="text-lg">
        Created by <span className="font-bold text-white">SanidhyaGupta</span>
      </span>
    </footer>
  )
}

export default Footer