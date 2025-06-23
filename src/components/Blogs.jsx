import React from 'react';
import { FaCalendarAlt, FaCommentAlt } from 'react-icons/fa';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Become a Better Blogger Content Planning",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      date: "May 20, 2025",
      comments: 5,
      category: "EDUCATION",
      categoryColor: "bg-white"
    },
    {
      id: 2,
      title: "How to Keep Workouts Fresh in the Morning",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      date: "May 20, 2025",
      comments: 5,
      category: "WORKOUT",
      categoryColor: "bg-white"
    },
    {
      id: 3,
      title: "Four Ways to Keep Your Workout Routine Fresh",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "May 20, 2025",
      comments: 5,
      category: "TIPS",
      categoryColor: "bg-white"
    },
    // {
    //   id: 4,
    //   title: "Effective Study Techniques for Online Learning",
    //   image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //   date: "May 18, 2025",
    //   comments: 8,
    //   category: "LEARNING",
    //   categoryColor: "bg-white"
    // }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-teal-600 text-white rounded-full text-sm font-medium mb-4">
            Blogs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-poppins">
            Get Latest News with
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Brain Bridge
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-18 justify-items-center place-items-center mx-auto px-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-72 h-96 mx-4">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${post.categoryColor} text-teal-600 px-3 py-1 rounded-md text-xs font-semibold`}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Meta Information */}
                <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCommentAlt className="w-3 h-3" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins leading-tight group-hover:text-teal-600 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Read More Link */}
                <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors duration-300 text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            View All Posts
          </button>
        </div>

        {/* Promotional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
          {/* Expert Instructor Card */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white relative overflow-hidden h-72 mr-4">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 font-poppins">
                Expert <span className="text-white">Instructor Live</span>
              </h3>
              <h3 className="text-2xl font-bold mb-4 font-poppins">Classes Here</h3>
              <p className="text-purple-100 mb-2 text-sm">
                Top instructors from around
              </p>
              <p className="text-purple-100 mb-6 text-sm">
                the world
              </p>
              <button className="bg-white text-teal-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 text-sm">
                Become A Teacher
              </button>
            </div>
            {/* Instructor Image */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Female Teacher"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Free Online Courses Card */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white relative overflow-hidden h-72">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 font-poppins">
                Free Online Courses
              </h3>
              <h3 className="text-2xl font-bold mb-4 font-poppins">
                from <span className="text-white">Edutec</span>
              </h3>
              <p className="text-purple-100 mb-2 text-sm">
                Top instructors from around
              </p>
              <p className="text-purple-100 mb-6 text-sm">
                the world
              </p>
              <button className="bg-white text-teal-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 text-sm">
                Become A Student
              </button>
            </div>
            {/* Student Image */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Male Student"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
