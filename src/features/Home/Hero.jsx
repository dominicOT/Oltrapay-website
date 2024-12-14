import React from "react";

const Hero = () => {
  return (
    <section className=" text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Simplify your payments with our secure online platform
          </h1>
          <p className="text-lg mb-6">
            Company is the leading online payment service provider, offering a
            convenient and reliable way to send, receive, and save money using
            your phone. With our platform, you can easily manage bank
            transactions and pay for services like electricity bills and water
            bills from anywhere in the world.
          </p>
          <div className="flex justify-center lg:justify-start space-x-3">
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
        <div className="lg:w-1/2 mt-3 lg:mt-4 flex justify-center lg:justify-end">
          <img
            src="/vectors/heroImage.svg" // Replace with your actual image path
            alt="Payment Solutions"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
