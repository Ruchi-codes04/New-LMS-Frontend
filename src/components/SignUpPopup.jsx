import React, { useState, useEffect } from 'react';
import { FaTimes, FaRocket, FaStar, FaGraduationCap } from 'react-icons/fa';
import { useSignUp } from '../contexts/SignUpContext';

const SignUpPopup = () => {
  const { isPopupVisible, hideSignUpPopup, showSignUpPopup } = useSignUp();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);

  useEffect(() => {
    // Show popup every 15 seconds
    const interval = setInterval(() => {
      showSignUpPopup();
    }, 15000);

    // Show popup for the first time after 15 seconds
    const initialTimeout = setTimeout(() => {
      showSignUpPopup();
    }, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [showSignUpPopup]);

  const handleClose = () => {
    hideSignUpPopup();
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      // Handle phone number submission
      console.log('Phone number submitted:', phoneNumber);
      alert('Thank you for signing up! We will contact you soon.');
      hideSignUpPopup();
      setPhoneNumber('');
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Handle email submission
      console.log('Email submitted:', email);
      alert('Thank you for signing up! Check your email for confirmation.');
      hideSignUpPopup();
      setEmail('');
      setShowEmailForm(false);
    }
  };

  if (!isPopupVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <FaTimes className="text-gray-600" />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Illustration */}
          <div className="lg:w-1/2 bg-gradient-to-br from-teal-50 to-blue-50 p-8 flex flex-col justify-center items-center relative">
            {/* Career Benefits */}
            <div className="absolute top-6 left-6 bg-white rounded-full px-3 py-1 shadow-sm">
              <div className="flex items-center text-sm">
                <FaRocket className="text-purple-500 mr-1" />
                <span className="text-gray-700 font-medium">Career Switch</span>
              </div>
            </div>

            <div className="absolute top-20 right-6 bg-white rounded-full px-3 py-1 shadow-sm">
              <div className="flex items-center text-sm">
                <FaGraduationCap className="text-blue-500 mr-1" />
                <span className="text-gray-700 font-medium">Promotion</span>
              </div>
            </div>

            <div className="absolute bottom-20 left-6 bg-white rounded-full px-3 py-1 shadow-sm">
              <div className="flex items-center text-sm">
                <FaStar className="text-green-500 mr-1" />
                <span className="text-gray-700 font-medium">Salary Hike</span>
              </div>
            </div>

            {/* Main Illustration */}
            <div className="relative">
              <div className="w-48 h-64 bg-gradient-to-b from-red-400 to-red-500 rounded-t-full relative overflow-hidden">
                {/* Rocket Body */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-white rounded-t-3xl shadow-lg">
                  {/* Person in rocket */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full relative">
                      {/* Face */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-200 rounded-full">
                        {/* Eyes */}
                        <div className="absolute top-3 left-2 w-1 h-1 bg-black rounded-full"></div>
                        <div className="absolute top-3 right-2 w-1 h-1 bg-black rounded-full"></div>
                        {/* Smile */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-1 border-b-2 border-black rounded-full"></div>
                      </div>
                      {/* Hair */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-black rounded-t-full"></div>
                    </div>
                  </div>
                  
                  {/* Rocket Windows */}
                  <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-200 rounded-full border-2 border-gray-300"></div>
                  
                  {/* Rocket Details */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gray-200 rounded"></div>
                </div>
                
                {/* Rocket Fins */}
                <div className="absolute bottom-0 left-4 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-red-600"></div>
                <div className="absolute bottom-0 right-4 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-red-600"></div>
              </div>
              
              {/* Flame Effect */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-yellow-400 via-orange-500 to-red-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-t from-yellow-300 to-orange-400 rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome! Sign up or Login
              </h2>
              <p className="text-gray-600">
                Join thousands of learners advancing their careers
              </p>
            </div>

            {!showEmailForm ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-6">
                <div className="flex">
                  <div className="flex items-center bg-gray-50 border border-gray-300 rounded-l-lg px-3">
                    <img 
                      src="https://flagcdn.com/w20/in.png" 
                      alt="India" 
                      className="w-5 h-3 mr-2"
                    />
                    <span className="text-gray-700 font-medium">+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Continue with Phone
                </button>
              </form>
            ) : (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
                
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Continue with Email
                </button>
              </form>
            )}

            <div className="text-center my-6">
              <span className="text-gray-500">or</span>
            </div>

            <button
              onClick={() => setShowEmailForm(!showEmailForm)}
              className="w-full text-gray-700 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors underline"
            >
              {showEmailForm ? 'Continue with Phone' : 'Continue with Email'}
            </button>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPopup;
