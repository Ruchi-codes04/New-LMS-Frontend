import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaStar,
  FaAward,
  FaRocket,
  FaLightbulb,
  FaChartLine,
  FaShieldAlt,
  FaCog,
  FaGraduationCap,
} from "react-icons/fa";
import FAQ from "../../components/FAQ";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startCount = 0;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(startCount + (end - startCount) * percentage));

      if (percentage < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-3xl md:text-4xl font-bold text-teal-600 mb-2"
    >
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  );
};

const CorporateTraining = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Statistics data
  const heroStats = [
    { number: 470000, label: "Global Learners", suffix: "+" },
    { number: 7000, label: "Live Classes Every Month", suffix: "+" },
    { number: 60, label: "Accreditations", suffix: "+" },
    { number: 4, label: "Countries", suffix: "+" },
  ];

  // Client logos data
  const clientLogos = [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "IBM",
    "Microsoft",
    "Amazon",
    "Google",
    "Deloitte",
    "KPMG",
    "EY",
    "PwC",
    "HCL",
    "Tech Mahindra",
    "Capgemini",
    "Oracle",
  ];

  // Service sections data
  const services = [
    {
      title: "Training Solutions",
      description:
        "Our training solutions are designed to meet the unique needs of your organization. We offer customized programs that align with your business objectives and enhance employee skills across various domains.",
      icon: FaRocket,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      stats: [
        "7000+ Classes per day",
        "4.6/5 Average rating through reviews",
        "9+ Awards won",
      ],
      gradient: "from-teal-500 to-teal-700",
    },
    {
      title: "E-learning Solutions",
      description:
        "Our e-learning solutions offer flexible, interactive learning experiences that can be accessed anytime, anywhere. Perfect for organizations looking to scale their training programs efficiently.",
      icon: FaLightbulb,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
      stats: [
        "1800+ Hours of content",
        "95% Repeat business",
        "900+ Corporate clientele across industries",
      ],
      gradient: "from-teal-600 to-teal-800",
    },
    {
      title: "Game-Based Learning",
      description:
        "Our game-based learning solutions combine fun and education to create engaging training experiences. This innovative approach significantly improves knowledge retention and learner engagement.",
      icon: FaChartLine,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      stats: [
        "30% reduction in attrition rates",
        "3x knowledge retention",
        "2x faster completion rates",
      ],
      gradient: "from-teal-700 to-teal-900",
    },
  ];

  // Features data
  const features = [
    {
      icon: FaShieldAlt,
      title: "Secure Learning",
      description: "Enterprise-grade security for all training materials",
    },
    {
      icon: FaCog,
      title: "Customizable",
      description: "Tailored programs to fit your organization's needs",
    },
    {
      icon: FaGraduationCap,
      title: "Certified Trainers",
      description: "Industry experts with proven track records",
    },
    {
      icon: FaChartLine,
      title: "Analytics",
      description: "Detailed performance tracking and reporting",
    },
  ];

  // Awards data
  const awards = [
    { year: "2023", title: "Best Corporate Training Provider", icon: FaAward },
    { year: "2022", title: "Excellence in E-Learning", icon: FaStar },
    { year: "2021", title: "Innovation in Training", icon: FaRocket },
    { year: "2020", title: "Top Learning Platform", icon: FaGraduationCap },
  ];

  // Review platforms
  const reviewPlatforms = [
    { platform: "Forbes", rating: "4.8", reviews: "2.5k" },
    { platform: "CourseReport", rating: "4.6", reviews: "1.8k" },
    { platform: "UrbanPro", rating: "5.0", reviews: "3.2k" },
    { platform: "Google", rating: "5.0", reviews: "4.1k" },
  ];

  // FAQ data
  const faqData = [
    {
      question: "How are your training programs customized?",
      answer:
        "We begin with a thorough needs assessment to understand your organization's specific requirements, challenges, and goals. Based on this assessment, we design a tailored curriculum that addresses your unique needs, incorporating relevant case studies and practical exercises.",
    },
    {
      question: "What delivery formats are available?",
      answer:
        "We offer flexible delivery options including in-person training at your location, virtual instructor-led training, hybrid formats, and self-paced online learning. We can recommend the most effective format based on your team's needs and preferences.",
    },
    {
      question: "How many employees can participate in a training program?",
      answer:
        "Our programs can accommodate groups of various sizes, from small teams to entire departments. For optimal engagement and learning outcomes, we typically recommend 15-25 participants per session for interactive workshops, though this can be adjusted based on the training format and content.",
    },
    {
      question: "How do you measure training effectiveness?",
      answer:
        "We employ a comprehensive evaluation framework that includes pre and post-training assessments, participant feedback, knowledge retention checks, and follow-up evaluations to measure behavioral change and business impact. We provide detailed reports with actionable insights.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We provide corporate training across diverse industries including technology, finance, healthcare, manufacturing, retail, education, and government. Our instructors have industry-specific expertise to ensure relevant and applicable training content.",
    },
  ];

  return (
    <div className="min-h-screen font-['Poppins'] bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        style={{ y, opacity }}
        className="relative bg-white pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden min-h-[80vh] flex items-center"
      >
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
              className="flex-1 lg:max-w-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Corporate Training
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-teal-600"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Reshaping The Future of Training!
              </motion.h2>
              <motion.p
                className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed text-gray-600 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Invest in upskilling your workforce. Our tailored training
                programs are designed to drive measurable business outcomes and
                enhance organizational performance across all levels.
              </motion.p>
              <motion.button
                className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105 shadow-lg mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Solutions
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex-1 lg:max-w-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&"
                  alt="Corporate Training"
                  className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-xl"
                />

                {/* Floating Stats Card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl border"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-teal-600">
                    <AnimatedCounter end={470000} suffix="+" />
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Global Learners
                  </div>
                </motion.div>

                {/* Another Floating Stats Card */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl border"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-teal-600">
                    <AnimatedCounter end={60} suffix="+" />
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Accreditations
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base font-medium text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 relative">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore a realm of opportunities with our partnerships
          </motion.h2>
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-12"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-lg shadow-md p-6 min-w-[200px] text-center hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-teal-700">
                    {client}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Our Platform?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full mb-4 group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-2xl" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get Powerful Outcome-driven Learning Solutions
          </motion.h2>

          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex-1">
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${service.gradient} text-white rounded-full mr-4`}
                  >
                    <service.icon className="text-xl" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </motion.div>
                <motion.p
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {service.description}
                </motion.p>
                <motion.button
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 transform hover:scale-105 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>

              <motion.div
                className="flex-1 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {service.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        className="flex items-center mb-2 last:mb-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 1 + statIndex * 0.1,
                        }}
                      >
                        <FaStar className="text-teal-600 mr-2" />
                        <span className="text-sm font-medium text-gray-700">
                          {stat}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <award.icon className="text-white text-4xl mx-auto mb-4" />
                    </motion.div>
                    <div className="text-2xl font-bold mb-2">{award.year}</div>
                    <div className="text-sm font-medium">{award.title}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
                Reshaping The Future of Training!
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We take pride in the numerous awards and recognitions we have
                received over the years. These accolades reflect our commitment
                to excellence in corporate training and our dedication to
                helping organizations achieve their learning objectives.
              </p>
              <motion.button
                className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Awards
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our corporate training programs."
        faqs={faqData}
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Transform Your Workforce?
            </motion.h2>
            <motion.div
              className="bg-white rounded-xl p-8 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    label: "Company Name",
                    type: "text",
                    placeholder: "Your company name",
                  },
                  {
                    label: "Email",
                    type: "email",
                    placeholder: "your.email@company.com",
                  },
                  {
                    label: "Phone",
                    type: "tel",
                    placeholder: "+91 9876543210",
                  },
                  {
                    label: "Training Type",
                    type: "select",
                    options: [
                      "Leadership Development",
                      "Technical Training",
                      "Soft Skills Training",
                      "Digital Transformation",
                    ],
                  },
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <label className="block text-gray-700 font-medium mb-2">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all duration-300">
                        <option>Select Training Type</option>
                        {field.options.map((option, i) => (
                          <option key={i}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all duration-300 hover:border-teal-400"
                      />
                    )}
                  </motion.div>
                ))}
                <motion.div
                  className="md:col-span-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label className="block text-gray-700 font-medium mb-2">
                    Type your query...
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your specific training needs and objectives..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all duration-300 hover:border-teal-400"
                  ></textarea>
                </motion.div>
                <motion.div
                  className="md:col-span-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-teal-800 transition duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Request
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {reviewPlatforms.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl font-bold text-teal-700 mb-2">
                  {review.platform}
                </div>
                <div className="flex justify-center items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    >
                      <FaStar className="text-teal-500 text-sm" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  {review.rating}
                </div>
                <div className="text-sm text-gray-500">
                  {review.reviews} reviews
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTraining;
