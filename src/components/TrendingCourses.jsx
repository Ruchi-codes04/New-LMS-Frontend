import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegClock, FaUserGraduate } from 'react-icons/fa';

const TrendingCourses = () => {
  const trendingCourses = [
    {
      id: 1,
      title: 'The Complete Digital Marketing Course - 12 Courses in 1',
      description: 'Master digital marketing with SEO, SEM, social media marketing, content marketing and analytics.',
      instructor: 'Larry Lawson',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      level: 'All Levels',
      duration: '42 hours',
      rating: 4.5,
      reviews: 6500,
      students: 25000,
      price: '₹11,499',
      originalPrice: '₹16,999'
    },
    {
      id: 2,
      title: 'Angular – The Complete Guide (2024 Edition)',
      description: 'Master Angular from basics to advanced concepts with hands-on projects and real-world applications.',
      instructor: 'Billy Vasquez',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      level: 'Beginner',
      duration: '48 hours',
      rating: 4.7,
      reviews: 5436,
      students: 18500,
      price: '₹12,999',
      originalPrice: '₹18,999'
    },
    {
      id: 3,
      title: 'Time Management Mastery: Do More, Stress Less',
      description: 'Learn proven time management techniques to boost productivity and reduce stress in your daily life.',
      instructor: 'Lori Stevens',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      level: 'Beginner',
      duration: '24 hours',
      rating: 4.3,
      reviews: 1254,
      students: 8900,
      price: '₹8,999',
      originalPrice: '₹12,999'
    }
  ];



  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-left mb-5">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Trending <span className="text-teal-600">Courses</span> </h2>
          <p className="text-lg text-gray-600">Find courses that are best for your profession</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="relative pb-[56.25%]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>

                <div className="flex items-center mb-3">
                  <p className="text-sm text-gray-700">By <span className="font-medium">{course.instructor}</span></p>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-400 font-bold mr-1">{course.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">({course.reviews})</span>
                  <span className="text-xs text-gray-500 ml-4">{course.students.toLocaleString()} students</span>
                </div>

                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <div className="flex items-center mr-3">
                    <FaRegClock className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUserGraduate className="mr-1" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-gray-900">{course.price}</span>
                    <span className="text-gray-500 text-sm line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="bg-teal-600 text-white px-4 py-2 rounded text-sm hover:bg-teal-700 transition-colors inline-block text-center"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
