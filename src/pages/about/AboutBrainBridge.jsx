import React from 'react';
import AboutTemplate from './AboutTemplate';

const AboutBrainBridge = () => {
  const aboutContent = (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
      <p className="mb-4">
        Brain Bridge is a leading online education platform dedicated to providing high-quality, industry-relevant training to learners worldwide. Founded in 2015, we've grown from a small startup to a trusted educational institution serving students across the globe.
      </p>
      <p className="mb-6">
        Our mission is to bridge the gap between traditional education and the rapidly evolving demands of the modern workplace, empowering individuals to achieve their career goals through accessible, practical learning experiences.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Approach to Learning</h2>
      <p className="mb-4">
        At Brain Bridge, we believe that effective learning happens at the intersection of theory and practice. Our courses are designed by industry experts who understand what skills are in demand and how to teach them effectively.
      </p>
      <p className="mb-4">
        We focus on creating engaging, interactive learning experiences that go beyond passive video watching. Our students learn by doing, with hands-on projects, coding exercises, and real-world case studies that reinforce concepts and build practical skills.
      </p>
      <p className="mb-6">
        Every course includes personalized feedback, community support, and career resources to ensure our students not only learn new skills but can apply them successfully in their professional lives.
      </p>
      
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Impact</h2>
      <p className="mb-4">
        Since our founding, we've helped over 50,000 students transform their careers and achieve their goals. Our graduates have gone on to work at leading companies, start their own businesses, and make meaningful contributions in their fields.
      </p>
      <p>
        We're proud of the community we've built and the positive impact we've had on our students' lives. As we continue to grow, we remain committed to our founding vision of making quality education accessible to everyone, everywhere.
      </p>
    </>
  );

  const additionalContent = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <div className="text-4xl font-bold text-teal-600 mb-2">50,000+</div>
        <div className="text-gray-600">Students Trained</div>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <div className="text-4xl font-bold text-teal-600 mb-2">200+</div>
        <div className="text-gray-600">Expert Instructors</div>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
        <div className="text-gray-600">Student Satisfaction</div>
      </div>
    </div>
  );

  return (
    <AboutTemplate 
      title="About Brain Bridge"
      subtitle="Learn about our journey, mission, and the impact we've made in the world of online education."
      content={aboutContent}
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      additionalContent={additionalContent}
    />
  );
};

export default AboutBrainBridge;