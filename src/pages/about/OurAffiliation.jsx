import React from 'react';
import AboutTemplate from './AboutTemplate';

const OurAffiliation = () => {
  const affiliationContent = (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Industry Partnerships</h2>
      <p className="mb-6">
        At Brain Bridge, we believe that strong industry connections are essential for providing relevant, up-to-date education. We've established strategic partnerships with leading technology companies, educational institutions, and industry associations to ensure our curriculum meets current market demands and our students have access to valuable opportunities.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Technology Partners</h3>
      <p className="mb-6">
        We collaborate with top technology companies to develop curriculum, provide students with industry tools and resources, and create pathways to employment. Our technology partners contribute to guest lectures, workshops, and provide real-world projects that give our students practical experience with current technologies and methodologies.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Academic Affiliations</h3>
      <p className="mb-6">
        Brain Bridge has established formal affiliations with universities and educational institutions around the world. These partnerships allow us to offer certain courses with academic credit, combine online learning with on-campus experiences, and ensure our teaching methodologies align with educational best practices.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Industry Associations</h3>
      <p className="mb-6">
        We maintain active memberships in key industry associations and standards bodies in the fields we teach. These connections help us stay at the forefront of industry developments, contribute to the evolution of professional standards, and provide our students with networking opportunities and professional recognition.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Certification Partners</h3>
      <p>
        Many of our courses are aligned with industry-recognized certifications. We work directly with certification providers to ensure our curriculum covers all necessary competencies and prepares students effectively for certification exams, increasing their employability and professional credibility.
      </p>
    </>
  );

  const additionalContent = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Key Partners</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* These would be actual partner logos in a real implementation */}
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">Microsoft</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">Google</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">AWS</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">IBM</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">Oracle</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">Salesforce</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">Cisco</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-24">
          <div className="text-xl font-bold text-gray-400">Adobe</div>
        </div>
      </div>
      
      <div className="bg-teal-50 rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Interested in Partnering with Us?</h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          We're always looking to expand our network of industry and academic partners. If you're interested in collaborating with Brain Bridge to develop curriculum, provide learning opportunities, or create pathways to employment for our students, we'd love to hear from you.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors">
          Become a Partner
        </button>
      </div>
    </div>
  );

  return (
    <AboutTemplate 
      title="Our Affiliations & Partnerships"
      subtitle="Discover the industry leaders, educational institutions, and organizations we collaborate with to provide world-class learning experiences."
      content={affiliationContent}
      image="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
      additionalContent={additionalContent}
    />
  );
};

export default OurAffiliation;