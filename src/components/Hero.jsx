import React from 'react';

const Hero = () => {
  const fullText = ' mo.asri ';
  const backgroundImageUrl = 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg'; // Replace with your chosen image URL

  return (
    <section
      className="hero-container flex flex-col items-center justify-center md:h-screen bg-black bg-cover bg-center md:w-10/12 mx-auto"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="hero-content px-10 py-7 rounded-lg text-center  ">
        <img className='ring-offset-2 ring-2 w-[210px] h-[210px] hover:scale-105 cursor-pointer rounded-full mx-auto' src="profile-img.jpeg" alt="" />
        <h1 className="hero-title text-indigo-300 text-5xl md:text-8xl font-bold mb-6">
          I'm
          &#123;
          {fullText}
          &#125;
        </h1>
        <p className="hero-subtitle text-indigo-200 text-md md:text-xl mb-8">
          Ready to embrace new challenges, bring valuable insights <br />
          and drive for excellence to make a meaningful impact{' '}
          <span className="animate-ping duration-500 md:text-4xl">👋</span>
        </p>
        {/* <a
          href="#projects"
          className="hover:scale-125 hero-button bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full "
        >
          View My Projects
        </a> */}
        <a href="#projects" className="hover:scale-125 bg-blue-500 text-white py-3 px-6 rounded-full">
    View My Projects
</a>
      </div>
    </section>
  );
};

export default Hero;
