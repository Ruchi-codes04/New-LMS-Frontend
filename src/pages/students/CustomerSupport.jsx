import React, { useState } from "react";
import { 
  FaHeadset, 
  FaEnvelope, 
  FaPhone, 
  FaComments, 
  FaQuestionCircle, 
  FaPaperPlane, 
  FaClock, 
  FaUsers,
  FaChevronRight,
  FaPlus,
  FaMinus,
  FaTimes
} from "react-icons/fa";

// FAQ Data
const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login page. You'll receive an email with instructions to reset your password. Make sure to check your spam folder if you don't see the email.",
  },
  {
    question: "Where can I find my course materials?",
    answer:
      "All course materials are available in the 'Resources' section of each course. Some materials may be locked until you complete previous lessons.",
  },
  {
    question: "How do I download my certificate?",
    answer:
      "After completing all course requirements, go to 'My Certificates' in your dashboard. Click 'Download' next to the certificate you want.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. Some regions may have additional payment options available.",
  },
  {
    question: "Can I get a refund for my course?",
    answer:
      "We offer a 30-day money-back guarantee for most courses. Contact our billing department within 30 days of purchase for refund requests.",
  },
  {
    question: "How do I contact my instructor?",
    answer:
      "Each course has a 'Messages' section where you can directly contact your instructor. Most instructors respond within 48 hours.",
  },
  {
    question: "Why can't I access my purchased course?",
    answer:
      "First, try logging out and back in. If that doesn't work, check your internet connection. If issues persist, contact our technical support team.",
  },
  {
    question: "How do I update my account information?",
    answer:
      "Go to 'Account Settings' in your profile. You can update your personal information, email, and password from there.",
  },
  {
    question: "Are there mobile apps available?",
    answer:
      "Yes! We have iOS and Android apps available in their respective app stores. Search for 'BrainBridge Learning'.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Go to 'Billing' in your account settings and click 'Cancel Subscription'. Your access will continue until the end of your current billing period.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "We support modern browsers (Chrome, Firefox, Safari, Edge) on desktop and mobile. A minimum of 5Mbps internet speed is recommended for video content.",
  },
  {
    question: "How do I report a technical issue?",
    answer:
      "Use the 'Report Issue' button in the course player or contact our technical support team through the support form.",
  },
  {
    question: "Can I download videos for offline viewing?",
    answer:
      "Yes, our mobile apps allow you to download videos for offline viewing. This feature is not available on desktop browsers.",
  },
  {
    question: "How do I change my notification settings?",
    answer:
      "Go to 'Notification Preferences' in your account settings to customize which emails and alerts you receive.",
  },
  {
    question: "What's your privacy policy?",
    answer:
      "We take your privacy seriously. You can read our full privacy policy in the footer of our website or in your account settings.",
  },
  {
    question: "How do I enroll in a new course?",
    answer:
      "Browse our course catalog, select a course, and click 'Enroll Now'. You'll be guided through the payment process if the course isn't free.",
  },
  {
    question: "Are there any discounts available?",
    answer:
      "We offer seasonal promotions and discounts for students. Check our homepage or subscribe to our newsletter for current offers.",
  },
  {
    question: "How do I track my learning progress?",
    answer:
      "Each course has a progress tracker in the sidebar. You can also see your overall progress in your dashboard.",
  },
  {
    question: "Can I switch to a different course?",
    answer:
      "Yes, within the first 14 days of enrollment, you can switch to a different course of equal or lesser value. Contact support for assistance.",
  },
  {
    question: "How do I become an instructor?",
    answer:
      "We're always looking for qualified instructors! Visit our 'Teach with Us' page to learn about the application process.",
  },
];

// Simplified StudentTemplate with modern header
const StudentTemplate = ({ title, subtitle, children }) => (
  <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
    {/* Modern Header with Teal Gradient */}
    <header className="bg-gradient-to-r from-teal-500 to-teal-700 text-white py-12 px-6 shadow-md">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-xl font-light opacity-90">{subtitle}</p>
      </div>
    </header>

    {/* Main Content */}
    <main className="max-w-7xl mx-auto py-8 px-6">{children}</main>
  </div>
);

