import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: ["Services", "Contact Us", "FAQ", "Support", "Blog"],
    },
    {
      title: "Terms",
      links: ["Privacy", "Security", "Sitemap", "Partners", "Careers"],
    },
    {
      title: "Press",
      links: ["Events", "Resources", "Help Center", "Community", "Affiliates"],
    },
  ];

  return (
    <footer className="text-white py-12">
      <div className="container mx-auto lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Augusta */}
          <div className="flex justify-left sm:justify-start">
            <h3 className="text-xl font-bold mb-4">Augusta</h3>
          </div>

          {/* Dynamic Links */}
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className="flex flex-col items-center sm:items-start"
            >
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-200 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subscribe */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-sm mb-4 text-center sm:text-left">
              Stay informed with our updates and features
            </p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter email address"
                className="px-12 py-2 text-black focus:outline-none "
              />
              <button
                type="submit"
                className="bg-white text-black px-4 font-semibold py-2 "
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-[2px] bg-white mt-12" />

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm flex flex-row gap-3 justify-center">
          <p>© {new Date().getFullYear()} Augusta. All rights reserved.</p>
          <button className="underline cursor-pointer">Privacy Policy.</button>
          <button className="underline cursor-pointer">
            Terms of Services.
          </button>
          <button className="underline cursor-pointer">Cookie Settings</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
