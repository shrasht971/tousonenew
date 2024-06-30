import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">Bazaar Live</Link>

        <div className="hidden md:flex space-x-4 items-center">
          <Link to="./" className="hover:text-gray-300 text-white mx-2">Home</Link>
          <Link to="/about" className="hover:text-gray-300 text-white mx-2">About Us</Link>
          <Link to="/services" className="hover:text-gray-300 text-white mx-2">Services</Link>
          <Link to="/contact" className="hover:text-gray-300 text-white mx-2">Contact</Link>
          <Link to="/login" className="hover:text-gray-300 bg-gray-900 text-white px-3 py-1 rounded-md">Sign In Student</Link>
          <Link to="/login" className="hover:text-gray-300 bg-gray-900 text-white px-3 py-1 rounded-md">Sign In Teacher</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center bg-teal-800 py-4">
            <Link to="/" className="block px-4 py-2 text-sm text-white">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-sm text-white">About Us</Link>
            <Link to="/services" className="block px-4 py-2 text-sm text-white">Services</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm text-white">Contact</Link>
            <Link to="/login" className="block px-4 py-2 text-sm bg-gray-900 text-white rounded-md mt-4">Sign In Student</Link>
            <Link to="/login" className="block px-4 py-2 text-sm bg-gray-900 text-white rounded-md mt-2">Sign In Teacher</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
