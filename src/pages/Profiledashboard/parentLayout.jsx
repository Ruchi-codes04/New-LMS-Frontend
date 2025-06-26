import React, { useState } from 'react';
import { ThemeProvider } from '../Profiledashboard/ThemeContext';
import Sidebar from './sidebar'; // Corrected typo from './idebar' to './Sidebar'
import Dashboard from './dashboard';
import MyCourses from './MyCourses';
import Contact from './contact';
import AssessmentScores from './assessmentscore';
import Interest from './Interest';
import Settings from './Settings';
import { Navigate } from 'react-router-dom';

const ParentLayout = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState('64px');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarToggle = (isExpanded) => {
    setSidebarWidth(isExpanded ? '256px' : '64px');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Navigate to="/" />;
      case 'dashboard':
        return <Dashboard sidebarWidth={sidebarWidth} />;
      case 'Achievements':
        return <MyCourses sidebarWidth={sidebarWidth} />;
      case 'contact':
        return <Contact sidebarWidth={sidebarWidth} />;
      case 'assessmentscore':
        return <AssessmentScores sidebarWidth={sidebarWidth} />;
      case 'Interest':
        return <Interest sidebarWidth={sidebarWidth} />;
      case 'Settings':
        return <Settings sidebarWidth={sidebarWidth} />;
      default:
        return <Dashboard sidebarWidth={sidebarWidth} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar Toggle Button (Visible only on mobile) */}
        <button
          className="md:hidden fixed top-4 right-4 z-20 p-2 bg-[#49BBBD] dark:bg-[#2A9D8F] text-white dark:text-gray-100 rounded-md"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close' : 'Menu'}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed left-0 h-screen transition-all duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0 w-64' : 'md:w-16 w-0 -translate-x-full md:translate-x-0'
          } z-40`}
          onMouseEnter={() => handleSidebarToggle(true)}
          onMouseLeave={() => handleSidebarToggle(false)}
        >
          <Sidebar
            activePage={activePage}
            setActivePage={(page) => {
              setActivePage(page);
              setIsSidebarOpen(false);
            }}
          />
        </div>

        {/* Overlay when sidebar is open (Visible only on mobile) */}
        {isSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-30"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Content Area */}
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