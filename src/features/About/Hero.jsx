import React from "react";

const AboutHero = () => {
  return (
    <section className="text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row px-6 lg:px-24 py-12 justify-center gap-12">
        <div>
          <h1 className="text-6xl font-bold text-center">
            Our Mission to Transform <br />
            Payments
          </h1>
          <p className="text-xl mt-4 font-semibold text-center break-before-auto">
            Building a future where digital payments are accessible, secure, and
            seamless for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
