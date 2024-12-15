import { CheckCircle, Globe, TrendingUp, Users } from "lucide-react";
import React from "react";

const AboutDetails = () => {
  return (
    <section className="text-gray-500">
      <div className="container mx-auto flex flex-col px-6 lg:px-24 py-12 gap-12">
        {/* STATS */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl text-primary font-bold">5M+</p>
            <span className="font-medium text-lg">Active Users</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl text-primary font-bold">50K+</p>
            <span className="font-medium text-lg">Business Partners</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl text-primary font-bold">100+</p>
            <span className="font-medium text-lg">Countries Served</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-4xl text-primary font-bold">$1B+</p>
            <span className="font-medium text-lg">Transactions Processed</span>
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-24 px-6 lg:px-24">
          <h1 className="text-3xl lg:text-4xl font-bold text-black text-center lg:text-left">
            Our Story
          </h1>
          <p className="mt-4 text-left text-sm lg:text-base leading-relaxed">
            Founded in 2020, OltraPay emerged from a simple yet powerful vision:
            to bridge the gap between traditional cash-based economies and the
            digital future of finance. Our founders recognized the challenges
            faced by millions who relied solely on cash transactions and set out
            to create a solution that would make digital payments accessible to
            everyone.
          </p>
          <p className="mt-6 text-left text-sm lg:text-base leading-relaxed">
            What started as a mobile payment application has grown into a
            comprehensive financial technology platform, serving individuals and
            businesses across the globe. Our journey has been marked by
            continuous innovation, unwavering commitment to security, and a deep
            understanding of our users' needs.
          </p>
          <p className="mt-6 text-left text-sm lg:text-base leading-relaxed">
            Today, OltraPay stands at the forefront of the digital payment
            revolution, powered by cutting-edge technology and driven by our
            mission to create a more inclusive financial ecosystem.
          </p>
        </div>

        {/* Core Values */}
        <div className="flex flex-col justify-center items-center mt-24">
          <h1 className="text-3xl font-bold text-black text-center">
            Our Core Values
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Core Value Cards */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-1 border-gray-300">
              <CheckCircle className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Trust & Security
              </h3>
              <p className="text-sm">
                We maintain the highest standards of security to protect our
                users' financial data and transactions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-1 border-gray-300">
              <Users className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Customer First
              </h3>
              <p className="text-sm">
                Our decisions and innovations are driven by our users' needs and
                feedback.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-1 border-gray-300">
              <Globe className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Global Impact
              </h3>
              <p className="text-sm">
                We're committed to making digital payments accessible to
                everyone, everywhere.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-1 border-gray-300">
              <TrendingUp className="text-primary text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Innovation
              </h3>
              <p className="text-sm">
                We continuously evolve our technology to stay ahead of the
                digital payment curve.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="flex flex-col justify-center items-center mt-24">
          <h1 className="text-3xl font-bold text-black text-center">
            Leadership Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Leader 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-1 border-gray-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Leader 1"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                Jane Doe
              </h3>
              <p className="text-sm font-medium text-gray-600">
                Chief Executive Officer
              </p>
              <p className="text-sm mt-2">
                Former fintech executive with 15+ years of experience in digital
                payments and banking.
              </p>
            </div>
            {/* Leader 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-1 border-gray-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Leader 2"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                John Doe
              </h3>
              <p className="text-sm font-medium text-gray-600">
                Chief Technology Officer
              </p>
              <p className="text-sm mt-2">
                Former fintech executive with 15+ years of experience in digital
                payments and banking.
              </p>
            </div>
            {/* Leader 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-1 border-gray-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Leader 3"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                John Doe
              </h3>
              <p className="text-sm font-medium text-gray-600">
                Chief Operating Officer
              </p>
              <p className="text-sm mt-2">
                Former fintech executive with 15+ years of experience in digital
                payments and banking.
              </p>
            </div>
            {/* Leader 4 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-1 border-gray-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Leader 4"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                Jone Doe
              </h3>
              <p className="text-sm font-medium text-gray-600">
                Chief Financial Officer
              </p>
              <p className="text-sm mt-2">
                Former fintech executive with 15+ years of experience in digital
                payments and banking.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Join Us */}
      <div className="w-full bg-gradient-to-r from-primary to-[#48A4BE] py-16">
        <div className="container mx-auto text-center px-6 lg:px-24">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Join Our Journey
          </h1>
          <p className="mt-4 text-white text-base lg:text-lg leading-relaxed">
            Be part of the digital payment revolution and help us build a more
            inclusive financial future.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-primary font-semibold rounded-md shadow hover:bg-gray-200 transition">
              View Positions
            </button>
            <button className="px-6 py-3 bg-white text-primary font-semibold rounded-md shadow hover:bg-gray-200 transition">
              Join as a Developer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
