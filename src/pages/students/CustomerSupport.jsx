import React, { useState } from "react";
import {
  FaHeadset,
  FaEnvelope,
  FaPhone,
  FaQuestionCircle,
  FaChevronRight,
  FaPlus,
  FaMinus,
  FaPaperPlane,
} from "react-icons/fa";

// FAQ Data
// FAQ Data (first 20 questions)
const faqs = [
  {
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password' on the login page. You'll receive an email with instructions to reset your password. Make sure to check your spam folder if you don't see the email.",
  },
  {
    question: "Where can I find my course materials?",
    answer: "All course materials are available in the 'Resources' section of each course. Some materials may be locked until you complete previous lessons.",
  },
  {
    question: "How do I download my certificate?",
    answer: "After completing all course requirements, go to 'My Certificates' in your dashboard. Click 'Download' next to the certificate you want.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. Some regions may have additional payment options available.",
  },
  {
    question: "Can I get a refund for my course?",
    answer: "We offer a 30-day money-back guarantee for most courses. Contact our billing department within 30 days of purchase for refund requests.",
  },
  {
    question: "How do I contact my instructor?",
    answer: "Each course has a 'Messages' section where you can directly contact your instructor. Most instructors respond within 48 hours.",
  },
  {
    question: "Why can't I access my purchased course?",
    answer: "First, try logging out and back in. If that doesn't work, check your internet connection. If issues persist, contact our technical support team.",
  },
  {
    question: "How do I update my account information?",
    answer: "Go to 'Account Settings' in your profile. You can update your personal information, email, and password from there.",
  },
  {
    question: "Are there mobile apps available?",
    answer: "Yes! We have iOS and Android apps available in their respective app stores. Search for 'BrainBridge Learning'.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "Go to 'Billing' in your account settings and click 'Cancel Subscription'. Your access will continue until the end of your current billing period.",
  },
  {
    question: "What are the system requirements?",
    answer: "We support modern browsers (Chrome, Firefox, Safari, Edge) on desktop and mobile. A minimum of 5Mbps internet speed is recommended for video content.",
  },
  {
    question: "How do I report a technical issue?",
    answer: "Use the 'Report Issue' button in the course player or contact our technical support team through the support form.",
  },
  {
    question: "Can I download videos for offline viewing?",
    answer: "Yes, our mobile apps allow you to download videos for offline viewing. This feature is not available on desktop browsers.",
  },
  {
    question: "How do I change my notification settings?",
    answer: "Go to 'Notification Preferences' in your account settings to customize which emails and alerts you receive.",
  },
  {
    question: "What's your privacy policy?",
    answer: "We take your privacy seriously. You can read our full privacy policy in the footer of our website or in your account settings.",
  },
  {
    question: "How do I enroll in a new course?",
    answer: "Browse our course catalog, select a course, and click 'Enroll Now'. You'll be guided through the payment process if the course isn't free.",
  },
  {
    question: "Are there any discounts available?",
    answer: "We offer seasonal promotions and discounts for students. Check our homepage or subscribe to our newsletter for current offers.",
  },
  {
    question: "How do I track my learning progress?",
    answer: "Each course has a progress tracker in the sidebar. You can also see your overall progress in your dashboard.",
  },
  {
    question: "Can I switch to a different course?",
    answer: "Yes, within the first 14 days of enrollment, you can switch to a different course of equal or lesser value. Contact support for assistance.",
  },
  {
    question: "How do I become an instructor?",
    answer: "We're always looking for qualified instructors! Visit our 'Teach with Us' page to learn about the application process.",
  },
];

const StudentTemplate = ({ title, subtitle, children }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-sans text-gray-900">
    <header className="bg-gradient-to-r from-teal-500 to-teal-700 text-white py-12 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2">{title}</h1>
        <p className="text-xl font-light">{subtitle}</p>
      </div>
    </header>
    <main className="max-w-6xl mx-auto py-10 px-6 space-y-12">{children}</main>
  </div>
);

const CustomerSupport = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <StudentTemplate
      title="Student Support"
      subtitle="We're here to help you with any questions or issues"
    >
      {/* Quick Help Section */}
      <section className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaHeadset className="text-teal-600 w-6 h-6" />,
              title: "Live Chat",
              text: "Instant help from our team",
              action: "Start Chat",
            },
            {
              icon: <FaEnvelope className="text-teal-600 w-6 h-6" />,
              title: "Email Us",
              text: "Response within 24 hours",
              action: "Send Email",
              href: "mailto:support@brainbridge.com",
            },
            {
              icon: <FaPhone className="text-teal-600 w-6 h-6" />,
              title: "Call Us",
              text: "Mon-Fri, 9am-5pm",
              action: "+91 8012345678",
              href: "tel:+918012345678",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border-l-4 border-teal-500 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
            >
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.text}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-teal-600 hover:text-teal-800 font-medium flex items-center transition"
                    >
                      {item.action}
                      <FaChevronRight className="ml-1 text-sm" />
                    </a>
                  ) : (
                    <button className="text-teal-600 hover:text-teal-800 font-medium flex items-center transition">
                      {item.action}
                      <FaChevronRight className="ml-1 text-sm" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FaQuestionCircle className="text-teal-600 mr-3" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800 text-base md:text-lg">
                  {faq.question}
                </h3>
                <span className="text-teal-600 text-xl transition-transform">
                  {activeFAQ === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {activeFAQ === index && (
                <p className="text-gray-600 mt-2 pl-4 leading-relaxed transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Support Request Form */}
      <section className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center mb-6">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FaPaperPlane className="text-teal-600 w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Submit a Support Request
          </h2>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                id: "name",
                label: "Your Name",
                type: "text",
                placeholder: "John Doe",
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                placeholder: "you@example.com",
              },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                />
              </div>
            ))}
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
              placeholder="What's this about?"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
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
              rows="5"
              placeholder="Describe your issue in detail..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
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
              <span className="ml-3 text-sm text-gray-500">No file chosen</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow hover:shadow-md hover:ring-2 hover:ring-teal-300"
          >
            Submit Request
          </button>
        </form>
      </section>
    </StudentTemplate>
  );
};

export default CustomerSupport;