const CustomerSupport = () => {
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <StudentTemplate
      title="Customer Support"
      subtitle="We're here to help you with any questions or issues"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Contact Options */}
        <div className="lg:w-1/3 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Help</h2>

          {/* Contact Cards */}
          <div className="space-y-4">
            {/* Live Chat */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-teal-500">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaHeadset className="text-teal-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Live Chat</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Instant help from our team
                  </p>
                  <button className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                    Start Chat <FaChevronRight className="ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Email Support */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-teal-500">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-teal-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Response within 24 hours
                  </p>
                  <a
                    href="mailto:support@brainbridge.com"
                    className="text-teal-600 hover:text-teal-800 font-medium flex items-center"
                  >
                    Send Email <FaChevronRight className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Support */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-teal-500">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-teal-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-3">Mon-Fri, 9am-5pm</p>
                  <a
                    href="tel:+918012345678"
                    className="text-teal-600 hover:text-teal-800 font-medium flex items-center"
                  >
                    +91 8012345678 <FaChevronRight className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
            <h3 className="font-bold text-xl mb-4 flex items-center">
              <FaQuestionCircle className="text-teal-600 mr-2" />
              Common Questions
            </h3>
            <div className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <div key={index} className="pb-3 border-b border-gray-100">
                  <h4 className="font-medium text-gray-800">{faq.question}</h4>
                  <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
                </div>
              ))}
              <button
                onClick={() => setShowAllFAQs(!showAllFAQs)}
                className="w-full text-teal-600 hover:text-teal-800 font-medium mt-4 text-center flex items-center justify-center"
              >
                {showAllFAQs ? "Show Less" : "View All FAQs"} <FaChevronRight className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Main Content */}
        <div className="lg:w-2/3 space-y-8">
          {/* Support Hours Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <FaClock className="text-teal-600 w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Support Hours
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-800">Live Chat</h3>
                <p className="text-gray-700">Mon-Fri: 8am-8pm</p>
                <p className="text-gray-700">Sat-Sun: 9am-5pm</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-800">Email Support</h3>
                <p className="text-gray-700">24/7</p>
                <p className="text-gray-700">Response within 24 hours</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-800">Phone Support</h3>
                <p className="text-gray-700">Mon-Fri: 9am-5pm</p>
                <p className="text-gray-700">Sat: 10am-2pm</p>
              </div>
            </div>
          </div>

          {/* Support Team Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <FaUsers className="text-teal-600 w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Meet Our Support Team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Support Agent"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">Amit Kumar</div>
                  <div className="text-gray-600 text-sm">
                    Senior Support Specialist
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Support Agent"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">
                    Priya Sharma
                  </div>
                  <div className="text-gray-600 text-sm">Technical Support</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-600 text-sm">
              Our friendly support team is here to help you succeed—don't
              hesitate to reach out!
            </div>
          </div>

          {/* Support Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <FaPaperPlane className="text-teal-600 w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Submit a Support Request
              </h2>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-white"
                >
                  <option value="">Select a category</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="course">Course Content</option>
                  <option value="account">Account Help</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Describe your issue in detail..."
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="attachment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Attachments (optional)
                </label>
                <div className="flex items-center">
                  <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg border border-gray-200 transition-colors">
                    <span className="text-gray-700">Choose File</span>
                    <input type="file" id="attachment" className="hidden" />
                  </label>
                  <span className="ml-3 text-sm text-gray-500">
                    No file chosen
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Expanded FAQs Section - Now outside the main columns */}
      {showAllFAQs && (
        <div className="mt-12 max-w-7xl mx-auto px-6">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <FaQuestionCircle className="text-teal-600 mr-3" />
                Frequently Asked Questions
              </h2>
              <button
                onClick={() => setShowAllFAQs(false)}
                className="text-teal-600 hover:text-teal-800 font-medium flex items-center"
              >
                Close FAQs <FaTimes className="ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 pb-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-800">
                      {faq.question}
                    </h3>
                    <span className="text-teal-600 text-xl">
                      {activeFAQ === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </div>
                  {activeFAQ === index && (
                    <p className="text-gray-600 mt-2 pl-4">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Community Section */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-teal-50 p-8 rounded-xl shadow-sm text-center">
          <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaComments className="text-teal-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Join Our Community
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Connect with other students, share knowledge, and get help from the
            community.
          </p>
          <button className="bg-white text-teal-600 hover:bg-teal-600 hover:text-white border border-teal-600 font-medium py-2 px-6 rounded-lg transition-colors">
            Visit Community Forum
          </button>
        </div>
      </div>
    </StudentTemplate>
  );
};

export default CustomerSupport;