import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Pagination from '../../components/Pagination';

// College training reviews data
const collegeTrainingReviews = [
  {
    id: 1,
    collegeName: "Indian Institute of Technology Ropar",
    logo: "https://via.placeholder.com/120x120/1e40af/ffffff?text=IIT",
    description: "Premier engineering institute known for innovation and research excellence",
    location: "Punjab, India",
    category: "Engineering",
    type: "IIT",
    established: "2008"
  },
  {
    id: 2,
    collegeName: "K. J. Somaiya College of Engineering Mumbai",
    logo: "https://via.placeholder.com/120x120/dc2626/ffffff?text=KJS",
    description: "Leading engineering college with strong industry connections",
    location: "Mumbai, Maharashtra",
    category: "Engineering",
    type: "Private",
    established: "1983"
  },
  {
    id: 3,
    collegeName: "Lovely Professional University",
    logo: "https://via.placeholder.com/120x120/f59e0b/ffffff?text=LPU",
    description: "Multi-disciplinary university offering diverse programs",
    location: "Punjab, India",
    category: "University",
    type: "Private",
    established: "2005"
  },
  {
    id: 4,
    collegeName: "Delhi Technological University",
    logo: "https://via.placeholder.com/120x120/059669/ffffff?text=DTU",
    description: "Premier technical university in the capital",
    location: "Delhi, India",
    category: "Engineering",
    type: "Government",
    established: "1941"
  },
  {
    id: 5,
    collegeName: "Vellore Institute of Technology",
    logo: "https://via.placeholder.com/120x120/7c3aed/ffffff?text=VIT",
    description: "Leading private engineering institute",
    location: "Vellore, Tamil Nadu",
    category: "Engineering",
    type: "Private",
    established: "1984"
  },
  {
    id: 6,
    collegeName: "Manipal Institute of Technology",
    logo: "https://via.placeholder.com/120x120/ea580c/ffffff?text=MIT",
    description: "Renowned engineering college with global recognition",
    location: "Manipal, Karnataka",
    category: "Engineering",
    type: "Private",
    established: "1957"
  },
  {
    id: 7,
    collegeName: "Birla Institute of Technology Mesra",
    logo: "https://via.placeholder.com/120x120/0891b2/ffffff?text=BIT",
    description: "Prestigious technical institute with excellent placement record",
    location: "Ranchi, Jharkhand",
    category: "Engineering",
    type: "Private",
    established: "1955"
  },
  {
    id: 8,
    collegeName: "SRM Institute of Science and Technology",
    logo: "https://via.placeholder.com/120x120/dc2626/ffffff?text=SRM",
    description: "Leading university with strong research focus",
    location: "Chennai, Tamil Nadu",
    category: "University",
    type: "Private",
    established: "1985"
  },
  {
    id: 9,
    collegeName: "Amity University Noida",
    logo: "https://via.placeholder.com/120x120/7c2d12/ffffff?text=AU",
    description: "Multi-campus university with diverse academic programs",
    location: "Noida, Uttar Pradesh",
    category: "University",
    type: "Private",
    established: "2005"
  }
];

const CollegeTrainingReviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState(null);

  // Pagination function
  const getPaginatedReviews = (page = 1, itemsPerPage = 9) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = collegeTrainingReviews.slice(startIndex, endIndex);

    return {
      reviews: paginatedData,
      totalPages: Math.ceil(collegeTrainingReviews.length / itemsPerPage),
      currentPage: page,
      totalReviews: collegeTrainingReviews.length,
      hasNextPage: endIndex < collegeTrainingReviews.length,
      hasPrevPage: page > 1
    };
  };

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
    const data = getPaginatedReviews(page, 9);
    setPaginationData(data);
  }, [searchParams]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!paginationData) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading reviews...</p>
        </div>
      </div>
    );
  }

  const { reviews, totalPages } = paginationData;

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
          <h1 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6">
            College Training Reviews
          </h1>



          {/* Navigation Menu */}
          <div className="bg-teal-600 rounded-lg p-1 mb-8">
            <div className="flex flex-wrap gap-1 text-sm">
              <button className="px-4 py-2 text-white hover:bg-teal-700 rounded transition-colors">About Henry Harvin</button>
              <button className="px-4 py-2 text-white hover:bg-teal-700 rounded transition-colors">Henry Harvin in Media</button>
              <button className="px-4 py-2 text-white hover:bg-teal-700 rounded transition-colors">Our Affiliations</button>
              <button className="px-4 py-2 text-white hover:bg-teal-700 rounded transition-colors">Our Customers</button>
              <button className="px-4 py-2 text-white hover:bg-teal-700 rounded transition-colors">Our CSR Activities</button>
              <button className="px-4 py-2 text-white hover:bg-teal-700 rounded transition-colors">Our Gallery</button>
              <button className="px-4 py-2 text-white hover:bg-teal-700 rounded transition-colors">Participant Reviews</button>
              <button className="px-4 py-2 text-white hover:bg-teal-700 rounded transition-colors">Corporate Training Reviews</button>
              <button className="px-4 py-2 bg-white text-teal-600 rounded font-medium">College Training Reviews</button>
              <button className="px-4 py-2 text-white hover:bg-teal-700 rounded transition-colors">Job Support Reviews</button>
            </div>
          </div>
        </div>

        {/* College Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Company Logo Section */}
              <div className={`${review.bgColor} p-6 text-center`}>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                  <img
                    src={review.logo}
                    alt={`${review.companyName} logo`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-white text-xl font-bold">- {review.companyName}</h3>
              </div>

              {/* Training Details */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-medium">Training Name:</span> {review.trainingName}
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    {review.language}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {review.type}
                  </p>
                </div>

                {/* Training Session Badge */}
                <div className="flex justify-center">
                  <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {review.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        {/* Results Info */}
        <div className="text-center text-gray-600 mb-8">
          <p>
            Showing {((currentPage - 1) * 9) + 1} to {Math.min(currentPage * 9, paginationData.totalReviews)} of {paginationData.totalReviews} college training reviews
          </p>
        </div>


      </div>
    </div>
  );
};

export default CollegeTrainingReviews;