// src/components/Projects.js
import React from 'react';

const projects = [

  {
    title: 'Weather App ',
    description: 'Get your weather (Open Weather)',
    link: 'https://weather-app-olive-nine-30.vercel.app/',
  },
    {
    title: 'CRUD',
    description: 'Fetching data, edit and delete ',
    link: 'https://api-using-json-placeholder.vercel.app/',
  },
  {
    title: 'IT Quiz',
    description: 'Test your IT literacy.',
    link: 'https://react-quiz-app-psi-six.vercel.app/',
  },
  {
    title: 'Profile Statistics',
    description: 'Profile statistics for portfolio website',
    link: 'https://profile-statistics-peach.vercel.app/',
  },

     {
    title: 'Job to Do ',
    description: 'Save at localStorage/browser ',
    link: 'https://to-do-localstorage-tailwind.vercel.app/',
    
  },
  {
    title: 'Job to Do',
    description: 'Sorting task by urgency and importance ',
    link: 'https://to-do-sort.vercel.app/',
  },
   {
    title: 'Search Image',
    description: 'Image searcher',
    link: 'https://image-search-jet-sigma.vercel.app/',
  },
  {
    title: 'BMI Calculator',
    description: 'Calculate BMI.',
    link: 'https://bmi-calculator-ten-murex.vercel.app/',
  },
  {
    title: 'Paracetamol Calculator',
    description: 'Calculate paracetamol dosage',
    link: 'https://paracetamol-calculator.vercel.app/',
  },
  
 

  {
    title: 'Color Picker',
    description: 'Pick your color code.',
    link: 'https://color-picker-eta-cyan.vercel.app/',
  },
  {
    title: 'Skill & Expertise',
    description: 'Skill and expertise.',
    link: 'https://skill-expertise.vercel.app/',
  },
  {
    title: 'Pokemon API',
    description: 'Find your pokemon',
    link: ' https://pokemon-api-neon-rho.vercel.app/',
  },
 
  {
    title: 'QR Generator',
    description: 'Generate your QR code',
    link: 'https://qr-code-generator-iota-one.vercel.app/',
  },
  {
    title: 'Calculator',
    description: 'Calculator',
    link: 'https://calculator-pi-jade-68.vercel.app/',
  },
  {
    title: 'Filter Product',
    description: 'Filter products by price range',
    link: 'https://price-filter-using-slider.vercel.app/',
  },
 
  {
    title: 'Budget Tracker',
    description: 'Track the money you spend.',
    link: 'https://budget-tracker-sable.vercel.app/budget',
  },

  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 text-gray-800 py-20 md:w-10/12 md:mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center pb-6 mb-4">
        <span className='text-5xl '>👨‍💻</span>  <br/> My Projects
        </h2>
        {/* <p className="text-6xl text-center pb-4">...</p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="ring-gray-300 ring-[0.5px] mx-4 bg-gray-200 p-4 rounded-lg shadow-lg  text-gray-800 duration-500 hover:bg-lime-100 hover:-translate-y-2 cursor-pointer hover:scale-105">
               {project.photo && (
              <div className="mb-4 flex justify-center items-center">
                {project.photo}
              </div>
            )}
              <h3 className="text-md font-bold mb-2">{project.title}</h3>
              <p className=" text-sm text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-700"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
