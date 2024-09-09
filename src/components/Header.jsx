import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-4 md:px-0">
        <h1 className="text-xl md:text-3xl text-red-500 font-extrabold cursor-pointer mb-4 md:mb-0 flex text-center">
          { mo.asri }
        </h1>
        <nav className="flex gap-6 text-sm md:text-xl">
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
          <a
            href="#resume"
            className="text-gray-200 hover:text-indigo-300 transition-colors duration-300"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
