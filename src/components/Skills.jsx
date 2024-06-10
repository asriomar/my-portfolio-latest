// src/components/Skills.js
import React from 'react';

const skills = [
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'React JS', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Git', level: 'Intermediate' },
  { name: 'Bootstrap', level: 'Intermediate' },
  { name: 'Chakra UI', level: 'Intermediate' },
  { name: 'Figma', level: 'Beginner' },
  { name: 'Next', level: 'Beginner' },
  // Add more skills as needed
];

const About = () => {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-20">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-600 to-green-600">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-center ">
          Transitioning professionally, I'm a dedicated web developer committed
          to crafting visually captivating and functional web applications. With a diverse background, I'm eager to
          leverage my expertise in Web Development. Ready to embrace new
          challenges, I bring valuable insights and a drive for excellence to
          make a meaningful impact in my next role.
        </p>
        <p className="text-6xl text-center pb-4">...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
