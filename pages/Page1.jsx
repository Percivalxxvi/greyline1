import React from 'react';
import Pager from '../components/Pager'
import Blogcard1 from "../components/Blogcard1";

const App = () => {
   const blogs = [
     {
       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
       title: "Building a Clean React UI with TailwindCSS",
       description:
         "Learn how to create stunning and responsive UIs faster using TailwindCSS with React.",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, leo sit amet semper pretium, dui eros sagittis est, nec consectetur ligula est a lorem. Quisque pharetra quam ac rutrum faucibus. Aenean et tortor quis dolor hendrerit venenatis at sed lectus. Vivamus non luctus augue. Ut vulputate dolor libero, sit amet cursus mi finibus a. Ut pharetra sed ante id scelerisque. Suspendisse aliquet feugiat turpis, vitae sodales erat ullamcorper ut. Fusce maximus augue libero, at tristique dui volutpat nec. Nullam posuere dolor massa, et facilisis leo ultricies nec. Quisque nulla magna, efficitur ut orci vel, finibus cursus eros.Mauris commodo sem faucibus, consectetur metus id, vestibulum libero. Etiam eu dictum arcu. Donec pharetra porta dui ut consectetur. Phasellus vitae sodales lectus. Praesent vehicula, libero eget hendrerit feugiat, nunc erat faucibus risus, in suscipit erat arcu sit amet sem. Vivamus accumsan consectetur dictum. Phasellus congue ante eu augue varius maximus. Vestibulum turpis ligula, pharetra posuere sollicitudin a, eleifend vel ligula. Ut magna purus, feugiat at felis et, auctor bibendum est.",
       author: "Joshua Oladeji",
       date: "Oct 22, 2025",
       link: "#",
     },
     {
       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
       title: "Optimizing SEO for Modern Web Apps",
       description:
         "A step-by-step guide on improving SEO rankings for your Vite and React apps.",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, leo sit amet semper pretium, dui eros sagittis est, nec consectetur ligula est a lorem. Quisque pharetra quam ac rutrum faucibus. Aenean et tortor quis dolor hendrerit venenatis at sed lectus. Vivamus non luctus augue. Ut vulputate dolor libero, sit amet cursus mi finibus a. Ut pharetra sed ante id scelerisque. Suspendisse aliquet feugiat turpis, vitae sodales erat ullamcorper ut. Fusce maximus augue libero, at tristique dui volutpat nec. Nullam posuere dolor massa, et facilisis leo ultricies nec. Quisque nulla magna, efficitur ut orci vel, finibus cursus eros.Mauris commodo sem faucibus, consectetur metus id, vestibulum libero. Etiam eu dictum arcu. Donec pharetra porta dui ut consectetur. Phasellus vitae sodales lectus. Praesent vehicula, libero eget hendrerit feugiat, nunc erat faucibus risus, in suscipit erat arcu sit amet sem. Vivamus accumsan consectetur dictum. Phasellus congue ante eu augue varius maximus. Vestibulum turpis ligula, pharetra posuere sollicitudin a, eleifend vel ligula. Ut magna purus, feugiat at felis et, auctor bibendum est.",
       author: "Jane Doe",
       date: "Oct 20, 2025",
       link: "#",
     },
     {
       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
       title: "Building a Clean React UI with TailwindCSS",
       description:
         "Learn how to create stunning and responsive UIs faster using TailwindCSS with React.",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, leo sit amet semper pretium, dui eros sagittis est, nec consectetur ligula est a lorem. Quisque pharetra quam ac rutrum faucibus. Aenean et tortor quis dolor hendrerit venenatis at sed lectus. Vivamus non luctus augue. Ut vulputate dolor libero, sit amet cursus mi finibus a. Ut pharetra sed ante id scelerisque. Suspendisse aliquet feugiat turpis, vitae sodales erat ullamcorper ut. Fusce maximus augue libero, at tristique dui volutpat nec. Nullam posuere dolor massa, et facilisis leo ultricies nec. Quisque nulla magna, efficitur ut orci vel, finibus cursus eros.Mauris commodo sem faucibus, consectetur metus id, vestibulum libero. Etiam eu dictum arcu. Donec pharetra porta dui ut consectetur. Phasellus vitae sodales lectus. Praesent vehicula, libero eget hendrerit feugiat, nunc erat faucibus risus, in suscipit erat arcu sit amet sem. Vivamus accumsan consectetur dictum. Phasellus congue ante eu augue varius maximus. Vestibulum turpis ligula, pharetra posuere sollicitudin a, eleifend vel ligula. Ut magna purus, feugiat at felis et, auctor bibendum est.",
       author: "Joshua Oladeji",
       date: "Oct 22, 2025",
       link: "#",
     },
     {
       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
       title: "Building a Clean React UI with TailwindCSS",
       description:
         "Learn how to create stunning and responsive UIs faster using TailwindCSS with React.",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, leo sit amet semper pretium, dui eros sagittis est, nec consectetur ligula est a lorem. Quisque pharetra quam ac rutrum faucibus. Aenean et tortor quis dolor hendrerit venenatis at sed lectus. Vivamus non luctus augue. Ut vulputate dolor libero, sit amet cursus mi finibus a. Ut pharetra sed ante id scelerisque. Suspendisse aliquet feugiat turpis, vitae sodales erat ullamcorper ut. Fusce maximus augue libero, at tristique dui volutpat nec. Nullam posuere dolor massa, et facilisis leo ultricies nec. Quisque nulla magna, efficitur ut orci vel, finibus cursus eros.Mauris commodo sem faucibus, consectetur metus id, vestibulum libero. Etiam eu dictum arcu. Donec pharetra porta dui ut consectetur. Phasellus vitae sodales lectus. Praesent vehicula, libero eget hendrerit feugiat, nunc erat faucibus risus, in suscipit erat arcu sit amet sem. Vivamus accumsan consectetur dictum. Phasellus congue ante eu augue varius maximus. Vestibulum turpis ligula, pharetra posuere sollicitudin a, eleifend vel ligula. Ut magna purus, feugiat at felis et, auctor bibendum est.",
       author: "Joshua Oladeji",
       date: "Oct 22, 2025",
       link: "#",
     },
   ];
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800 p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">GreyLine Solutions</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-indigo-400">
              About
            </a>
            <a href="#projects" className="hover:text-indigo-400">
              Projects
            </a>
            <a href="#skills" className="hover:text-indigo-400">
              Skills
            </a>
            <a href="#contact" className="hover:text-indigo-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <Pager />

      {/* Hero */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-extrabold mb-4">
          Hi, I'm Joshua Oladeji 👋
        </h2>
        <p className="text-xl text-gray-400 mb-6">
          Full-stack Developer • Open Source Enthusiast
        </p>
        <a
          href="#projects"
          className="inline-block mt-4 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-linear-to-r from-purple-500 to-gray-800 transition hover:text-black hover:font-bold"
        >
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-300 text-lg">
          I'm a full-stack developer with experience building scalable web apps.
          I enjoy clean code and creative problem-solving.
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
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Tailwind",
            "MongoDB",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-700 px-4 py-2 rounded border-2 border-gray-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-300 mb-8">
            Want to collaborate or chat? Reach out!
          </p>
          <a
            href="mailto:you@example.com"
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-linear-to-r from-purple-500 to-blue-500 transition hover:text-black hover:font-bold"
          >
            Email Me
          </a>
        </div>
      </section>

      <section
        id="blog"
        className="flex items-center justify-center h-fit pt-2 pb-2 lg:bg-linear-to-t from-gray-800 to-purple-500 bg-gray-800 lg:border-t-0 border-t-2 border-purple-500"
      >
        <div className="flex flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:gap-2 gap-3.5 w-4/4 items-center justify-center pt-2 pb-2">
          {blogs.map((blog, index) => (
            <Blogcard1 key={index} {...blog} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 border-t border-gray-700">
        <p className="text-gray-500 text-sm">
          &copy; 2025 GreyLine Solutions. All rights reserved.
        </p>
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
