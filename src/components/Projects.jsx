// src/components/Projects.js
import React from 'react';

const projects = [
    {
    title: 'CRUD using JSONPlaceholder API',
    description: 'User fetching data, edit and delete using JSONPlaceholder API ',
    link: 'https://api-using-json-placeholder.vercel.app/',
  },
     {
    title: 'Job to Do ',
    description: 'Job-to-Do app (save at localStorage/browser). ',
    link: 'https://to-do-localstorage-tailwind.vercel.app/',
  },
  {
    title: 'Job to Do',
    description: 'Job-to-Do app. With task sorting by urgency and importance ',
    link: 'https://to-do-sort.vercel.app/',
  },
  {
    title: 'BMI calculator',
    description: 'Calculate BMI by keying height and weight.',
    link: 'https://bmi-calculator-ten-murex.vercel.app/',
  },
  {
    title: 'Paracetamol calculator',
    description: 'Calculate paracetamol dosage when keying the strength.',
    link: 'https://paracetamol-calculator.vercel.app/',
  },
  {
    title: 'Budget tracker',
    description: 'Track the money you spend.',
    link: 'https://budget-tracker-sable.vercel.app/budget',
  },
  {
    title: 'IT Quiz',
    description: 'Answer the question to test your IT literacy.',
    link: 'https://react-quiz-app-psi-six.vercel.app/',
  },
  {
    title: 'Find us',
    description: 'Embedded location.',
    link: 'https://location-google-map.vercel.app/',
  },
  {
    title: 'Color picker',
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
    title: 'Template portfolio',
    description: 'Template portfolio',
    link: 'https://portfolio-template-seven-iota.vercel.app/',
  },
  {
    title: 'QR generator',
    description: 'Generate your QR code',
    link: 'https://qr-code-generator-iota-one.vercel.app/',
  },
  {
    title: 'Calculator',
    description: 'Calculator',
    link: 'https://calculator-pi-jade-68.vercel.app/',
  },
  {
    title: 'Filter product',
    description: 'Filter products by price range',
    link: 'https://price-filter-using-slider.vercel.app/',
  },
  {
    title: 'My portfolio',
    description: 'Example of portfolio',
    link: 'https://my-portfolio-eta-ebon-23.vercel.app/',
  },

  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 text-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent  decoration-red-500 bg-gradient-to-r from-indigo-700 via-blue-600 to-green-600">
          My Projects
        </h2>
        <p className="text-6xl text-center pb-4">...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg  text-gray-600">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
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
