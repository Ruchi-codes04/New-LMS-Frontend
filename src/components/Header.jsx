import React, { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="text-xl font-bold text-teal-600">
              BRAIN BRIDGE
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center">
                <FaSearch className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            <button className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-200 transition-colors duration-300">
              All Courses
            </button>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-300 text-sm">
                Review
                <FaChevronDown className="ml-1 w-2 h-2" />
              </button>
            </div>

            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 text-sm whitespace-nowrap">
              Corporate Training
            </a>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-300 text-sm whitespace-nowrap">
                Existing Students
                <FaChevronDown className="ml-1 w-2 h-2" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-300 text-sm">
                About Us
                <FaChevronDown className="ml-1 w-2 h-2" />
              </button>
            </div>

            <button className="bg-teal-600 text-white px-4 py-1.5 rounded text-sm hover:bg-teal-700 transition-colors duration-300">
              Sign Up
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col gap-1 p-2 text-gray-700"
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <nav className="px-4 py-4 bg-white border-t border-gray-200">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-teal-600 text-white rounded-r-md">
                  <FaSearch className="w-4 h-4" />
                </button>
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              <li>
                <button className="w-full text-left bg-gray-100 text-gray-700 px-4 py-2 rounded-md">
                  All Courses
                </button>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-teal-600">
                  Review
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-teal-600">
                  Corporate Training
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-teal-600">
                  Existing Students
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-teal-600">
                  About Us
                </a>
              </li>
              <li>
                <button className="w-full bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700">
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
