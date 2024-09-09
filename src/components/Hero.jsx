import React, { useState, useEffect } from 'react';
//import './Hero.css'; // Ensure this file is created and imported for additional styles

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = '{ mo.asri}';
  const typingSpeed = 150; // milliseconds

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container flex flex-col items-center justify-center md:h-screen bg-black">
      <div className="hero-content px-10 py-7 rounded-lg text-center">
        <h1 className="hero-title text-gray-200 text-5xl md:text-8xl font-bold mb-6">
          I'm  
          &#123;
          { mo.asri }
          &#125; 
         
          
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
