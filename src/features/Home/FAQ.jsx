import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I sign up?",
      answer:
        "To sign up, simply visit our website and click on the 'Sign Up' button. Follow the instructions to create your account.",
    },
    {
      question: "How do I receive money?",
      answer:
        "To receive money, provide the sender with your account details or payment link. Once the transaction is made, the funds will be credited to your account.",
    },
    {
      question: "How can I pay bills?",
      answer:
        "Paying bills is convenient with our service. Simply select the 'Pay Bills' option, choose the biller, enter the required details, and complete the payment.",
    },
    {
      question: "How secure is my account?",
      answer:
        "We prioritize the security of your account. We use advanced encryption technology and secure authentication methods to protect your personal and financial information.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="text-black py-12">
      <div className="container flex flex-col px-6 lg:px-24 gap-8">
        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold mb-4">FAQs</h1>
          <p className="text-lg font-light">
            Easily manage your finances with our seamless bank transaction
            feature.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300  shadow-sm">
              <div
                className="flex justify-between items-center px-6 py-8 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <button
                  className="text-xl font-bold text-gray-500"
                  aria-label="Toggle Answer"
                >
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-700 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-3xl font-bold">Still have questions?</h1>
          <p>Contact our support team for further assistance.</p>

          <button className="px-6 py-1 border-2 border-black mt-4">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
