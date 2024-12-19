import React from "react";
import { useInView } from "react-intersection-observer";

const CallToAction = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className={`text-white h-auto lg:h-[600px] py-12 relative overflow-hidden transition-all duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container flex flex-col-reverse lg:flex-row px-6 lg:px-24 justify-center items-center gap-12">
        {/* Left Content */}
        <div
          className={`w-full lg:w-1/2 text-center lg:text-left flex flex-col gap-4 transition-all duration-1000 ease-out ${
            inView ? "translate-x-0" : "-translate-x-[100%]"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Discover Convenient and Secure Payments
          </h1>
          <p className="text-base sm:text-lg font-light">
            Send, receive, and save money using our secure online payment
            platform. Sign up today!
          </p>

          {/* Actions */}
          <div className="mt-6 flex sm:flex-row gap-4 sm:gap-8 items-center justify-center lg:justify-start">
            <button className="bg-white text-black px-6 py-2 border-2 border-black hover:bg-gray-100">
              Sign Up
            </button>
            <button className="bg-black text-white px-6 py-2 border-2 border-black hover:bg-gray-800">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`w-full lg:w-1/2 flex justify-center lg:justify-end h-auto max-h-full overflow-hidden transition-all duration-1000 ease-out ${
            inView ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <img
            src="/vectors/cta.svg"
            alt="Call to action"
            className="w-full h-auto max-h-80 sm:max-h-96 lg:max-h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
