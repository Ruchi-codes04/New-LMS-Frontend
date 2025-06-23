import React, { useState } from 'react';
import StudentTemplate from './StudentTemplate';
import { FaCertificate, FaDownload, FaShare, FaCheckCircle, FaHourglassHalf, FaLock, FaSearch } from 'react-icons/fa';

const Certification = () => {
  const [activeTab, setActiveTab] = useState('available');
  
  // Sample certificates data
  const certificates = [
    {
      id: 1,
      course: "Web Development Fundamentals",
      issueDate: "June 15, 2024",
      expiryDate: "No Expiry",
      status: "available",
      image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      course: "Advanced JavaScript",
      issueDate: "May 20, 2024",
      expiryDate: "No Expiry",
      status: "available",
      image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      course: "React.js Masterclass",
      issueDate: "Pending Completion",
      expiryDate: "N/A",
      status: "pending",
      progress: 75,
      image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      course: "Data Science Fundamentals",
      issueDate: "Pending Completion",
      expiryDate: "N/A",
      status: "pending",
      progress: 40,
      image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      course: "UI/UX Design Principles",
      issueDate: "Not Started",
      expiryDate: "N/A",
      status: "locked",
      image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];
  
  // Filter certificates based on active tab
  const filteredCertificates = certificates.filter(cert => {
    if (activeTab === 'all') return true;
    return cert.status === activeTab;
  });
  
  return (
    <StudentTemplate 
      title="Certification" 
      subtitle="View, download, and share your course certificates"
    >
      <div className="space-y-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex space-x-2 mb-4 md:mb-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Certificates
            </button>
            <button
              onClick={() => setActiveTab('available')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'available'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'pending'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setActiveTab('locked')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'locked'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Locked
            </button>
          </div>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search certificates..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map(certificate => (
            <div key={certificate.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Certificate Preview */}
              <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                {certificate.status === 'available' ? (
                  <img 
                    src={certificate.image} 
                    alt={certificate.course} 
                    className="w-full h-full object-cover"
                  />
                ) : certificate.status === 'pending' ? (
                  <div className="text-center p-6">
                    <FaHourglassHalf className="text-yellow-500 text-4xl mx-auto mb-3" />
                    <p className="text-gray-700 font-medium">In Progress</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                      <div 
                        className="bg-yellow-500 h-2.5 rounded-full" 
                        style={{ width: `${certificate.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{certificate.progress}% Complete</p>
                  </div>
                ) : (
                  <div className="text-center p-6">
                    <FaLock className="text-gray-400 text-4xl mx-auto mb-3" />
                    <p className="text-gray-500">Complete the course to unlock</p>
                  </div>
                )}
              </div>
              
              {/* Certificate Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{certificate.course}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <FaCertificate className="mr-2 text-teal-600" />
                  {certificate.status === 'available' ? (
                    <span>Issued: {certificate.issueDate}</span>
                  ) : certificate.status === 'pending' ? (
                    <span>Pending Completion</span>
                  ) : (
                    <span>Not Started</span>
                  )}
                </div>
                
                {certificate.status === 'available' && (
                  <div className="flex space-x-2 mt-4">
                    <button className="flex-1 bg-teal-600 text-white px-3 py-2 rounded text-sm hover:bg-teal-700 transition-colors flex items-center justify-center">
                      <FaDownload className="mr-2" />
                      Download
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-200 transition-colors flex items-center justify-center">
                      <FaShare className="mr-2" />
                      Share
                    </button>
                  </div>
                )}
                
                {certificate.status === 'pending' && (
                  <button className="w-full bg-yellow-500 text-white px-3 py-2 rounded text-sm hover:bg-yellow-600 transition-colors mt-4">
                    Continue Course
                  </button>
                )}
                
                {certificate.status === 'locked' && (
                  <button className="w-full bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-300 transition-colors mt-4">
                    Start Course
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Verification Section */}
        <div className="bg-gray-50 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Certificate Verification</h3>
          <p className="text-gray-700 mb-6">
            All certificates issued by Brain Bridge include a unique verification code. Employers and other third parties can use this code to verify the authenticity of your certificate.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <label htmlFor="verification-code" className="block text-sm font-medium text-gray-700 mb-1">
                Enter Certificate Verification Code
              </label>
              <input
                type="text"
                id="verification-code"
                placeholder="e.g., BB-CERT-123456"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors md:mt-6">
              Verify
            </button>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About Our Certificates</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <FaCheckCircle className="text-teal-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Industry Recognition</h4>
                <p className="text-gray-700 text-sm">
                  Our certificates are recognized by leading companies in the tech industry and can enhance your professional credentials.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaCheckCircle className="text-teal-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Digital Badges</h4>
                <p className="text-gray-700 text-sm">
                  In addition to certificates, you'll receive digital badges that you can display on your LinkedIn profile and other professional networks.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaCheckCircle className="text-teal-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Lifetime Access</h4>
                <p className="text-gray-700 text-sm">
                  Your certificates are stored securely in your account and can be accessed, downloaded, or shared at any time.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaCheckCircle className="text-teal-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Verification System</h4>
                <p className="text-gray-700 text-sm">
                  Each certificate includes a unique verification code that employers can use to confirm its authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentTemplate>
  );
};

export default Certification;