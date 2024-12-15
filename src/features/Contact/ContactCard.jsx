import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"; // Example icons from Lucide

const ContactCard = () => {
  const contacts = [
    {
      icon: <Phone className="text-primary w-8 h-8" />,
      title: "Call Us",
      description: "24/7 Support Line",
      details: ["+23200000000"],
    },
    {
      icon: <Mail className="text-primary w-8 h-8" />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      details: ["support@oltrapay.com"],
    },
    {
      icon: <MessageCircle className="text-primary w-8 h-8" />,
      title: "Live Chat",
      description: "Available Mon-Fri",
      details: ["9 AM - 6 PM EST"],
    },
  ];

  return (
    <section className="text-black py-8">
      <div className="container mx-auto w-full flex flex-col justify-center items-center lg:flex-row gap-8 px-6 lg:px-24">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-center  text-center lg:text-left p-6 rounded-lg shadow-sm border border-1 border-gray-300 gap-2 "
          >
            <div className="w-full flex items-center justify-center">
              {contact.icon}
            </div>
            <h3 className="text-xl font-bold">{contact.title}</h3>
            <span>{contact.description}</span>
            <ul className="text-sm space-y-2">
              {contact.details.map((detail, i) => (
                <li className="text-primary" key={i}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCard;
