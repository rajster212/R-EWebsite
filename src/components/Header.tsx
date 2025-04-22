import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from './Navigation';
import logo from '../assets/logo.png';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
            <img src={logo} alt="R&E Diagnostics Logo" className="h-8 md:h-10" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li className="relative">
                <button
                  onClick={() => toggleDropdown('about')}
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link to="/about" className="block px-4 py-2 text-sm text-navy-800 hover:bg-navy-100">Our Mission</Link>
                    <Link to="/team" className="block px-4 py-2 text-sm text-navy-800 hover:bg-navy-100">Our Team</Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link to="/services" className="block px-4 py-2 text-sm text-navy-800 hover:bg-navy-100">Overview</Link>
                    <Link to="/consulting" className="block px-4 py-2 text-sm text-navy-800 hover:bg-navy-100">Consulting</Link>
                    <Link to="/development" className="block px-4 py-2 text-sm text-navy-800 hover:bg-navy-100">Development</Link>
                  </div>
                )}
              </li>
              <li>
                <Link to="/blog" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => toggleDropdown('mobileAbout')}
              className="w-full text-left text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </button>
            {activeDropdown === 'mobileAbout' && (
              <div className="pl-4 space-y-1">
                <Link to="/about" className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Our Mission
                </Link>
                <Link to="/team" className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Our Team
                </Link>
              </div>
            )}
            
            <button
              onClick={() => toggleDropdown('mobileServices')}
              className="w-full text-left text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </button>
            {activeDropdown === 'mobileServices' && (
              <div className="pl-4 space-y-1">
                <Link to="/services" className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Overview
                </Link>
                <Link to="/consulting" className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Consulting
                </Link>
                <Link to="/development" className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Development
                </Link>
              </div>
            )}
            
            <Link to="/blog" className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-200 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;