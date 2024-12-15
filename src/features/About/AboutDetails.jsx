import React from "react";

const AboutDetails = () => {
  return (
    <section className="text-gray-500 py-8">
      <div className="container mx-auto flex flex-col lg:flex-col px-6 lg:px-24 py-12  gap-12">
        {/* STATS */}
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col items-center gap-2 text-left justify-start">
            <p className="text-4xl text-primary font-bold">5M+</p>
            <span className="font-medium text-lg">Active Users</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-left justify-start">
            <p className="text-4xl text-primary font-bold">50K+</p>
            <span className="font-medium text-lg">Business Partners</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-left justify-start">
            <p className="text-4xl text-primary font-bold">100+</p>
            <span className="font-medium text-lg">Countries Served</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-left justify-start">
            <p className="text-4xl text-primary font-bold">$1B+</p>
            <span className="font-medium text-lg">Transactions Processed</span>
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-24 px-6 lg:px-24">
          <h1 className="text-4xl font-bold text-black">Our Story</h1>

          <p className="mt-4 text-left">
            Founded in 2020, OltraPay emerged from a simple yet powerful vision:
            to bridge the gap between traditional cash-based economies and the
            digital future of finance. Our founders recognized the challenges
            faced by millions who relied solely on cash transactions and set out
            to create a solution that would make digital payments accessible to
            everyone.
          </p>
          <p className="mt-6">
            What started as a mobile payment application has grown into a
            comprehensive financial technology platform, serving individuals and
            businesses across the globe. Our journey has been marked by
            continuous innovation, unwavering commitment to security, and a deep
            understanding of our users' needs.
          </p>
          <p className="mt-6">
            Today, OltraPay stands at the forefront of the digital payment
            revolution, powered by cutting-edge technology and driven by our
            mission to create a more inclusive financial ecosystem.
          </p>
        </div>

        {/* Core Values */}
        
      </div>
    </section>
  );
};

export default AboutDetails;
