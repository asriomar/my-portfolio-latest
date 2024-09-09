// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-gray-900 text-white py-4 w-10/12 mx-auto text-sm">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Mohd Asri. All rights reserved.</p>
        <p>Powered by React and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
