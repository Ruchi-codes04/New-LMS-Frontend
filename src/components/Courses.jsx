import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Courses = () => {
  const [showModal, setShowModal] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);
  const categories = [
    {
      id: 1,
      title: "Management",
      courses: "20 Courses",
      bgColor: "bg-purple-500",
      textColor: "text-purple-500",
    },
    {
      id: 2,
      title: "Art & Design",
      courses: "20 Courses",
      bgColor: "bg-teal-600",
      textColor: "text-teal-600",
    },
    {
      id: 3,
      title: "Personal Development",
      courses: "15 Courses",
      bgColor: "bg-green-500",
      textColor: "text-green-500",
    },
    {
      id: 4,
      title: "IT & Software",
      courses: "13 Courses",
      bgColor: "bg-orange-500",
      textColor: "text-orange-500",
    },
    {
      id: 5,
      title: "Health & Fitness",
      courses: "16 Courses",
      bgColor: "bg-red-500",
      textColor: "text-red-500",
    },
    {
      id: 6,
      title: "Business & Finance",
      courses: "12 Courses",
      bgColor: "bg-indigo-500",
      textColor: "text-indigo-500",
    },
    {
      id: 7,
      title: "Video & Photography",
      courses: "14 Courses",
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-600",
    },
    {
      id: 8,
      title: "Digital Printing",
      courses: "17 Courses",
      bgColor: "bg-teal-700",
      textColor: "text-teal-700",
    },
    {
      id: 9,
      title: "Music & Audio",
      courses: "22 Courses",
      bgColor: "bg-teal-500",
      textColor: "text-teal-500",
    },
    {
      id: 10,
      title: "Language Learning",
      courses: "18 Courses",
      bgColor: "bg-cyan-500",
      textColor: "text-cyan-500",
    },
    {
      id: 11,
      title: "Marketing",
      courses: "25 Courses",
      bgColor: "bg-emerald-500",
      textColor: "text-emerald-500",
    },
    {
      id: 12,
      title: "Lifestyle",
      courses: "19 Courses",
      bgColor: "bg-rose-500",
      textColor: "text-rose-500",
    },
    {
      id: 13,
      title: "Teaching & Academics",
      courses: "21 Courses",
      bgColor: "bg-violet-500",
      textColor: "text-violet-500",
    },
    {
      id: 14,
      title: "Office Productivity",
      courses: "16 Courses",
      bgColor: "bg-amber-500",
      textColor: "text-amber-600",
    },
    {
      id: 15,
      title: "Data Science",
      courses: "23 Courses",
      bgColor: "bg-slate-600",
      textColor: "text-slate-600",
    },
    {
      id: 16,
      title: "Mobile Development",
      courses: "20 Courses",
      bgColor: "bg-lime-500",
      textColor: "text-lime-600",
    },
  ];

  // Show first 8 categories by default in main view
  const mainCategories = categories.slice(0, 8);

  return (
    <section className="py-16 ">
      <div className="w-full px-0 sm:px-2 lg:px-4">
        {/* Section Header */}
        <div className="mb-8 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium mb-4">
            Course Categories
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Choose your{" "}
            <span className="text-teal-600"> area of interest</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {mainCategories.map((category) => (
            <div
              key={category.id}
              className="group rounded-2xl px-8 py-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-[0.5px] border-gray-200 relative overflow-hidden bg-teal-50 hover:bg-teal-100"
            >
              {/* Icon with dotted circle */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  {/* Dotted circle border */}
                  <div
                    className={`w-20 h-20 border-2 border-dashed rounded-full absolute inset-0
                    ${category.id === 1 ? "border-teal-600" : ""}
                    ${category.id === 2 ? "border-teal-600" : ""}
                    ${category.id === 3 ? "border-teal-600" : ""}
                    ${category.id === 4 ? "border-teal-600" : ""}
                    ${category.id === 5 ? "border-teal-600" : ""}
                    ${category.id === 6 ? "border-teal-600" : ""}
                    ${category.id === 7 ? "border-teal-600" : ""}
                    ${category.id === 8 ? "border-teal-600" : ""}
                  `}
                  ></div>

                  {/* Solid white circle with icon */}
                  <div
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center m-2 shadow-sm"
                  >
                    <svg
                      className="w-8 h-8 text-teal-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {category.id === 1 && (
                        // Management/Briefcase icon
                        <path d="M10 2v2H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-4zm2 4h4v12H8V6h4z" />
                      )}
                      {category.id === 2 && (
                        // Art & Design/Brush icon
                        <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
                      )}
                      {category.id === 3 && (
                        // Personal Development/Trophy icon
                        <path d="M7 4V2c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v2h4c.55 0 1 .45 1 1v5c0 2.76-2.24 5-5 5h-1.41l1.13 2.26c.11.22.03.49-.19.6L12 20.62l-4.53-1.76c-.22-.11-.3-.38-.19-.6L8.41 16H7c-2.76 0-5-2.24-5-5V5c0-.55.45-1 1-1h4zm2 0h6V3H9v1z" />
                      )}
                      {category.id === 4 && (
                        // IT & Software/Monitor icon
                        <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" />
                      )}
                      {category.id === 5 && (
                        // Health & Fitness/Heart icon
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      )}
                      {category.id === 6 && (
                        // Business & Finance/Dollar icon
                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                      )}
                      {category.id === 7 && (
                        // Video & Photography/Camera icon
                        <path d="M12 15.2c1.77 0 3.2-1.43 3.2-3.2s-1.43-3.2-3.2-3.2S8.8 10.23 8.8 12s1.43 3.2 3.2 3.2zm0-5.2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm7-3h-2.4L15 5H9L7.4 7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" />
                      )}
                      {category.id === 8 && (
                        // Digital Printing/Print icon
                        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                      )}
                      {category.id === 9 && (
                        // Music & Audio/Music icon
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                      )}
                      {category.id === 10 && (
                        // Language Learning/Translate icon
                        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                      )}
                      {category.id === 11 && (
                        // Marketing/Trending Up icon
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      )}
                      {category.id === 12 && (
                        // Lifestyle/Home icon
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                      )}
                      {category.id === 13 && (
                        // Teaching & Academics/School icon
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                      )}
                      {category.id === 14 && (
                        // Office Productivity/Work icon
                        <path d="M20 6h-2.5l-1.5-1.5h-5L9.5 6H7c-1.1 0-1.99.9-1.99 2L5 18c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H7V8h13v10z" />
                      )}
                      {category.id === 15 && (
                        // Data Science/Analytics icon
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                      )}
                      {category.id === 16 && (
                        // Mobile Development/Phone icon
                        <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z" />
                      )}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2 relative">
                  {category.title}
                  {/* Colored underline */}
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-12 rounded-full bg-teal-600"
                  ></div>
                </h3>
                <div className="inline-block px-3 py-1 border border-gray-200 rounded-md bg-white">
                  <p className="text-teal-600 font-medium text-xs">
                    {category.courses}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/courses/all"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold text-sm transition-all duration-300 ease-in-out hover:bg-teal-700 hover:translate-x-1 hover:shadow-lg hover:shadow-teal-600/40"
          >
            View All Courses
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with strong blur effect */}
          <div
            className="fixed inset-0 backdrop-blur-lg bg-white bg-opacity-10 transition-all duration-300"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
            {/* Modal Header - Fixed */}
            <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    All Categories
                  </h2>
                  <p className="text-teal-600 mt-1">
                    Explore all {categories.length} course categories
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="group rounded-2xl px-4 py-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-[0.5px] border-gray-200 relative overflow-hidden bg-teal-50 hover:bg-teal-100"
                  >
                    {/* Icon with dotted circle */}
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        {/* Dotted circle border */}
                        <div
                          className={`w-20 h-20 border-2 border-dashed rounded-full absolute inset-0
                          ${category.id === 1 ? "border-teal-600" : ""}
                          ${category.id === 2 ? "border-teal-600" : ""}
                          ${category.id === 3 ? "border-teal-600" : ""}
                          ${category.id === 4 ? "border-teal-600" : ""}
                          ${category.id === 5 ? "border-teal-600" : ""}
                          ${category.id === 6 ? "border-teal-600" : ""}
                          ${category.id === 7 ? "border-teal-600" : ""}
                          ${category.id === 8 ? "border-teal-600" : ""}
                          ${category.id === 9 ? "border-teal-600" : ""}
                          ${category.id === 10 ? "border-teal-600" : ""}
                          ${category.id === 11 ? "border-teal-600" : ""}
                          ${category.id === 12 ? "border-teal-600" : ""}
                          ${category.id === 13 ? "border-teal-600" : ""}
                          ${category.id === 14 ? "border-teal-600" : ""}
                          ${category.id === 15 ? "border-teal-600" : ""}
                          ${category.id === 16 ? "border-teal-600" : ""}
                        `}
                        ></div>

                        {/* Solid white circle with icon */}
                        <div
                          className="w-16 h-16 bg-white rounded-full flex items-center justify-center m-2 shadow-sm"
                        >
                          <svg
                            className="w-8 h-8 text-teal-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {/* All the same icons as before */}
                            {category.id === 1 && (
                              <path d="M10 2v2H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-4zm2 4h4v12H8V6h4z" />
                            )}
                            {category.id === 2 && (
                              <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
                            )}
                            {category.id === 3 && (
                              <path d="M7 4V2c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v2h4c.55 0 1 .45 1 1v5c0 2.76-2.24 5-5 5h-1.41l1.13 2.26c.11.22.03.49-.19.6L12 20.62l-4.53-1.76c-.22-.11-.3-.38-.19-.6L8.41 16H7c-2.76 0-5-2.24-5-5V5c0-.55.45-1 1-1h4zm2 0h6V3H9v1z" />
                            )}
                            {category.id === 4 && (
                              <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" />
                            )}
                            {category.id === 5 && (
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            )}
                            {category.id === 6 && (
                              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                            )}
                            {category.id === 7 && (
                              <path d="M12 15.2c1.77 0 3.2-1.43 3.2-3.2s-1.43-3.2-3.2-3.2S8.8 10.23 8.8 12s1.43 3.2 3.2 3.2zm0-5.2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm7-3h-2.4L15 5H9L7.4 7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" />
                            )}
                            {category.id === 8 && (
                              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                            )}
                            {category.id === 9 && (
                              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                            )}
                            {category.id === 10 && (
                              <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                            )}
                            {category.id === 11 && (
                              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                            )}
                            {category.id === 12 && (
                              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            )}
                            {category.id === 13 && (
                              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                            )}
                            {category.id === 14 && (
                              <path d="M20 6h-2.5l-1.5-1.5h-5L9.5 6H7c-1.1 0-1.99.9-1.99 2L5 18c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H7V8h13v10z" />
                            )}
                            {category.id === 15 && (
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                            )}
                            {category.id === 16 && (
                              <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z" />
                            )}
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 relative">
                        {category.title}
                        {/* Colored underline */}
                        <div
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-12 rounded-full bg-teal-600"
                        ></div>
                      </h3>
                      <div className="inline-block px-3 py-1 border border-gray-200 rounded-md bg-white">
                        <p className="text-teal-600 font-medium text-xs">
                          {category.courses}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
