// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-4 md:px-0">
        <h1 className="text-xl text-gray-200 md:text-3xl font-extrabold cursor-pointer mb-2 md:mb-0 flex text-center ">
          &#123;
          <span className="">
            md.dev
          </span>
          &#125;
        </h1>
        <nav className="flex gap-6 text-lg">
          <a
            href="#about"
            className="text-gray-200 hover:text-indigo-200 transition-colors duration-300"
          >
            About me
          </a>
          <a
            href="#projects"
            className="text-gray-200 hover:text-indigo-300 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-200 hover:text-indigo-300 transition-colors duration-300"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500
// underline underline-offset-4 decoration-red-600 decoration-wavy
