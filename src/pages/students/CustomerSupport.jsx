import React from 'react';
import StudentTemplate from './StudentTemplate';
import { FaHeadset, FaEnvelope, FaPhone, FaComments, FaQuestionCircle } from 'react-icons/fa';

const CustomerSupport = () => {
  return (
    <StudentTemplate 
      title="Customer Support" 
      subtitle="Get help with your courses, technical issues, or general inquiries"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-teal-50 p-6 rounded-lg">
            <FaHeadset className="text-teal-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat Support</h3>
            <p className="text-gray-700 mb-4">
              Chat with our support team in real-time for immediate assistance with your questions.
            </p>
            <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors">
              Start Chat
            </button>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <FaEnvelope className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-700 mb-4">
              Send us an email and we'll get back to you within 24 hours with a solution.
            </p>
            <a 
              href="mailto:support@brainbridge.com" 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
            >
              Email Us
            </a>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <FaPhone className="text-purple-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-700 mb-4">
              Call our dedicated support line for personalized assistance with complex issues.
            </p>
            <a 
              href="tel:+918012345678" 
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors inline-block"
            >
              Call Now
            </a>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Submit a Support Ticket</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Brief description of your issue"
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing & Payments</option>
                <option value="course">Course Content</option>
                <option value="instructor">Instructor Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Please provide details about your issue"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                Attachment (optional)
              </label>
              <input
                type="file"
                id="attachment"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors"
            >
              Submit Ticket
            </button>
          </form>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FaQuestionCircle className="text-teal-600 text-xl mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-medium text-gray-900 mb-2">How do I reset my password?</h4>
              <p className="text-gray-700">
                You can reset your password by clicking on the "Forgot Password" link on the login page. You'll receive an email with instructions to create a new password.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-medium text-gray-900 mb-2">How can I download course materials?</h4>
              <p className="text-gray-700">
                Course materials can be downloaded from the course page. Look for the download icon next to each resource. Note that some materials may only be available for online viewing.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-medium text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-700">
                We accept all major credit cards, PayPal, and bank transfers. For some courses, we also offer installment payment options.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">How do I get a certificate after completing a course?</h4>
              <p className="text-gray-700">
                Certificates are automatically generated once you complete all required course modules and pass any required assessments. You can download your certificate from the "Certification" section.
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <a href="#" className="text-teal-600 hover:text-teal-800 font-medium">
              View all FAQs →
            </a>
          </div>
        </div>
        
        <div className="bg-teal-50 rounded-lg p-6 text-center">
          <FaComments className="text-teal-600 text-3xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
          <p className="text-gray-700 mb-4">
            Connect with fellow students and instructors in our community forums to get help, share knowledge, and discuss course topics.
          </p>
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors">
            Join Community
          </button>
        </div>
      </div>
    </StudentTemplate>
  );
};

export default CustomerSupport;