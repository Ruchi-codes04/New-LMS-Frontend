import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import AboutTemplate from './AboutTemplate';

const ContactUs = () => {
  const heroSection = (
    <div className="bg-white py-16 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Brain Bridge is an online higher education platform providing rigorous industry-relevant programs designed and delivered in collaboration with world-class faculty and industry. Merging the latest technology, pedagogy, and services, Brain Bridge is creating an immersive learning experience – anytime and anywhere.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Talk to a Counsellor
            </button>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Customer support representative with headset"
                className="w-full max-w-md h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const callEmailSection = (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Call or Email Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program Related Queries */}
          <div className="text-center p-6 border border-gray-400 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <FaPhone className="text-teal-600 text-xl" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              For Program Related Queries
            </h3>
            <div className="space-y-2">
              <p className="text-teal-600 font-semibold text-lg">
                1800 210 2020
              </p>
              <p className="text-teal-600 font-medium">
                customercare@brainbridge.com
              </p>
            </div>
          </div>

          {/* Business Related Queries */}
          <div className="text-center p-6 border border-gray-400 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <div className="text-teal-600 text-xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              For Business Related Queries
            </h3>
            <div className="space-y-2">
              <p className="text-teal-600 font-semibold text-lg">
                1800 210 2020
              </p>
              <p className="text-teal-600 font-medium">
                enterprise@brainbridge.com
              </p>
            </div>
          </div>

          {/* Grievance Redressal */}
          <div className="text-center p-6 border border-gray-400 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <div className="text-teal-600 text-xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              For Grievance Redressal
            </h3>
            <div className="space-y-2">
              <p className="text-teal-600 font-semibold text-lg">
                1800 210 2020
              </p>
              <p className="text-teal-600 font-medium">
                grievance.redressal@brainbridge.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const contactContent = (
    <>
      <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Left Side - Contact Information */}
        <div className="bg-white rounded-2xl p-6">
          <div className="space-y-4">
            {/* First Row - 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow min-h-[120px]">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="text-teal-600 text-sm" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Headquarters</h3>
                    <div className="text-xs text-gray-600 leading-relaxed">
                      <p className="break-words">123 Education Street</p>
                      <p className="break-words">Tech District</p>
                      <p className="break-words">Bangalore, Karnataka 560001</p>
                      <p className="break-words">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow min-h-[120px]">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <FaPhone className="text-teal-600 text-sm" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Phone</h3>
                    <div className="space-y-0.5 text-xs text-gray-600">
                      <p className="break-words"><span className="font-medium">General:</span> +91 80 1234 5678</p>
                      <p className="break-words"><span className="font-medium">Support:</span> +91 80 8765 4321</p>
                      <p className="break-words"><span className="font-medium">Toll-Free:</span> 1800 123 4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow min-h-[120px]">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <FaEnvelope className="text-teal-600 text-sm" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
                    <div className="space-y-0.5 text-xs text-gray-600">
                      <p className="break-words"><span className="font-medium">General:</span> info@brainbridge.com</p>
                      <p className="break-words"><span className="font-medium">Support:</span> support@brainbridge.com</p>
                      <p className="break-words"><span className="font-medium">Partners:</span> partners@brainbridge.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow min-h-[120px]">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <FaClock className="text-teal-600 text-sm" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Hours of Operation</h3>
                    <div className="space-y-0.5 text-xs text-gray-600">
                      <p className="break-words"><span className="font-medium">Mon - Fri:</span> 9:00 AM - 6:00 PM IST</p>
                      <p className="break-words"><span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM IST</p>
                      <p className="break-words"><span className="font-medium">Sunday:</span> Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="course-inquiry">Course Inquiry</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 hover:border-teal-300 resize-none"
                placeholder="How can we help you? Please provide as much detail as possible..."
                required
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                required
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                I agree to the <a href="#" className="text-teal-600 hover:text-teal-700 underline">Privacy Policy</a> and <a href="#" className="text-teal-600 hover:text-teal-700 underline">Terms of Service</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-6 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transform hover:-translate-y-0.5 hover:shadow-lg font-semibold text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );

  const additionalContent = null;

  return (
    <>
      {heroSection}
      {callEmailSection}
      <AboutTemplate
        title="Get in Touch"
        subtitle="Have questions or need assistance? We're here to help. Reach out to our team through any of the channels below."
        content={contactContent}
        additionalContent={additionalContent}
        showBreadcrumbs={false}
      />
    </>
  );
};

export default ContactUs;