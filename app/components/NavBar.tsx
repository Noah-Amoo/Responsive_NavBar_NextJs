'use client';

import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
        <div className="container flex mx-auto justify-between items-center">
          <a href="" className="text-2xl font-bold">NOAH&apos;S LOGO</a>

          {/* Desktop Navigation */}
          <div className='hidden md:flex'>
            <Link href="/" className='mx-2 hover:text-gray-300'>
              Home
            </Link>
            <Link href="/about" className='mx-2 hover:text-gray-300'>
              About
            </Link>
            <Link href="/contact" className='mx-2 hover:text-gray-300'>
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                // Close Icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <Link href="/" className='block px-4 py-2 hover:text-gray-300'>
              Home
            </Link>
            <Link href="/about" className='block px-4 py-2 hover:text-gray-300'>
              About
            </Link>
            <Link href="/contact" className='block px-4 py-2 hover:text-gray-300'>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
