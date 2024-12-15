import { Clock, MapPin } from "lucide-react";
import React, { useState } from "react";

const ContactDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How can I reset my password?",
      answer: `Visit the login page and click on "Forgot Password". Follow the instructions sent to your registered email.`,
    },
    {
      question: "What are your transaction fees?",
      answer:
        "Our transaction fees vary by account type and transaction volume. Please visit our pricing page for detailed information.",
    },
    {
      question: "How long does verification take?",
      answer:
        "Most verifications are completed within 24-48 hours. For business accounts, it may take up to 5 business days.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-black py-12">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 px-6 lg:px-24">
        {/* Left Section: Send Us a Message */}
        <div className="flex-1 p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg text-black border border-gray-300 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg text-black border border-gray-300 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg text-black border border-gray-300 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Your Message</label>
              <textarea
                rows="5"
                placeholder="Enter your message"
                className="w-full p-3 rounded-lg text-black border border-gray-300 focus:border-primary focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-12">
          {/* Visit Our Office */}
          <div className="p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
            <div className="mb-6 flex flex-col gap-2 items-start">
              <div className="flex flex-row items-center gap-3">
                <MapPin className="text-primary" />
                <h3 className="text-lg font-semibold">Headquarters</h3>
              </div>
              <div className="pl-9">
                <p className="text-sm mt-2">
                  123 Financial District <br />
                  New York, NY 10004 <br />
                  United States
                </p>
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-2 items-start">
              <div className="flex flex-row items-center gap-3">
                <Clock className="text-primary" />{" "}
                <h3 className="text-lg font-semibold">Business Hours</h3>
              </div>
              <div className="pl-9">
                <p className="text-sm mt-2">
                  Monday - Friday: 9:00 AM - 6:00 PM EST <br />
                  Saturday: 10:00 AM - 4:00 PM EST <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Quick Help (FAQ Accordion) */}
          <div className="p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Quick Help</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <button
                    className="w-full text-left flex justify-between items-center font-semibold"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
