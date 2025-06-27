import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider, useTheme } from '../../contexts/ThemeContext';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import MyCourses from './MyCourses';
import Contact from './Contact';
import AssessmentScores from './assessmentscore';
import Interest from './Interest';
import Settings from './Settings';
import { Navigate, useNavigate } from 'react-router-dom';

// Notification Component
const Notification = ({ message, type, onClose }) => {
  if (!message) return null;
  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md shadow-lg text-white transition-opacity duration-300 z-50 ${
        type === 'error' ? 'bg-red-500' : 'bg-green-500'
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 hover:text-gray-200">✕</button>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = ({ activePage, sidebarWidth, isSidebarOpen, userName }) => {
  const { theme, setTheme } = useTheme();
  const pageName = activePage.charAt(0).toUpperCase() + activePage.slice(1);
  const subtitle = `Welcome back! Here's your ${pageName.toLowerCase()} overview`;
  const initials = userName ? userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'JP';

  const toggleThemeHandler = () => {
    console.log('Toggling theme from:', theme);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav 
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 shadow-md flex items-center justify-between"
      style={{ marginLeft: isSidebarOpen ? '256px' : sidebarWidth }}
    >
      <div className="flex items-center space-x-4">
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div>
          <h1 className="text-xl font-bold">{pageName}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2" onClick={toggleThemeHandler}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: theme === 'dark' ? '#FFD700' : 'currentColor' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
        <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">0 New</button>
        <button className="p-2 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
          {initials}
        </button>
      </div>
    </nav>
  );
};

const ParentLayout = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState('64px');
  const [userName, setUserName] = useState(null);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => setNotification({ message: '', type: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.message]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Profile Token:', token);
        if (!token) {
          setNotification({ message: 'Authentication required. Please log in.', type: 'error' });
          setTimeout(() => navigate('/login'), 2000);
          return;
        }

        const res = await axios.get('https://lms-backend-flwq.onrender.com/api/v1/students/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const studentData = res.data.data;
        setUserName(studentData.firstName || `${studentData.firstName} ${studentData.lastName}` || 'User');
      } catch (err) {
        console.error('Error fetching profile:', err);
        let message = 'Unable to retrieve profile data. Please try again later.';
        if (err.response?.status === 401) {
          message = 'Session expired or invalid token. Please log in again.';
          setNotification({ message, type: 'error' });
          setTimeout(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login');
          }, 2000);
        } else if (err.response?.data?.message) {
          message = err.response.data.message;
        }
        setNotification({ message, type: 'error' });
      }
    };

    fetchProfile();
  }, [navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarToggle = (isExpanded) => {
    setSidebarWidth(isExpanded ? '256px' : '64px');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Navigate to="/" />;
      case 'dashboard': return <Dashboard sidebarWidth={sidebarWidth} />;
      case 'Achievements': return <MyCourses sidebarWidth={sidebarWidth} />;
      case 'contact': return <Contact sidebarWidth={sidebarWidth} relatedCourseId={null} />;
      case 'assessmentscore': return <AssessmentScores sidebarWidth={sidebarWidth} />;
      case 'Interest': return <Interest sidebarWidth={sidebarWidth} />;
      case 'Settings': return <Settings sidebarWidth={sidebarWidth} />;
      default: return <Dashboard sidebarWidth={sidebarWidth} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-700">
        <Notification message={notification.message} type={notification.type} onClose={() => setNotification({ message: '', type: '' })} />
        <Navbar activePage={activePage} sidebarWidth={sidebarWidth} isSidebarOpen={isSidebarOpen} userName={userName} />
        <button
          className="md:hidden fixed top-4 right-4 z-20 p-2 bg-[#49BBBD] dark:bg-[#2A9D8F] text-white dark:text-gray-100 rounded-md"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close' : 'Menu'}
        </button>
        <div
          className={`fixed left-0 h-screen transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0 w-64' : 'md:w-16 w-0 -translate-x-full md:translate-x-0'
          } z-40 bg-white dark:bg-gray-800`}
          onMouseEnter={() => handleSidebarToggle(true)}
          onMouseLeave={() => handleSidebarToggle(false)}
        >
          <Sidebar
            activePage={activePage}
            setActivePage={(page) => { setActivePage(page); setIsSidebarOpen(false); }}
          />
        </div>
        {isSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-70 z-30"
            onClick={toggleSidebar}
          ></div>
        )}
        <div
          className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-700 px-2 min-h-screen transition-all duration-300"
          style={{ marginLeft: isSidebarOpen ? '256px' : sidebarWidth }}
        >
          {renderPage()}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ParentLayout;