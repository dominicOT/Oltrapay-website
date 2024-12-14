import React from "react";

const CallToAction = () => {
  return (
    <section className="text-white h-[600px]">
      <div className="container flex flex-col lg:flex-row px-6 lg:px-24 py-12 justify-center items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col gap-4 h-full">
          <h1 className="text-xl lg:text-3xl font-bold mb-2">
            Discover Convenient and Secure Payments
          </h1>
          <p className="text-lg font-light">
            Send, receive, and save money using our secure online payment
            platform. Sign up today!
          </p>

          {/* Actions */}
          <div className="mt-4 flex flex-row gap-8 items-center">
            <button className="bg-white text-black px-6 py-2  border-2 border-black">
              Sign Up
            </button>
            <button className="bg-black text-white px-6 py-2  border-2 border-black">
              Learn More{" "}
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end h-full max-h-full overflow-hidden">
          <img
            src="/vectors/cta.svg"
            alt="Call to action"
            className="w-full h-auto max-h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
