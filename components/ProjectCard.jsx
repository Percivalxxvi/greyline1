import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={link} className="text-indigo-400 hover:underline">View Project →</a>
    </div>
  );
};

export default ProjectCard;
