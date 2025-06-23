import React from 'react';
import { FaBriefcase, FaHandshake, FaChartLine, FaUsers } from 'react-icons/fa';
import AboutTemplate from './AboutTemplate';

const PlacementPartners = () => {
  const placementContent = (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Placement Network</h2>
      <p className="mb-6">
        At Brain Bridge, we're committed to not just providing quality education, but also helping our students transition successfully into their desired careers. Our extensive network of placement partners spans across industries and regions, offering our graduates diverse opportunities to apply their newly acquired skills.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How Our Placement Partnerships Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <FaBriefcase className="text-teal-600 text-xl mr-3" />
            <h4 className="font-medium text-gray-900">Direct Hiring Channels</h4>
          </div>
          <p className="text-gray-700">
            Our partner companies get priority access to our talent pool, with opportunities to interview and hire our top-performing graduates directly.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <FaHandshake className="text-teal-600 text-xl mr-3" />
            <h4 className="font-medium text-gray-900">Internship Programs</h4>
          </div>
          <p className="text-gray-700">
            Many of our partners offer internship opportunities to our students, providing valuable real-world experience and often leading to full-time positions.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <FaChartLine className="text-teal-600 text-xl mr-3" />
            <h4 className="font-medium text-gray-900">Skill-Based Matching</h4>
          </div>
          <p className="text-gray-700">
            We use advanced matching algorithms to connect companies with candidates who have the specific skills and qualifications they're looking for.
          </p>
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <FaUsers className="text-teal-600 text-xl mr-3" />
            <h4 className="font-medium text-gray-900">Networking Events</h4>
          </div>
          <p className="text-gray-700">
            We regularly host virtual and in-person networking events, career fairs, and recruitment drives to connect our students with potential employers.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Benefits for Students</h3>
      <ul className="list-disc pl-5 space-y-2 mb-8">
        <li>Access to exclusive job opportunities not available on public job boards</li>
        <li>Personalized career coaching and interview preparation</li>
        <li>Reduced hiring timelines through pre-established relationships with employers</li>
        <li>Higher interview-to-offer conversion rates compared to traditional job applications</li>
        <li>Ongoing career support even after placement</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Benefits for Partner Companies</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Access to a pre-vetted talent pool with verified skills and qualifications</li>
        <li>Reduced recruitment costs and time-to-hire</li>
        <li>Candidates trained in the latest technologies and industry best practices</li>
        <li>Opportunity to influence curriculum to align with industry needs</li>
        <li>Enhanced employer branding through association with a leading education platform</li>
      </ul>
    </>
  );

  const additionalContent = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Placement Partners</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* These would be actual company logos in a real implementation */}
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">TechCorp</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">DataSystems</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">CloudNine</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">InnovateTech</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">DigitalEdge</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">WebFrontier</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">AIVentures</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">SecureNet</div>
        </div>
      </div>
      
      <div className="bg-gray-100 rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Placement Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">85%</div>
            <p className="text-gray-700">Placement rate within 6 months of graduation</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
            <p className="text-gray-700">Active hiring partners across industries</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">40%</div>
            <p className="text-gray-700">Average salary increase post-program</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">For Students</h3>
          <p className="text-gray-700 mb-6">
            Ready to take advantage of our placement services? Complete your profile, update your skills, and start connecting with top employers in your field.
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors w-full md:w-auto">
            Access Career Portal
          </button>
        </div>
        
        <div className="md:w-1/2 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">For Companies</h3>
          <p className="text-gray-700 mb-6">
            Looking to hire skilled professionals? Partner with Brain Bridge to access our talent pool and find the perfect candidates for your organization.
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors w-full md:w-auto">
            Become a Hiring Partner
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <AboutTemplate 
      title="Placement Partners"
      subtitle="Discover how our extensive network of industry partners helps our students launch and advance their careers."
      content={placementContent}
      image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      additionalContent={additionalContent}
    />
  );
};

export default PlacementPartners;