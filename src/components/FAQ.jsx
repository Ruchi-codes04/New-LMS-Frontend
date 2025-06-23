import React, { useState } from 'react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('Course Overview');
  const [expandedQuestion, setExpandedQuestion] = useState('Are these Free Courses really free of cost?');

  const categories = [
    'Course Overview',
    'Course Certification',
    'Career Benefits',
    'Learning Experience & Flexibility'
  ];

  const faqData = {
    'Course Overview': [
      {
        question: 'Are these Free Courses really free of cost?',
        answer: 'Yes! All the Free Courses offered on our platform are absolutely free—no enrollment fees, no hidden charges, and no subscription required. You can start learning immediately without any financial commitment.'
      },
      {
        question: 'Can I study at these web Courses for free ?',
        answer: 'Absolutely! Our free courses are designed for self-paced learning. You can access the content 24/7 and study whenever it fits your schedule. There are no fixed timelines or deadlines.'
      },
      {
        question: 'Are these Free Courses purely theoretical or practical?',
        answer: 'Our free courses combine theoretical knowledge with practical, real-world applications. You\'ll work on hands-on projects, case studies, and exercises that prepare you for actual workplace scenarios.'
      }
    ],
    'Course Certification': [
      {
        question: 'Do I get a certificate after completing free courses?',
        answer: 'Yes, you will receive a certificate of completion for each free course you finish. These certificates can be added to your LinkedIn profile and resume to showcase your new skills.'
      },
      {
        question: 'How long does it take to complete a free course?',
        answer: 'Course duration varies depending on the topic and your learning pace. Most free courses can be completed in 2-6 hours, but since they\'re self-paced, you can take as much time as you need.'
      }
    ],
    'Career Benefits': [
      {
        question: 'Will these free courses help advance my career?',
        answer: 'Absolutely! Our free courses are designed to teach in-demand skills that employers value. Many learners have used these courses to transition to new roles or advance in their current positions.'
      },
      {
        question: 'Are the concepts taught in free courses up-to-date?',
        answer: 'Yes, we regularly update our course content to reflect the latest industry trends, technologies, and best practices. Our curriculum is reviewed by industry experts to ensure relevance.'
      }
    ],
    'Learning Experience & Flexibility': [
      {
        question: 'Can I access courses on mobile devices?',
        answer: 'Yes, our platform is fully responsive and optimized for mobile learning. You can access your courses on smartphones, tablets, laptops, or desktop computers with ease.'
      },
      {
        question: 'Is there any support available during free courses?',
        answer: 'While free courses are self-guided, we provide comprehensive resources including FAQs, community forums, and detailed course materials to support your learning journey.'
      }
    ]
  };

  const toggleQuestion = (question) => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-left mb-12 text-gray-900">
          Frequently Asked <span className="text-teal-600">Questions</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          <div className="bg-white rounded-sm p-6 shadow-lg border border-gray-200 h-fit sticky top-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`w-full text-left p-4 mb-3 rounded-sm transition-all duration-300 font-medium ${
                  activeCategory === category
                    ? 'text-black border border-teal-600 shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {faqData[activeCategory]?.map((faq, index) => (
              <div key={index} className="bg-white rounded-sm shadow-lg border border-gray-200 overflow-hidden">
                <button
                  className={`w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 ${
                    expandedQuestion === faq.question ? 'bg-gray-50' : ''
                  }`}
                  onClick={() => toggleQuestion(faq.question)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      expandedQuestion === faq.question ? 'rotate-45' : ''
                    }`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {expandedQuestion === faq.question ? (
                      <path d="M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    ) : (
                      <>
                        <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </>
                    )}
                  </svg>
                </button>

                {expandedQuestion === faq.question && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
