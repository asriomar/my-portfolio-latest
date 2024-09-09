// src/components/SocialMedia.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const socialLinks = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mohd-asri-13044a188/',
    icon: <FaLinkedin />,
  },

  {
    platform: 'GitHub',
    url: 'https://github.com/asriomar',
    icon: <FaGithub />,
  },
  // Add more social links as needed
];

const SocialMedia = () => {
  return (
    <section className="bg-gray-900 text-white py-2 mx-auto w-10/12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3 ">Follow Me</h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-gray-400"
            >
              {link.icon}
              <span className="sr-only">{link.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
