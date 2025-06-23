import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import AboutTemplate from './AboutTemplate';

const OurBlogs = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "10 In-Demand Tech Skills to Learn in 2024",
      excerpt: "Stay ahead of the curve with these top tech skills that employers are looking for this year.",
      category: "career",
      author: "Sarah Johnson",
      date: "June 15, 2024",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Future of AI in Education: Trends and Predictions",
      excerpt: "Explore how artificial intelligence is transforming the educational landscape and what to expect in the coming years.",
      category: "technology",
      author: "Michael Chen",
      date: "June 10, 2024",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "How to Build an Effective Learning Routine",
      excerpt: "Practical tips for creating a sustainable learning habit that fits into your busy schedule.",
      category: "learning",
      author: "Emily Rodriguez",
      date: "June 5, 2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "From Bootcamp to Job Offer: A Success Story",
      excerpt: "Follow the journey of a Brain Bridge student who went from complete beginner to employed developer in 6 months.",
      category: "success-stories",
      author: "David Kim",
      date: "May 28, 2024",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "The Complete Guide to Remote Work for Developers",
      excerpt: "Everything you need to know about finding, securing, and thriving in a remote development role.",
      category: "career",
      author: "Olivia Wilson",
      date: "May 20, 2024",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      readTime: "15 min read"
    },
    {
      id: 6,
      title: "Understanding the Basics of Machine Learning",
      excerpt: "A beginner-friendly introduction to machine learning concepts and applications.",
      category: "technology",
      author: "James Taylor",
      date: "May 15, 2024",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      readTime: "9 min read"
    }
  ];
  
  // Filter blogs based on active category
  const filteredBlogs = activeCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'career', name: 'Career Advice' },
    { id: 'learning', name: 'Learning Tips' },
    { id: 'success-stories', name: 'Success Stories' }
  ];
  
  const blogsContent = (
    <>
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaCalendarAlt className="mr-2" />
                <span>{blog.date}</span>
                <span className="mx-2">•</span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {blog.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaUser className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{blog.author}</span>
                </div>
                <div className="flex items-center">
                  <FaTag className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600 capitalize">{blog.category.replace('-', ' ')}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const additionalContent = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Articles</h2>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-2/5">
            <img 
              className="h-64 w-full object-cover md:h-full" 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Featured article" 
            />
          </div>
          <div className="p-8 md:w-3/5">
            <div className="uppercase tracking-wide text-sm text-teal-600 font-semibold">Special Report</div>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900">The State of Tech Education in 2024</h2>
            <p className="mt-3 text-gray-600">
              Our comprehensive analysis of current trends, challenges, and opportunities in technology education. Discover what's working, what's not, and where the industry is headed.
            </p>
            <div className="mt-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Read Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Stay updated with the latest articles, tutorials, and insights from our experts. We'll send you a curated digest of our best content every week.
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <button className="px-4 py-2 bg-teal-600 text-white rounded-r-md hover:bg-teal-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <AboutTemplate 
      title="Our Blog"
      subtitle="Insights, tutorials, and resources to help you advance your skills and career."
      content={blogsContent}
      additionalContent={additionalContent}
    />
  );
};

export default OurBlogs;