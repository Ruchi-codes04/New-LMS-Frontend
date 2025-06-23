import React from 'react';
import { FaStar, FaBuilding, FaGraduationCap, FaUser } from 'react-icons/fa';
import AboutTemplate from './AboutTemplate';

const OurCustomers = () => {
  const customersContent = (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Serve</h2>
      <p className="mb-6">
        Brain Bridge is proud to serve a diverse community of learners, businesses, and educational institutions worldwide. Our courses and training solutions are designed to meet the unique needs of different customer segments, from individual learners seeking career advancement to enterprises looking to upskill their workforce.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FaUser className="text-teal-600 text-2xl mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Individual Learners</h3>
          </div>
          <p className="text-gray-700">
            Students, professionals, career changers, and lifelong learners seeking to acquire new skills, advance their careers, or pursue personal interests.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FaBuilding className="text-teal-600 text-2xl mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Businesses & Organizations</h3>
          </div>
          <p className="text-gray-700">
            Companies of all sizes looking to train employees, close skill gaps, and build a more competitive workforce through customized learning solutions.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-teal-600 text-2xl mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Educational Institutions</h3>
          </div>
          <p className="text-gray-700">
            Schools, colleges, and universities that partner with us to enhance their curriculum, provide additional learning resources, or offer specialized training.
          </p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Customer Success Stories</h2>
      <p className="mb-6">
        Our customers' success is our success. We're proud of the impact our courses and training programs have had on individuals and organizations around the world. Here are just a few examples of how Brain Bridge has helped our customers achieve their goals:
      </p>
      
      <div className="border-l-4 border-teal-600 pl-6 py-2 mb-6">
        <p className="italic text-gray-700">
          "Brain Bridge's Data Science program helped me transition from marketing to analytics. Within three months of completing the course, I landed a job as a junior data analyst with a 40% salary increase."
        </p>
        <p className="mt-2 font-medium">— Michael T., Individual Learner</p>
      </div>
      
      <div className="border-l-4 border-teal-600 pl-6 py-2 mb-6">
        <p className="italic text-gray-700">
          "We partnered with Brain Bridge to upskill our IT department in cloud technologies. The customized training program was exactly what we needed, and we've seen a 30% increase in project delivery efficiency since implementation."
        </p>
        <p className="mt-2 font-medium">— Sarah J., CTO at Global Solutions Inc.</p>
      </div>
      
      <div className="border-l-4 border-teal-600 pl-6 py-2">
        <p className="italic text-gray-700">
          "Integrating Brain Bridge's programming courses into our computer science curriculum has given our students a competitive edge. The practical, project-based approach complements our theoretical teaching perfectly."
        </p>
        <p className="mt-2 font-medium">— Dr. Rodriguez, Dean of Computer Science at Tech University</p>
      </div>
    </>
  );

  const additionalContent = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Companies That Trust Us</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* These would be actual company logos in a real implementation */}
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">Acme Corp</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">TechGiant</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">InnovateCo</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">FutureTech</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">GlobalBank</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">MediHealth</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">EduLearn</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">RetailPro</div>
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Customer Satisfaction</h3>
        <div className="flex justify-center items-center mb-6">
          <div className="text-5xl font-bold text-teal-600 mr-4">4.8</div>
          <div>
            <div className="flex text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i === 4 ? 'opacity-70' : ''} />
              ))}
            </div>
            <p className="text-sm text-gray-600">Based on 10,000+ reviews</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-1">98%</div>
            <p className="text-gray-700">Course completion rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-1">92%</div>
            <p className="text-gray-700">Would recommend to a friend</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-1">85%</div>
            <p className="text-gray-700">Report career advancement</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AboutTemplate 
      title="Our Customers"
      subtitle="Learn about the diverse community of learners, businesses, and educational institutions we serve worldwide."
      content={customersContent}
      image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      additionalContent={additionalContent}
    />
  );
};

export default OurCustomers;