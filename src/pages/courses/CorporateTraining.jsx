import React from 'react';
import { FaBuilding, FaUsers, FaChalkboardTeacher, FaLaptop, FaCertificate, FaChartLine, FaCheck, FaEnvelope, FaPhone } from 'react-icons/fa';

const CorporateTraining = () => {
  // Sample corporate training programs
  const trainingPrograms = [
    {
      id: 1,
      title: "Leadership Development",
      description: "Develop effective leadership skills for managers and executives to drive team performance and organizational success.",
      duration: "2-3 days",
      format: "In-person or Virtual",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Agile Project Management",
      description: "Master agile methodologies to improve project delivery, team collaboration, and adaptability to change.",
      duration: "3 days",
      format: "In-person or Virtual",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Data Analytics for Business",
      description: "Learn to leverage data for business insights, decision-making, and strategic planning using modern analytics tools.",
      duration: "4 days",
      format: "In-person or Virtual",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Digital Transformation",
      description: "Guide your organization through digital transformation with strategies for technology adoption and change management.",
      duration: "2 days",
      format: "In-person or Virtual",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Cybersecurity Essentials",
      description: "Protect your organization from cyber threats with training on security best practices, threat detection, and incident response.",
      duration: "3 days",
      format: "In-person or Virtual",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Effective Communication",
      description: "Enhance workplace communication skills to improve team collaboration, conflict resolution, and stakeholder engagement.",
      duration: "2 days",
      format: "In-person or Virtual",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Sample client logos
  const clients = [
    { id: 1, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
    { id: 2, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" },
    { id: 3, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" },
    { id: 4, name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png" },
    { id: 5, name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/512px-Deloitte.svg.png" },
    { id: 6, name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/512px-Accenture.svg.png" }
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      quote: "The leadership training program transformed our management team. We've seen measurable improvements in team performance and employee satisfaction.",
      author: "Sarah Johnson",
      position: "HR Director",
      company: "Global Tech Solutions"
    },
    {
      id: 2,
      quote: "The customized data analytics training helped our team develop the skills needed to drive our data-driven initiatives forward. Highly recommended!",
      author: "Michael Chen",
      position: "Chief Data Officer",
      company: "Innovate Financial Services"
    },
    {
      id: 3,
      quote: "Brain Bridge's corporate training programs are exceptional. The instructors are industry experts who provide practical insights our team could immediately apply.",
      author: "Jennifer Williams",
      position: "Learning & Development Manager",
      company: "Nexus Healthcare"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Corporate Training Solutions for Your Organization
              </h1>
              <p className="text-teal-100 text-lg mb-8 max-w-xl">
                Empower your workforce with customized training programs designed to enhance skills, boost productivity, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-teal-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-md">
                  Request a Consultation
                </button>
                <button className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-teal-800 hover:border-transparent transition-colors">
                  View Training Catalog
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Corporate Training" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Corporate Training</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver high-impact training solutions tailored to your organization's specific needs and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-teal-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customized Programs</h3>
              <p className="text-gray-600">
                Training solutions tailored to your organization's specific needs, challenges, and goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <FaChalkboardTeacher className="text-teal-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with extensive experience and proven expertise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <FaLaptop className="text-teal-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Delivery</h3>
              <p className="text-gray-600">
                Choose from in-person, virtual, or hybrid training formats to suit your team's needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <FaCertificate className="text-teal-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification Options</h3>
              <p className="text-gray-600">
                Industry-recognized certifications to validate skills and enhance professional credibility.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-teal-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable Results</h3>
              <p className="text-gray-600">
                Comprehensive assessment and reporting to track progress and demonstrate ROI.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <FaBuilding className="text-teal-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Solutions</h3>
              <p className="text-gray-600">
                Scalable training solutions for organizations of all sizes, from startups to enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Programs Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Training Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most requested corporate training programs, all customizable to meet your organization's specific requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map(program => (
              <div key={program.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">
                      <FaRegClock className="inline mr-1" /> {program.duration}
                    </span>
                    <span>
                      <FaUsers className="inline mr-1" /> {program.format}
                    </span>
                  </div>
                  <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-white border border-teal-600 text-teal-600 px-6 py-3 rounded-md font-medium hover:bg-teal-50 transition-colors">
              View All Training Programs
            </button>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure your training program delivers maximum impact and value.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-teal-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Needs Assessment</h3>
                  <p className="text-gray-600">
                    We begin by understanding your organization's specific training needs, challenges, and objectives through detailed consultation.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center transform -translate-x-1/2">
                  <span className="font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="md:hidden w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mb-4">
                    <span className="font-bold">1</span>
                  </div>
                </div>
              </div>
              
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right order-1 md:order-none">
                  <div className="md:hidden w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mb-4">
                    <span className="font-bold">2</span>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center transform -translate-x-1/2">
                  <span className="font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Program Design</h3>
                  <p className="text-gray-600">
                    Our experts design a customized training program tailored to your specific requirements, incorporating relevant case studies and exercises.
                  </p>
                </div>
              </div>
              
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Program Delivery</h3>
                  <p className="text-gray-600">
                    Experienced instructors deliver the training using engaging methods and practical examples to ensure maximum knowledge retention.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center transform -translate-x-1/2">
                  <span className="font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="md:hidden w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mb-4">
                    <span className="font-bold">3</span>
                  </div>
                </div>
              </div>
              
              <div className="md:flex items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right order-1 md:order-none">
                  <div className="md:hidden w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mb-4">
                    <span className="font-bold">4</span>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center transform -translate-x-1/2">
                  <span className="font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Evaluation & Follow-up</h3>
                  <p className="text-gray-600">
                    We measure the effectiveness of the training through assessments and provide follow-up support to ensure sustained implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join hundreds of organizations that have partnered with us for their corporate training needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map(client => (
              <div key={client.id} className="flex justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from organizations that have transformed their workforce through our training programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="mb-4 text-teal-600">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-3/5 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your workforce?</h2>
              <p className="text-teal-100 text-lg mb-6">
                Contact us today to discuss your organization's training needs and discover how our corporate training solutions can help you achieve your business goals.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                <div className="flex items-center text-white">
                  <FaEnvelope className="mr-2" />
                  <a href="mailto:corporate@brainbridge.com" className="hover:underline">corporate@brainbridge.com</a>
                </div>
                <div className="flex items-center text-white">
                  <FaPhone className="mr-2" />
                  <a href="tel:+918001234567" className="hover:underline">+91 800 123 4567</a>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Request a Consultation</h3>
                <form>
                  <div className="mb-4">
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea 
                      placeholder="Tell us about your training needs" 
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our corporate training programs.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How are your training programs customized?</h3>
                <p className="text-gray-600">
                  We begin with a thorough needs assessment to understand your organization's specific requirements, challenges, and goals. Based on this assessment, we design a tailored curriculum that addresses your unique needs, incorporating relevant case studies and practical exercises.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What delivery formats are available?</h3>
                <p className="text-gray-600">
                  We offer flexible delivery options including in-person training at your location, virtual instructor-led training, hybrid formats, and self-paced online learning. We can recommend the most effective format based on your team's needs and preferences.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How many employees can participate in a training program?</h3>
                <p className="text-gray-600">
                  Our programs can accommodate groups of various sizes, from small teams to entire departments. For optimal engagement and learning outcomes, we typically recommend 15-25 participants per session for interactive workshops, though this can be adjusted based on the training format and content.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you measure training effectiveness?</h3>
                <p className="text-gray-600">
                  We employ a comprehensive evaluation framework that includes pre and post-training assessments, participant feedback, knowledge retention checks, and follow-up evaluations to measure behavioral change and business impact. We provide detailed reports with actionable insights.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What industries do you serve?</h3>
                <p className="text-gray-600">
                  We provide corporate training across diverse industries including technology, finance, healthcare, manufacturing, retail, education, and government. Our instructors have industry-specific expertise to ensure relevant and applicable training content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTraining;