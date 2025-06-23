import React, { useState } from 'react';
import StudentTemplate from './StudentTemplate';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaFilter, FaSearch } from 'react-icons/fa';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      type: "workshop",
      date: "July 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Online",
      description: "Learn the latest web development techniques and tools in this hands-on workshop led by industry experts.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      seats: "50 seats available",
      featured: true
    },
    {
      id: 2,
      title: "Career Fair: Tech Industry",
      type: "career",
      date: "July 20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Bangalore Convention Center",
      description: "Connect with top tech companies hiring for various roles. Bring your resume and be prepared for on-the-spot interviews.",
      image: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      seats: "Open to all students",
      featured: true
    },
    {
      id: 3,
      title: "Guest Lecture: AI in Healthcare",
      type: "lecture",
      date: "July 25, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Online",
      description: "Join Dr. Priya Sharma as she discusses the revolutionary applications of artificial intelligence in modern healthcare.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      seats: "100 seats available",
      featured: false
    },
    {
      id: 4,
      title: "Hackathon: Sustainable Tech Solutions",
      type: "hackathon",
      date: "August 5-7, 2024",
      time: "48-hour event",
      location: "Hybrid (Online & Mumbai Campus)",
      description: "Put your skills to the test in this 48-hour hackathon focused on developing technology solutions for environmental sustainability.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      seats: "Registration required (teams of 3-5)",
      featured: true
    },
    {
      id: 5,
      title: "Networking Mixer: Tech Professionals",
      type: "networking",
      date: "August 12, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Hyderabad Campus",
      description: "Expand your professional network at this casual mixer event with alumni and industry professionals.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      seats: "Limited to 75 attendees",
      featured: false
    },
    {
      id: 6,
      title: "Workshop: Building Your Tech Portfolio",
      type: "workshop",
      date: "August 18, 2024",
      time: "1:00 PM - 4:00 PM",
      location: "Online",
      description: "Learn how to create an impressive tech portfolio that will help you stand out to potential employers.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      seats: "Unlimited",
      featured: false
    }
  ];
  
  // Filter events based on active filter
  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.type === activeFilter);
  
  const filters = [
    { id: 'all', name: 'All Events' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'career', name: 'Career Events' },
    { id: 'lecture', name: 'Guest Lectures' },
    { id: 'hackathon', name: 'Hackathons' },
    { id: 'networking', name: 'Networking' }
  ];
  
  return (
    <StudentTemplate 
      title="Upcoming Events" 
      subtitle="Workshops, career fairs, guest lectures, and more to enhance your learning experience"
    >
      <div className="space-y-8">
        {/* Featured Events */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.filter(event => event.featured).map(event => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded capitalize">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <FaCalendarAlt className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <FaClock className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 flex items-center">
                      <FaUsers className="mr-1" />
                      {event.seats}
                    </span>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded text-sm hover:bg-teal-700 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Event Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex space-x-2 mb-4 md:mb-0 overflow-x-auto pb-2 w-full md:w-auto">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        {/* All Events */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">All Events</h2>
          <div className="space-y-6">
            {filteredEvents.map(event => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="h-48 w-full object-cover md:h-full md:w-48"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                        <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded capitalize">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{event.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-gray-600 text-sm">
                          <FaCalendarAlt className="mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <FaClock className="mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <FaMapMarkerAlt className="mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <FaUsers className="mr-2" />
                          <span>{event.seats}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="bg-teal-600 text-white px-4 py-2 rounded text-sm hover:bg-teal-700 transition-colors">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Calendar View Button */}
        <div className="text-center mt-8">
          <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors inline-flex items-center">
            <FaCalendarAlt className="mr-2" />
            View Calendar
          </button>
        </div>
      </div>
    </StudentTemplate>
  );
};

export default Events;