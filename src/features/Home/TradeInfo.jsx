import React from "react";
import TradeCard from "./_components/TradeCard";
import { ChevronRight } from "lucide-react";

const TradeInfo = () => {
  return (
    <section className="text-black py-8 w-full mb-10 flex flex-col">
      <div className="container w-full mx-auto px-6 lg:px-24 py-12 flex flex-col justify-between h-full">
        {/* Text Details */}
        <div className="w-full mb-8">
          <span className="text-lg font-medium">Simplify</span>
          <p className="text-3xl font-bold">
            Convenient and Secure Online <br />
            Payment Solution
          </p>
          <p className="text-lg mt-4 font-light max-w-lg">
            Our platform allows you to easily send, receive, and save money
            using your phone. With us, you can also perform bank transactions
            and make payments for services such as electricity bills and water
            bills, no matter where you are in the world.
          </p>
        </div>

        {/* Trade Card Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
          <TradeCard
            title="Bank Transaction Made Simple"
            description="Easily manage your finances with our seamless bank transaction feature."
          />
          <TradeCard
            title="Convenient Bill Payments"
            description="Pay your electricity and water bills hassle-free with just a few taps."
          />
          <TradeCard
            title="Global Accessibility"
            description="Enjoy our services anywhere in the world, 24/7."
          />
        </div>

        {/* Actions */}
        <div className="w-full flex gap-4 items-center mt-auto">
          <button className="text-black px-8 py-2 border border-1 border-black">
            Learn More
          </button>
          <button className="px-8 py-2 text-black flex gap-2 items-center">
            <span>Sign Up</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TradeInfo;
