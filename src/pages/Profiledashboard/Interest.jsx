import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import defaultCourseAvatar from '../../assets/iconsss.png';

const InterestPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [myInterests, setMyInterests] = useState(() => {
    const savedInterests = localStorage.getItem('myInterests');
    return savedInterests ? JSON.parse(savedInterests) : [];
  });
  const [courses, setCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const initialVisibleCount = 5;
  const navigate = useNavigate();

  // Validate image URL
  const isValidImageUrl = (url) => {
    return typeof url === 'string' && url.match(/\.(jpeg|jpg|png|gif|webp)$/i);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://lms-backend-flwq.onrender.com/api/v1/courses');
        if (response.data.success) {
          console.log('Courses:', response.data.data); // Log for debugging
          setCourses(response.data.data);
        } else {
          setError('Failed to fetch courses');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Error fetching courses');
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    localStorage.setItem('myInterests', JSON.stringify(myInterests));
  }, [myInterests]);

  const handleAddInterest = (courseCategory) => {
    if (!myInterests.includes(courseCategory)) {
      setMyInterests([...myInterests, courseCategory]);
    }
  };

  const handleRemoveInterest = (interest) => {
    setMyInterests(myInterests.filter((item) => item !== interest));
  };

  const handleToggleView = (e) => {
    e.preventDefault();
    setVisibleCourses((prev) =>
      prev < uniqueCategories.length ? uniqueCategories.length : initialVisibleCount
    );
  };

  const uniqueCategories = [
    ...new Set(courses.map((course) => course.category)),
  ]
    .filter((category) =>
      category?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((category) => !myInterests.includes(category))
    .sort((a, b) => a.localeCompare(b));

  const allInterestCourses = courses.filter((course) =>
    myInterests.includes(course.category)
  );

  const handleCourseClick = (course) => {
    navigate(`/courses/${course._id}`);
  };

  const defaultInstructorAvatar = 'https://via.placeholder.com/30?text=Instructor';

  if (loading) return <p className="text-gray-600 dark:text-gray-400">Loading courses...</p>;
  if (error) return <p className="text-red-500 dark:text-red-400">{error}</p>;

  return (
    <div className="w-full min-h-screen mx-auto p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg max-w-7xl flex flex-col transition-colors duration-300">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        What are your interests?
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Please let us know topics of interest to you, so we can help identify the content that would be most relevant to you.
      </p>

      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search categories"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && uniqueCategories.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            No matching categories found
          </p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          My Interests
        </h2>
        {myInterests.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No Interests</p>
        ) : (
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {myInterests.map((interest, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-200 flex items-center"
                  onClick={() => handleRemoveInterest(interest)}
                >
                  {interest} <span className="ml-2 text-red-500 dark:text-red-400">✕</span>
                </button>
              ))}
            </div>
            {allInterestCourses.length > 0 && (
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Associated Courses
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allInterestCourses.map((course, idx) => (
                    <div
                      key={course._id || idx}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between"
                    >
                      <div>
                        <img
                          src={isValidImageUrl(course.thumbnail) ? course.thumbnail : defaultCourseAvatar}
                          alt={course.title || 'Course Image'}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                          onError={(e) => {
                            console.log(`Image failed to load for course: ${course.title}, URL: ${course.thumbnail}`);
                            e.target.src = defaultCourseAvatar;
                          }}
                        />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {course.title || 'Untitled Course'}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                          {course.category || 'No category'}
                        </p>
                        <p className="text-green-600 dark:text-green-400 font-bold mt-2">
                          ₹{course.discountPrice || course.price || '0'}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={course.instructor?.avatar || defaultInstructorAvatar}
                            alt="Instructor"
                            className="w-8 h-8 rounded-full mr-2"
                            onError={(e) => (e.target.src = defaultInstructorAvatar)}
                          />
                          <span className="text-gray-700 dark:text-gray-300">
                            {course.instructor
                              ? `${course.instructor.firstName} ${course.instructor.lastName}`
                              : 'Unknown Instructor'}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-500 dark:text-yellow-400 mr-1">★</span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {course.rating || '0'}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCourseClick(course)}
                        className="mt-4 w-full bg-blue-500 dark:bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-200"
                      >
                        View Course
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          All Categories
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Pick categories below you're interested in and help Infosys Springboard to know you better. The platform will use this information to improve your learning recommendations. The more often you use Infosys Springboard, the better the recommendations will be. Take the first step to your personalized learning experience!
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {uniqueCategories.slice(0, visibleCourses).map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-200"
              onClick={() => handleAddInterest(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {uniqueCategories.length > initialVisibleCount && (
          <a
            href="#"
            className="text-blue-500 dark:text-blue-400 hover:underline"
            onClick={handleToggleView}
          >
            {visibleCourses < uniqueCategories.length
              ? `View ${uniqueCategories.length - visibleCourses} more`
              : 'View less'}
          </a>
        )}
      </div>
    </div>
  );
};

export default InterestPage;