import React from "react";

const Stats = () => {
  return (
    <section className="text-white py-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row px-6 lg:px-24 py-12 justify-center gap-12">
        {/* Left section content */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Send, Receive and Save Money Anywhere in the World with Our Mobile
            App
          </h1>
          <p className="text-base sm:text-lg font-light">
            With our mobile app, you can easily send, receive, and save money
            using your phone. No need for bank transactions or standing in line
            to pay bills
          </p>

          {/* Actions */}
          <div className="mt-6 flex  sm:flex-row gap-4 sm:gap-8 items-center justify-center lg:justify-start">
            <div>
              <p className="text-6xl font-bold">50%</p>
              <span>
                Impressive statistics showcasing the company’s reach and
                success.
              </span>
            </div>
            <div>
              <p className="text-6xl font-bold">50%</p>
              <span>
                Impressive statistics showcasing the company’s reach and
                success.
              </span>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center h-full">
          <img
            src="/vectors/statsHero.svg"
            alt="Call to action"
            className="w-full h-auto max-h-80 sm:max-h-96 lg:max-h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
