import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignUpProvider } from './contexts/SignUpContext'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Courses from './components/Courses'
import AboutUs from './components/AboutUs'
import PopularCourses from './components/PopularCourses'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Instructors from './components/Instructors'
import Blogs from './components/Blogs'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import SignUpPopup from './components/SignUpPopup'
import NotFound from './pages/NotFound'

// Import review pages
import {
  ParticipantReviews,
  VideoReviews,
  CorporateTrainingReviews,
  CollegeTrainingReviews,
  JobSupportReviews,
  MouthShutReviews,
  JustDialReviews,
  ReviewsReporter,
  LinkedinReviews,
  YoutubeReviews,
  LearnerReviewsComplaints,
  MediumReviews
} from "./pages/reviews";

// Import about pages
import {
  AboutBrainBridge,
  OurAffiliation,
  OurCustomers,
  OurBlogs,
  PlacementPartners,
  ContactUs
} from './pages/about'

// Import student pages
import {
  CustomerSupport,
  Events,
  InternshipSupport,
  CareerSupport,
  Certification,
  SubmitFeedback
} from './pages/students'

// Import course pages
import {
  AllCourses,
  CorporateTraining
} from './pages/courses'

// Home page component
const Home = () => {
  return (
    <>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <HeroSection />
        <PopularCourses />
        <Courses />
        <AboutUs />
        <WhyChooseUs />
        <Testimonials />
        <Instructors />
        <Blogs />
        <Reviews />
      </div>
    </>
  )
}

function App() {
  return (
    <SignUpProvider>
      <Router>
        <div className="min-h-screen overflow-x-hidden">
          <Header />
          <SignUpPopup />
          <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Review Routes */}
          <Route path="/reviews/participant" element={<ParticipantReviews />} />
          <Route path="/reviews/video" element={<VideoReviews />} />
          <Route path="/reviews/corporate" element={<CorporateTrainingReviews />} />
          <Route path="/reviews/college" element={<CollegeTrainingReviews />} />
          <Route path="/reviews/job-support" element={<JobSupportReviews />} />
          <Route path="/reviews/mouthshut" element={<MouthShutReviews />} />
          <Route path="/reviews/justdial" element={<JustDialReviews />} />
          <Route path="/reviews/reporter" element={<ReviewsReporter />} />
          <Route path="/reviews/linkedin" element={<LinkedinReviews />} />
          <Route path="/reviews/youtube" element={<YoutubeReviews />} />
          <Route path="/reviews/complaints" element={<LearnerReviewsComplaints />} />
          <Route path="/reviews/medium" element={<MediumReviews />} />

          {/* About Us Routes */}
          <Route path="/about/company" element={<AboutBrainBridge />} />
          <Route path="/about/team" element={<OurAffiliation />} />
          <Route path="/about/mission" element={<OurCustomers />} />
          <Route path="/about/careers" element={<OurBlogs />} />
          <Route path="/about/testimonials" element={<PlacementPartners />} />
          <Route path="/about/contact" element={<ContactUs />} />

          {/* Student Routes */}
          <Route path="/students/CustomerSupport" element={<CustomerSupport />} />
          <Route path="/students/Events" element={<Events />} />
          <Route path="/students/InternshipSupport" element={<InternshipSupport />} />
          <Route path="/students/resources" element={<CareerSupport />} />
          <Route path="/students/support" element={<Certification />} />
          <Route path="/students/profile" element={<SubmitFeedback />} />

          {/* Course Routes */}
          <Route path="/courses/all" element={<AllCourses />} />
          <Route path="/corporate-training" element={<CorporateTraining />} />

          {/* 404 Route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </SignUpProvider>
  )
}

export default App
