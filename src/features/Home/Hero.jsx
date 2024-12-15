import React from "react";

const Hero = () => {
  return (
    <section className="text-white py-8">
      <div className="container mx-auto px-6 lg:px-24 py-12 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start h-full space-y-8 lg:space-y-0">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            Simplify your payments with our secure online platform
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Company is the leading online payment service provider, offering a
            convenient and reliable way to send, receive, and save money using
            your phone. With our platform, you can easily manage bank
            transactions and pay for services like electricity bills and water
            bills from anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3">
            {/* Apple Store Button */}
            <button className="bg-black hover:cursor-pointer text-white px-4 py-2 rounded-md flex flex-row gap-2 items-center text-left">
              <img
                src="/vectors/apple.svg"
                alt="Apple Icon"
                className="w-8 h-8"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-light">Download on the</span>
                <span className="text-sm font-semibold">Apple Store</span>
              </div>
            </button>

            {/* Play Store Button */}
            <button className="bg-black hover:cursor-pointer text-white px-4 py-2 rounded-md flex flex-row gap-2 items-center text-left">
              <img
                src="/vectors/playStore.svg"
                alt="Play Store Icon"
                className="w-8 h-8"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-light">Get it on</span>
                <span className="text-sm font-semibold">Play Store</span>
              </div>
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/vectors/heroImage.svg"
            alt="Payment Solutions"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
