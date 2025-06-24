import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const FAQ = ({ title, subtitle, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotate: 360 }}
          >
            <FaQuestionCircle className="text-2xl" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "rgba(20, 184, 166, 0.02)" }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4 leading-relaxed">
                      {faq.question}
                    </h3>
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <FaChevronUp className="text-teal-600 text-sm" />
                      ) : (
                        <FaChevronDown className="text-teal-600 text-sm" />
                      )}
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="px-6 pb-6 pt-2"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-l-4 border-teal-500 pl-4">
                          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default FAQ;
