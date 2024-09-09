import React from 'react';
import { 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt 
} from 'react-icons/fa'; // Font Awesome icons
import { 
  SiTailwindcss, 
  SiBootstrap, 
  SiChakraui, 
  SiFigma, 
  SiNextdotjs 
} from 'react-icons/si'; // Simple Icons

const skills = [
  { name: 'JavaScript', level: 'Intermediate', icon: <FaJsSquare className="text-4xl" /> }, // Adjusted icon size
  { name: 'React JS', level: 'Intermediate', icon: <FaReact className="text-4xl" /> },
  { name: 'Tailwind CSS', level: 'Intermediate', icon: <SiTailwindcss className="text-4xl" /> },
  { name: 'Node.js', level: 'Intermediate', icon: <FaNodeJs className="text-4xl" /> },
  { name: 'Git', level: 'Intermediate', icon: <FaGitAlt className="text-4xl" /> },
  { name: 'Bootstrap', level: 'Intermediate', icon: <SiBootstrap className="text-4xl" /> },
  { name: 'Chakra UI', level: 'Intermediate', icon: <SiChakraui className="text-4xl" /> },
  { name: 'Figma', level: 'Beginner', icon: <SiFigma className="text-4xl" /> },
  { name: 'Next.js', level: 'Beginner', icon: <SiNextdotjs className="text-4xl" /> },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-200 text-gray-800 py-20 md:w-10/12 sm:mx-4 mx-auto">
      <div className="container mx-auto sm:px-4 md:px-24">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-700">
       <span className='text-5xl mb-4 '>🦸‍♂️</span>  <br/> About Me
        </h2>
        <p className="md:text-md text-center mb-4">
        Driven by a commitment to excellence and a focus on delivering impactful solutions, I am eager to contribute meaningfully in my next role. Below are the tools and technologies I have recently utilized to create high-quality digital experiences.
        </p>
        {/* <p className="text-6xl text-center pb-4">...</p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6"> {/* Adjusted gap */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="duration-500 hover:bg-lime-100 hover:-translate-y-2 cursor-pointer hover:scale-105 bg-white p-4 rounded-lg shadow-lg text-center bg-gray-200 text-indigo-600 flex flex-col items-center justify-center" // Reduced padding
            >
              <div className="mb-4 flex items-center justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{skill.name}</h3> {/* Adjusted text size */}
              <p className="text-gray-600 text-sm">{skill.level}</p> {/* Adjusted text size */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
