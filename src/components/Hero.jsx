// src/components/Hero.js
import React from 'react';
import './Hero.css'; // Make sure to create and import a CSS file for additional styles

const Hero = () => {
  return (
    <section className="hero-container flex flex-col items-center justify-center md:h-screen bg-black">
      <div className="hero-content px-10 py-7 rounded-lg text-center">
        <h1 className="hero-title text-gray-200 text-3xl md:text-8xl font-bold mb-6">
          I'm{' '}
          <span className=" underline decoration-wavy decoration-red-600">
            &#123;mo.asri&#125;
          </span>
        </h1>
        <p className="hero-subtitle text-gray-200 text-md md:text-xl mb-8">
          Ready to embrace new challenges, bring valuable insights <br />
          and drive for excellence to make a meaningful impact{' '}
          <span className="wave-emoji md:text-2xl">👋</span>
        </p>
        <a
          href="#projects"
          className="hero-button bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
