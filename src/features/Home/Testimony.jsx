import { User2 } from "lucide-react";
import React from "react";

const Testimony = () => {
  return (
    <section className="h-auto lg:h-[600px] py-12 bg-gray-50">
      <div className="container flex flex-col items-center px-6 lg:px-24 gap-8 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800">Testimonials</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          See what our customers are saying about our services. We strive to
          provide the best experience for all your payment needs.
        </p>

        {/* Testimonial Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 lg:max-w-3xl flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <User2 className="text-gray-500 w-8 h-8" />
          </div>
          <p className="text-gray-700 italic mb-6">
            "I am extremely satisfied with the company's services. They have
            made sending and receiving money so convenient and hassle-free."
          </p>
          <div className="text-gray-800 font-semibold">
            <h3 className="text-lg">John Doe</h3>
            <p className="text-sm text-gray-500">CEO, Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
