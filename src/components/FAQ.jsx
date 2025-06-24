import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const FAQ = ({ title, subtitle, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full mb-6">
            <FaQuestionCircle className="text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
                <button
                  className="w-full px-6 py-4 border border-gray-100 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4 leading-relaxed">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      {openIndex === index ? (
                        <FaChevronUp className="text-teal-600 text-sm" />
                      ) : (
                        <FaChevronDown className="text-teal-600 text-sm" />
                      )}
                    </div>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2">
                      <div className="border-l-4 border-teal-500 pl-4">
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default FAQ;
