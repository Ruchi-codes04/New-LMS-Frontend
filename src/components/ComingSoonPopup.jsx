import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ComingSoonPopup = ({ isOpen, onClose, featureName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect and opacity */}
      <div
        className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Popup Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>
        
        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 mb-4">
            <svg className="h-8 w-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-normal text-gray-900 mb-2">
            Coming Soon!
          </h3>
          
          {/* Message */}
          <p className="text-gray-600 mb-6">
            {featureName ? `${featureName} is` : 'This feature is'} currently under development. 
            We're working hard to bring you this exciting new feature soon!
          </p>
          
          {/* Action Button */}
          <button
            onClick={onClose}
            className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors font-normal"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPopup;
