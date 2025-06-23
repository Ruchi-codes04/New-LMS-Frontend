import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaUsers, FaClock, FaCheckCircle, FaBuilding } from 'react-icons/fa';

const CorporateTraining = () => {
  const [selectedProgram, setSelectedProgram] = useState('all');

  const programs = [
    {
      id: 1,
      title: "Digital Transformation Training",
      category: "Technology",
      duration: "3 months",
      participants: "50-200",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Comprehensive digital transformation program for enterprises looking to modernize their operations.",
      features: [
        "Cloud Migration Strategies",
        "Digital Process Optimization",
        "Change Management",
        "Technology Assessment"
      ]
    },
    {
      id: 2,
      title: "Leadership Development Program",
      category: "Management",
      duration: "6 months",
      participants: "20-50",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Develop next-generation leaders with our comprehensive leadership training program.",
      features: [
        "Strategic Thinking",
        "Team Management",
        "Communication Skills",
        "Decision Making"
      ]
    },
    {
      id: 3,
      title: "Data Science & Analytics",
      category: "Technology",
      duration: "4 months",
      participants: "30-100",
      price: "Contact for pricing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Transform your workforce with data-driven decision making capabilities.",
      features: [
        "Data Analysis Techniques",
        "Machine Learning Basics",
        "Business Intelligence",
        "Predictive Analytics"
      ]
    }
  ];

  const categories = ['all', 'Technology', 'Management', 'Sales', 'Marketing'];

  const filteredPrograms = programs.filter(program =>
    selectedProgram === 'all' || program.category === selectedProgram
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="flex items-center text-teal-600 hover:text-teal-700 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Corporate Training Programs
          </h1>
          <p className="text-gray-600 text-lg">
            Empower your workforce with our customized corporate training solutions designed to drive business growth and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedProgram(category)}
                className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                  selectedProgram === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'All Programs' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Program Image */}
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-teal-600">
                    {program.category}
                  </span>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {program.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-1" />
                    <span>{program.participants}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <FaCheckCircle className="mr-2 text-green-500 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">{program.price}</span>
                  </div>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <FaBuilding className="mx-auto text-4xl text-teal-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our corporate training specialists to discuss your organization's specific needs and get a customized training solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTraining;