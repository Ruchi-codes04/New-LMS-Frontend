import React from 'react';
import { Link } from 'react-router-dom';

const StudentTemplate = ({ children, title, subtitle }) => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/" className="text-teal-600 hover:text-teal-700 transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">{title}</h1>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StudentTemplate;