




// src/components/Navbar.tsx
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// import logo from '../../assets/react.svg';
import {Logo} from '../shared/Logo'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  


  

  return (
    <nav className="fixed w-full z-50  bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-3xl shadow-lg">
      <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              
            >

              <Logo />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-purple-600 transition-colors">
              Portfolio
            </Link>

            

            <Link to="/about" className="text-gray-300 hover:text-purple-600 transition-colors">
              About
            </Link>

            <Link to="/services" className="text-gray-300 hover:text-purple-600 transition-colors">
              Services
            </Link>

            
            <Link to="/">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Get In Touch
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
              Home
            </Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
              Portfolio
            </Link>
           
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
              Contact
            </Link>
            <button 
              // onClick={() => handleNavigation('/contact')}
              className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

