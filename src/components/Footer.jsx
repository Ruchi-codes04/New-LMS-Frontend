import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white text-teal-600 py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold font-poppins">EduTec</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Lorem ipsum dolor amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                <FaTwitter className="text-white text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300">
                <FaLinkedinIn className="text-white text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300">
                <FaYoutube className="text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-poppins">Useful Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Course</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Instructor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Instructor Details</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Purchase Guide</a></li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-poppins">Our Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Instructors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-600 transition-colors duration-300 text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-poppins">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaPhone className="text-gray-400 mt-1 mr-3 text-sm" />
                <div>
                  <p className="text-gray-400 text-sm">(405) 987-985</p>
                  <p className="text-gray-400 text-sm">(405) 987-985</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-gray-400 mt-1 mr-3 text-sm" />
                <div>
                  <p className="text-gray-400 text-sm">support@example.com</p>
                  <p className="text-gray-400 text-sm">support@example.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 text-sm" />
                <div>
                  <p className="text-gray-400 text-sm">Palm Jumeirah,</p>
                  <p className="text-gray-400 text-sm">Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright 2025 Edutec | Developed By Themevila . All Rights Reserved
            </p>
            <div className="mt-4 md:mt-0">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
