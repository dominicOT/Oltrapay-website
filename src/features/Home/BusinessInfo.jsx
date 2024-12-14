import React from "react";

const BusinessInfo = () => {
  return (
    <section className="text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row px-6 lg:px-24 py-12 justify-center gap-12">
        {/* Left section content */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h1 className="text-3xl font-semibold">
            Send, Receive and Save Money Anywhere in the World with Our Mobile
            App
          </h1>
          <p className="text-sm font-light">
            With our mobile app, you can easily send, receive, and save money
            using your phone. <br /> No need for bank transactions or standing
            in line to pay bills.
          </p>

          <ul className="list-none pl-0 flex flex-col gap-4 ">
            <li className="flex items-center gap-2 ">
              {/* Reduced size of the disc image */}
              <img
                src="/vectors/disc.svg"
                alt="disc"
                className="w-4 h-4 object-contain"
              />
              Convenient Money Sending
            </li>
            <li className="flex items-center gap-2">
              {/* Reduced size of the disc image */}
              <img
                src="/vectors/disc.svg"
                alt="disc"
                className="w-4 h-4 object-contain"
              />
              Effortless Money Receiving
            </li>
            <li className="flex items-center gap-2">
              {/* Reduced size of the disc image */}
              <img
                src="/vectors/disc.svg"
                alt="disc"
                className="w-4 h-4 object-contain"
              />
              Smart Money Saving
            </li>
          </ul>
        </div>
        {/* Right content */}
        <div className="lg:w-1/2 flex justify-center h-full">
          <img
            src="/vectors/app.svg"
            alt="Mobile Solutions"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
