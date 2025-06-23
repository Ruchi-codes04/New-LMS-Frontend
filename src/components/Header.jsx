import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" className="text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors">
              BRAIN BRIDGE
            </Link>
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
            <Link to="/courses/all" className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-200 transition-colors duration-300">
              All Courses
            </Link>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-300 text-sm">
                Review
                <FaChevronDown className="ml-1 w-2 h-2" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link to="/reviews/participant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Participant Reviews</Link>
                  <Link to="/reviews/video" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Video Reviews</Link>
                  <Link to="/reviews/corporate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Corporate Training Reviews</Link>
                  <Link to="/reviews/college" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">College Training Reviews</Link>
                  <Link to="/reviews/job-support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Job Support Reviews</Link>
                  <Link to="/reviews/mouthshut" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Mouth Shut Reviews</Link>
                  <Link to="/reviews/justdial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Just Dial Reviews</Link>
                  <Link to="/reviews/reporter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Reviews Reporter</Link>
                  <Link to="/reviews/linkedin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Linkedin Reviews</Link>
                  <Link to="/reviews/youtube" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Youtube Reviews</Link>
                  <Link to="/reviews/complaints" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Learner Reviews & Complaints</Link>
                  <Link to="/reviews/medium" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Medium Reviews</Link>
                </div>
              </div>
            </div>

            <Link to="/corporate-training" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 text-sm whitespace-nowrap">
              Corporate Training
            </Link>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-300 text-sm whitespace-nowrap">
                Existing Students
                <FaChevronDown className="ml-1 w-2 h-2" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link to="/students/CustomerSupport" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Customer Support</Link>
                  <Link to="/students/Events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Events</Link>
                  <Link to="/students/InternshipSupport" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Internship Support</Link>
                  <Link to="/students/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Career Support</Link>
                  <Link to="/students/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Certification</Link>
                  <Link to="/students/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Submit Feedback</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-300 text-sm">
                About Us
                <FaChevronDown className="ml-1 w-2 h-2" />
              </button>
              <div className="absolute left-0 mt-2 w-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link to="/about/company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">About Brain Bridge</Link>
                  <Link to="/about/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Our Affiliation</Link>
                  <Link to="/about/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Our Customers</Link>
                  <Link to="/about/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Our Blogs</Link>
                  <Link to="/about/testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Placement Partners</Link>
                  <Link to="/about/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-teal-600" role="menuitem">Contact Us</Link>
                </div>
              </div>
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
                <Link to="/courses/all" className="block w-full text-left bg-gray-100 text-gray-700 px-4 py-2 rounded-md">
                  All Courses
                </Link>
              </li>
              <li className="relative">
                <button 
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-teal-600"
                  onClick={(e) => {
                    e.preventDefault();
                    const submenu = e.currentTarget.nextElementSibling;
                    submenu.classList.toggle('hidden');
                  }}
                >
                  <span>Review</span>
                  <FaChevronDown className="w-2 h-2" />
                </button>
                <div className="hidden mt-2 ml-4 border-l-2 border-gray-200 pl-4">
                  <Link to="/reviews/participant" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Participant Reviews</Link>
                  <Link to="/reviews/video" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Video Reviews</Link>
                  <Link to="/reviews/corporate" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Corporate Training Reviews</Link>
                  <Link to="/reviews/college" className="block py-2 text-sm text-gray-700 hover:text-teal-600">College Training Reviews</Link>
                  <Link to="/reviews/job-support" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Job Support Reviews</Link>
                  <Link to="/reviews/mouthshut" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Mouth Shut Reviews</Link>
                  <Link to="/reviews/justdial" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Just Dial Reviews</Link>
                  <Link to="/reviews/reporter" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Reviews Reporter</Link>
                  <Link to="/reviews/linkedin" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Linkedin Reviews</Link>
                  <Link to="/reviews/youtube" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Youtube Reviews</Link>
                  <Link to="/reviews/complaints" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Learner Reviews & Complaints</Link>
                  <Link to="/reviews/medium" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Medium Reviews</Link>
                </div>
              </li>
              <li>
                <Link to="/corporate-training" className="block text-gray-700 hover:text-teal-600">
                  Corporate Training
                </Link>
              </li>
              <li className="relative">
                <button 
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-teal-600"
                  onClick={(e) => {
                    e.preventDefault();
                    const submenu = e.currentTarget.nextElementSibling;
                    submenu.classList.toggle('hidden');
                  }}
                >
                  <span>Existing Students</span>
                  <FaChevronDown className="w-2 h-2" />
                </button>
                <div className="hidden mt-2 ml-4 border-l-2 border-gray-200 pl-4">
                  <Link to="/students/CustomerSupport" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Customer Support</Link>
                  <Link to="/students/Events" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Events</Link>
                  <Link to="/students/InternshipSupport" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Internship Support</Link>
                  <Link to="/students/resources" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Career Support</Link>
                  <Link to="/students/support" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Certification</Link>
                  <Link to="/students/profile" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Submit Feedback</Link>
                </div>
              </li>
              <li className="relative">
                <button 
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-teal-600"
                  onClick={(e) => {
                    e.preventDefault();
                    const submenu = e.currentTarget.nextElementSibling;
                    submenu.classList.toggle('hidden');
                  }}
                >
                  <span>About Us</span>
                  <FaChevronDown className="w-2 h-2" />
                </button>
                <div className="hidden mt-2 ml-4 border-l-2 border-gray-200 pl-4">
                  <Link to="/about/company" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Company</Link>
                  <Link to="/about/team" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Our Team</Link>
                  <Link to="/about/mission" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Mission & Vision</Link>
                  <Link to="/about/careers" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Careers</Link>
                  <Link to="/about/testimonials" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Testimonials</Link>
                  <Link to="/about/contact" className="block py-2 text-sm text-gray-700 hover:text-teal-600">Contact Us</Link>
                </div>
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
