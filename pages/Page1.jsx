import React from 'react';
import Pager from '../components/Pager'

const App = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800 p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">GreyLine Solutions</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#projects" className="hover:text-indigo-400">Projects</a>
            <a href="#skills" className="hover:text-indigo-400">Skills</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </nav>
        </div>
      </header>

      <Pager/>

      {/* Hero */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-extrabold mb-4">Hi, I'm Joshua Oladeji 👋</h2>
        <p className="text-xl text-gray-400 mb-6">Full-stack Developer • Open Source Enthusiast</p>
        <a href="#projects" className="inline-block mt-4 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-linear-to-r from-purple-500 to-gray-800 transition hover:text-black hover:font-bold">
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-300 text-lg">
          I'm a full-stack developer with experience building scalable web apps. I enjoy clean code and creative problem-solving.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="School Website"
              description="A full-featured school website built with React."
              link="https://heroespinnacleschools.org/"
            />
            <ProjectCard
              title="CLI Tool"
              description="Node.js based CLI tool for automated deployments."
              link="#"
            />
            <ProjectCard
              title="Game Themed Website"
              description="A full-featured game themed website built with React."
              link="https://gameweb1.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div className="flex flex-wrap gap-4 text-gray-200">
          {["JavaScript", "TypeScript", "React", "Tailwind", "MongoDB", "Git"].map(skill => (
            <span key={skill} className="bg-gray-700 px-4 py-2 rounded border-2 border-gray-500">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-300 mb-8">Want to collaborate or chat? Reach out!</p>
          <a href="mailto:you@example.com" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-linear-to-r from-purple-500 to-blue-500 transition hover:text-black hover:font-bold">
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 border-t border-gray-700">
        <p className="text-gray-500 text-sm">&copy; 2025 GreyLine Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

const ProjectCard = ({ title, description, link }) => (
  <div className="bg-gray-700 rounded-lg p-6 shadow hover:shadow-lg transition">
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-300 mb-4">{description}</p>
    <a href={link} className="text-indigo-400 hover:underline">View Project →</a>
  </div>
);

export default App;
