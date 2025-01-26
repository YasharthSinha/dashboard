'use client';
import React from 'react'

const Navbar = () => {
    const mockUser = {
        name: "Yasharth Sinha",
        photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
      };
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black-600">WhatBytes</div>
          <button className='flex items-center px-2 rounded-lg border-2 border-gray-200 hover:border-gray-700 transition-all duration-300 hover:bg-indigo-50'>
          <div className="flex items-center space-x-2">
            <img
              src={mockUser.photo}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
              <p className="text-black font-medium">{mockUser.name}</p>
          </div>
          </button>
        </div>
      </nav>
  )
}

export default Navbar