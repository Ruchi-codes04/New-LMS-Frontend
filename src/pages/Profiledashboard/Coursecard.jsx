import React, { useState, useEffect } from "react";
import { FaPlay, FaBookmark } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md shadow-lg text-white transition-opacity duration-300 z-50 ${
        type === "error" ? "bg-red-500" : "bg-green-500"
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 hover:text-gray-200 cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const CoursesPage = () => {
  const [bookmarkedCourses, setBookmarkedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const API_BASE_URL = "https://new-lms-backend-vmgr.onrender.com/api/v1/students";

  const fetchBookmarkedCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await axios.get(
        `${API_BASE_URL}/courses/bookmarked`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setBookmarkedCourses(response.data.data);
      } else {
        setError(response.data.message || 'Failed to fetch bookmarks');
      }
    } catch (err) {
      console.error('Bookmarks API Error:', err);
      const errorMessage = err.response?.data?.message || 
                          err.message || 
                          'Failed to load bookmarks';
      setError(errorMessage);
      setNotification({
        message: errorMessage,
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarkedCourses();
  }, []);

  const handleBookmark = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setNotification({ message: 'Please login to manage bookmarks', type: 'error' });
        return;
      }

      const isBookmarked = bookmarkedCourses.some(c => c._id === courseId);
      
      const config = {
        method: isBookmarked ? 'delete' : 'post',
        url: `${API_BASE_URL}/courses/${courseId}/bookmark`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      const response = await axios(config);

      if (response.data.success) {
        setNotification({
          message: isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks',
          type: 'success',
        });
        await fetchBookmarkedCourses();
      }
    } catch (err) {
      console.error('Bookmark Error:', err);
      let errorMessage = 'Bookmark operation failed';
      
      if (err.response) {
        if (err.response.status === 401) {
          errorMessage = 'Session expired. Please login again.';
          localStorage.removeItem('token');
          navigate('/login');
        } else if (err.response.data?.message) {
          errorMessage = err.response.data.message;
        }
      }
      
      setNotification({
        message: errorMessage,
        type: 'error',
      });
    }
  };

  const handlePlayCourse = (courseId) => {
    console.log("Navigating to course-player with ID:", courseId);
    navigate(`/course-player/${courseId}`);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const displayedCourses = bookmarkedCourses.slice(0, 3);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 p-4 rounded-lg text-center">
        <p className="text-red-700">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 text-sm bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Notification 
        message={notification.message} 
        type={notification.type} 
        onClose={() => setNotification({ message: '', type: '' })} 
      />

      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          My Bookmarked Courses
        </h2>
      </div>

      {bookmarkedCourses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            You haven't bookmarked any courses yet.
          </p>
          <button
            onClick={() => navigate('/courses')}
            className="mt-4 px-8 py-3 bg-[#59c1c3] text-white rounded-full font-semibold text-lg hover:bg-[#7ddedf] transition-colors duration-300 shadow-lg cursor-pointer"
          >
            Browse Courses
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCourses.map((course) => (
              <div
                key={course._id}
                className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow relative cursor-pointer"
                onClick={() => handlePlayCourse(course._id)}
              >
                <div className="relative h-48 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  {course.thumbnail ? (
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x200?text=No+Thumbnail";
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      {course.title.includes("C++") && (
                        <img
                          src="https://via.placeholder.com/300x200?text=C++"
                          alt="C++ Thumbnail"
                          className="w-full h-full object-contain"
                        />
                      )}
                      {course.title.includes("Python") && (
                        <img
                          src="https://via.placeholder.com/300x200?text=Python"
                          alt="Python Thumbnail"
                          className="w-full h-full object-contain"
                        />
                      )}
                      {course.title.includes("MERN") && (
                        <img
                          src="https://via.placeholder.com/300x200?text=MERN"
                          alt="MERN Thumbnail"
                          className="w-full h-full object-contain"
                        />
                      )}
                      {!course.title.includes("C++") && !course.title.includes("Python") && !course.title.includes("MERN") && (
                        <span className="text-gray-500">No thumbnail</span>
                      )}
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayCourse(course._id);
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#49BBBD] text-white p-2 rounded-full shadow-lg hover:scale-110 z-10 cursor-pointer"
                  >
                    <FaPlay />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookmark(course._id);
                    }}
                    className={`absolute top-2 right-2 p-2 rounded-full ${
                      bookmarkedCourses.some(c => c._id === course._id)
                        ? 'text-yellow-500 bg-white bg-opacity-90'
                        : 'text-gray-500 bg-white bg-opacity-70 hover:bg-opacity-90'
                    } cursor-pointer`}
                  >
                    <FaBookmark />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-md text-gray-800 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {course.description || "Learn about this course"}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-gray-800">
                      ₹{course.discountPrice || course.price}
                    </span>
                    {course.discountPrice && (
                      <span className="text-gray-500 line-through">
                        ₹{course.price}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mt-2">
                    <img
                      src={course.instructor?.avatar || "https://via.placeholder.com/24"}
                      alt={course.instructor?.firstName || "Instructor"}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-700 mr-2">
                      {course.instructor?.firstName || "Unknown"}{" "}
                      {course.instructor?.lastName || ""}
                    </span>
                    <span className="text-yellow-500">⭐ {course.rating || 0}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {bookmarkedCourses.length > 3 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={openModal}
                className="px-8 py-3 bg-[#59c1c3] text-white rounded-full font-semibold text-lg hover:bg-[#7ddedf] transition-colors duration-300 shadow-lg cursor-pointer"
              >
                View All Bookmarked Courses
              </button>
            </div>
          )}

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    All Bookmarked Courses
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bookmarkedCourses.map((course) => (
                    <div
                      key={course._id}
                      className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow relative cursor-pointer"
                      onClick={() => handlePlayCourse(course._id)}
                    >
                      <div className="relative h-48 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        {course.thumbnail ? (
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/300x200?text=No+Thumbnail";
                            }}
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full">
                            {course.title.includes("C++") && (
                              <img
                                src="https://via.placeholder.com/300x200?text=C++"
                                alt="C++ Thumbnail"
                                className="w-full h-full object-contain"
                              />
                            )}
                            {course.title.includes("Python") && (
                              <img
                                src="https://via.placeholder.com/300x200?text=Python"
                                alt="Python Thumbnail"
                                className="w-full h-full object-contain"
                              />
                            )}
                            {course.title.includes("MERN") && (
                              <img
                                src="https://via.placeholder.com/300x200?text=MERN"
                                alt="MERN Thumbnail"
                                className="w-full h-full object-contain"
                              />
                            )}
                            {!course.title.includes("C++") && !course.title.includes("Python") && !course.title.includes("MERN") && (
                              <span className="text-gray-500">No thumbnail</span>
                            )}
                          </div>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayCourse(course._id);
                            closeModal();
                          }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#49BBBD] text-white p-2 rounded-full shadow-lg hover:scale-110 z-10 cursor-pointer"
                        >
                          <FaPlay />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookmark(course._id);
                          }}
                          className={`absolute top-2 right-2 p-2 rounded-full ${
                            bookmarkedCourses.some(c => c._id === course._id)
                              ? 'text-yellow-500 bg-white bg-opacity-90'
                              : 'text-gray-500 bg-white bg-opacity-70 hover:bg-opacity-90'
                          } cursor-pointer`}
                        >
                          <FaBookmark />
                        </button>
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-md text-gray-800 mb-1">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {course.description || "Learn about this course"}
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-bold text-gray-800">
                            ₹{course.discountPrice || course.price}
                          </span>
                          {course.discountPrice && (
                            <span className="text-gray-500 line-through">
                              ₹{course.price}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center mt-2">
                          <img
                            src={course.instructor?.avatar || "https://via.placeholder.com/24"}
                            alt={course.instructor?.firstName || "Instructor"}
                            className="w-6 h-6 rounded-full mr-2"
                          />
                          <span className="text-sm text-gray-700 mr-2">
                            {course.instructor?.firstName || "Unknown"}{" "}
                            {course.instructor?.lastName || ""}
                          </span>
                          <span className="text-yellow-500">⭐ {course.rating || 0}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CoursesPage;