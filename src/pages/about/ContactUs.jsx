import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import AboutTemplate from './AboutTemplate';

const ContactUs = () => {
  const contactContent = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            We're here to help! Whether you have questions about our courses, need technical support, or want to explore partnership opportunities, our team is ready to assist you.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaMapMarkerAlt className="text-teal-600 text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Headquarters</h3>
                <p className="text-gray-700">
                  123 Education Street<br />
                  Tech District<br />
                  Bangalore, Karnataka 560001<br />
                  India
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaPhone className="text-teal-600 text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="text-gray-700">
                  General Inquiries: +91 80 1234 5678<br />
                  Technical Support: +91 80 8765 4321<br />
                  Toll-Free: 1800 123 4567
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaEnvelope className="text-teal-600 text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-gray-700">
                  General Inquiries: info@brainbridge.com<br />
                  Support: support@brainbridge.com<br />
                  Partnerships: partners@brainbridge.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaClock className="text-teal-600 text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Hours of Operation</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Saturday: 10:00 AM - 2:00 PM IST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="+91 98765 43210"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Course Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );

  const additionalContent = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Locations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300">
            {/* This would be an actual map or image in a real implementation */}
            <div className="h-full flex items-center justify-center">
              <span className="text-gray-500">Map: Bangalore</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Bangalore (HQ)</h3>
            <p className="text-gray-700 mb-4">
              123 Education Street<br />
              Tech District<br />
              Bangalore, Karnataka 560001<br />
              India
            </p>
            <a href="#" className="text-teal-600 hover:text-teal-800 font-medium">
              Get Directions →
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300">
            {/* This would be an actual map or image in a real implementation */}
            <div className="h-full flex items-center justify-center">
              <span className="text-gray-500">Map: Mumbai</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Mumbai</h3>
            <p className="text-gray-700 mb-4">
              456 Learning Avenue<br />
              Andheri East<br />
              Mumbai, Maharashtra 400069<br />
              India
            </p>
            <a href="#" className="text-teal-600 hover:text-teal-800 font-medium">
              Get Directions →
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-48 bg-gray-300">
            {/* This would be an actual map or image in a real implementation */}
            <div className="h-full flex items-center justify-center">
              <span className="text-gray-500">Map: Hyderabad</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Hyderabad</h3>
            <p className="text-gray-700 mb-4">
              789 Knowledge Park<br />
              HITEC City<br />
              Hyderabad, Telangana 500081<br />
              India
            </p>
            <a href="#" className="text-teal-600 hover:text-teal-800 font-medium">
              Get Directions →
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Frequently Asked Questions</h3>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">How quickly can I expect a response to my inquiry?</h4>
            <p className="text-gray-700">
              We strive to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our support line directly.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Do you offer in-person consultations?</h4>
            <p className="text-gray-700">
              Yes, we offer in-person consultations at all our office locations. Please schedule an appointment in advance through our contact form or by calling our office.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">How can I report technical issues with a course?</h4>
            <p className="text-gray-700">
              For technical support, please email support@brainbridge.com with details of the issue you're experiencing, including any error messages and the device/browser you're using.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">I'm interested in becoming an instructor. Who should I contact?</h4>
            <p className="text-gray-700">
              We're always looking for talented instructors! Please send your resume and a brief teaching proposal to instructors@brainbridge.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AboutTemplate 
      title="Contact Us"
      subtitle="Have questions or need assistance? We're here to help. Reach out to our team through any of the channels below."
      content={contactContent}
      additionalContent={additionalContent}
      showBreadcrumbs={false}
    />
  );
};

export default ContactUs;