import React from 'react';

const TrendingCourses = () => {
  const trendingCourses = [
    {
      id: 1,
      title: 'The Complete Digital Marketing Course - 12 Courses in 1',
      instructor: {
        name: 'Larry Lawson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face'
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      level: 'All level',
      duration: '6 month',
      rating: 4.5,
      reviews: 6500,
      bookmarked: false
    },
    {
      id: 2,
      title: 'Angular – The Complete Guide (2021 Edition)',
      instructor: {
        name: 'Billy Vasquez',
        title: 'Developer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
      },
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      level: 'Beginner',
      duration: '8 month',
      rating: 4.5,
      reviews: 5436,
      bookmarked: true
    },
    {
      id: 3,
      title: 'Time Management Mastery: Do More, Stress Less',
      instructor: {
        name: 'Lori Stevens',
        title: 'Psychologist',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face'
      },
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      level: 'Beginner',
      duration: '12 month',
      rating: 3.5,
      reviews: 1254,
      bookmarked: false
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-sm text-yellow-400">★</span>);
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-sm relative">
          <span className="text-gray-300">★</span>
          <span className="absolute inset-0 text-yellow-400 overflow-hidden w-1/2">★</span>
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-sm text-gray-300">★</span>);
    }

    return stars;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Trending <span className="text-teal-600">Courses</span> </h2>
          <p className="text-lg text-gray-600">Find courses that are best for your profession</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium text-white ${
                    course.level.toLowerCase().replace(' ', '-') === 'all-level'
                      ? 'bg-teal-600'
                      : 'bg-blue-500'
                  }`}>
                    {course.level}
                  </span>
                  <span className="px-2 py-1 rounded text-xs font-medium text-white bg-black bg-opacity-60">
                    {course.duration}
                  </span>
                </div>
                <button className={`absolute top-3 right-3 w-8 h-8 rounded-md flex items-center justify-center transition-all duration-300 ${
                  course.bookmarked
                    ? 'bg-teal-600 text-white'
                    : 'bg-white bg-opacity-90 text-gray-600 hover:bg-white hover:text-teal-600'
                }`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M19 21L12 16L5 21V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21Z"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          fill={course.bookmarked ? "currentColor" : "none"}/>
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">{course.instructor.name}</span>
                    {course.instructor.title && (
                      <span className="text-xs text-gray-600">{course.instructor.title}</span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-snug overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {course.title}
                </h3>

                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {renderStars(course.rating)}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    {course.rating} ({course.reviews.toLocaleString()})
                  </span>
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
