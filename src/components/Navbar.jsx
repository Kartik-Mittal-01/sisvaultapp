import React from 'react';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  
    const { isAuthenticated } = useAuth();
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / App Name */}
        <div className="text-2xl font-extrabold tracking-wider flex items-center">
          SIS<span className="text-yellow-300">Vault</span>
          <img src="/logo.svg" alt="" className='h-13 auto object-contain' />
        </div>

        {/* Navigation Links */}
        

        {/* Login Button */}
        <div className="hidden md:block">
          <a
            href="/login"
            className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-xl font-semibold shadow hover:bg-yellow-300 transition"
          >
            {!isAuthenticated ? "Explore Notes now" : "Happy Learning!"}
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <a
            href="/login"
            className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-xl font-semibold shadow hover:bg-yellow-300 transition"
          >
            {!isAuthenticated ? "Explore Notes" : "Happy Learning!"}
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
