import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    category: 'Service Related Questions',
    questions: [
      { question: 'Will you build a resume from scratch or provide a template?', answer: 'We offer both options based on your needs.' },
      { question: 'What is the turnaround time of your service?', answer: 'Typically 3-5 business days.' },
    ],
  },
  {
    category: 'Customization Options',
    questions: [
      { question: 'Do I get to choose the resume template?', answer: 'Yes, we have a variety of templates to choose from.' },
      { question: 'Can I request revisions after receiving my resume?', answer: 'Yes, we offer free revisions for up to 14 days.' },
    ],
  },
  {
    category: 'Pricing and Payment',
    questions: [
      { question: 'Is it a subscription or a one-time service?', answer: 'Our service is a one-time purchase unless specified.' },
      { question: 'What payment methods do you accept?', answer: 'We accept major credit cards, PayPal, and bank transfers.' },
    ],
  },
  {
    category: 'ATS Compatibility',
    questions: [
      { question: 'What is ATS?', answer: 'ATS stands for Applicant Tracking System, a tool used by employers to screen resumes.' },
      { question: 'How much ATS score do you guarantee on the resume provided?', answer: 'We guarantee an ATS score of 80% or higher.' },
    ],
  },
  {
    category: 'Additional Services',
    questions: [
      { question: 'Do you provide assistance with cover letters?', answer: 'Yes, we offer cover letter writing services along with resume packages.' },
      { question: 'What does LinkedIn optimization include?', answer: 'Our LinkedIn optimization includes profile revamp, SEO optimization, and keyword alignment.' },
    ],
  },
];

function FAQSection() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg mb-6">Find answers to the most common questions about our services, customization options, and more.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((faqCategory, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2 border-blue-300">{faqCategory.category}</h3>
            <div className="space-y-4">
              {faqCategory.questions.map((item, questionIndex) => {
                const questionId = `${categoryIndex}-${questionIndex}`;
                return (
                  <div key={questionId} className="bg-gray-100 rounded-md p-4 shadow-md hover:bg-gray-50 transition duration-200">
                    <button
                      onClick={() => toggleQuestion(questionId)}
                      className="flex justify-between items-center w-full text-left text-gray-800 font-medium"
                    >
                      <span>{item.question}</span>
                      <span className="text-blue-600">
                        {activeQuestion === questionId ? <FiChevronUp /> : <FiChevronDown />}
                      </span>
                    </button>
                    {activeQuestion === questionId && (
                      <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
