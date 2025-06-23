import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

import Courses from './components/Courses'
import AboutUs from './components/AboutUs'
import PopularCourses from './components/PopularCourses'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Instructors from './components/Instructors'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <HeroSection />
        <PopularCourses />
        <Courses />
        <AboutUs />
        <WhyChooseUs />
        <Testimonials />
        <Instructors />
        <Blogs />
      </div>
      <Footer />
    </div>
  )
}

export default App
