import React from "react";
import "../src/App.css";
import Navpc from "../components/Navpc";
import Pager from "../components/Pager";
import ProjectCard from "../components/ProjectCard";
import profile1 from "../src/assets/profile1.png";
import Blogcard from "../components/Blogcard";

const Home = () => {
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
    <div>
      <Navpc />
      {/* <Pager/> */}

      <header className="bg-gray-800 p-6 shadow-md lg:hidden">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          {/* <h1 className="text-2xl font-bold">GreyLine Solutions</h1> */}
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
            <a href="#blog" className="hover:text-indigo-400">
              Blog
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="h-fit lg:h-100 lg:w-full w-full flex flex-col lg:flex-row lg:justify-center items-center justify-center bg-blue-500 bg-linear-to-t from-gray-800 to-purple-500">
        <div className="flex flex-col lg:items-center lg:justify-center lg:h-100 p-5 rounded-lg w-fit">
          <h1 className="lg:text-5xl text-3xl font-bold text-white lg:text-left text-center lg:w-150 w-100">
            Welcome to GreyLine Solutions
          </h1>
        </div>
        {/* <h1 className='text-2xl font-bold text-white'>Freelance Developer</h1> */}
        <div className="lg:w-100 lg:h-100 w-[75%] h-90 duration-500 flex lg:flex hover:shadow-6xl cursor-pointer lg:hover:ml-5 items-center justify-center">
          <img
            className="lg:w-lg lg:h-[98%] w-4/4 h-4/4 lg:hover:scale-102 duration-500 object-cover rounded-3xl"
            src={profile1}
            alt=""
          />
        </div>
      </div>

      {/* <div className="h-10 lg:hidden flex bg-gray-800"></div> */}

      {/* Intro */}
      <section className="text-center py-20 flex h-60 flex-col justify-center items-center bg-gray-900">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 w-80 lg:w-150 text-center">
          Hello, I'm Joshua Oladeji 👋
        </h2>
        <p className="text-xl text-gray-400 mb-6">
          Front-end Developer • Open Source Enthusiast
        </p>
        <a
          href="#projects"
          className="inline-block bg-purple-500 text-black px-6 py-3 border rounded hover:bg-linear-to-r from-gray-900 to-purple-600 transition hover:text-white active:bg-black active:text-white hover:border hover:border-gray-400"
        >
          View My Work
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        className="flex flex-col max-w-8xl px-6 py-16 bg-linear-to-tl from-black to-purple-500 justify-center items-center"
      >
        <h3 className="text-3xl font-bold mb-6 lg:w-5xl text-left w-[90%]">
          About Me
        </h3>
        <p className="text-gray-100 text-lg lg:w-5xl w-[90%]">
          I'm a full-stack developer with experience building scalable web apps.
          I enjoy clean code and creative problem-solving.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="School Website"
              description="A full-featured school website built with React."
              link="https://heroespinnacleschools.org/"
            />
            <ProjectCard
              title="Recipe Website"
              description="A full-featured recipe website built with React."
              link="https://mealrecipes.vercel.app/"
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
          {["JavaScript", "React", "Tailwind", "MongoDB", "Git"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-gray-700 px-4 py-2 rounded border-2 border-gray-500"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-300 mb-8">
            Want to collaborate or chat? Reach out!
          </p>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <a
              href="mailto:ayodejioladeji12@gmail.com"
              className="bg-purple-500 text-black px-6 py-3 rounded hover:bg-linear-to-t from-gray-900 to-purple-600 transition hover:text-white active:bg-black active:text-white"
            >
              Email Me
            </a>
            <a
              href="https://x.com/thegreyline12"
              className="bg-purple-500 text-black px-6 py-3 rounded hover:bg-linear-to-t from-gray-900 to-purple-600 transition hover:text-white active:bg-black active:text-white"
            >
              Twitter/X
            </a>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section
        id="blog"
        className="flex items-center justify-center h-fit bg-linear-to-t from-gray-800 to-purple-500 "
      >
        <div className="flex flex-wrap sm:grid-cols-2 md:grid-cols-3 lg:gap-2 gap-1 w-4/4 items-center justify-center pt-2 pb-2">
          {blogs.map((blog, index) => (
            <Blogcard key={index} {...blog} />
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-center py-6 border-t border-gray-700">
        <p className="text-gray-500 text-sm">
          &copy; 2025 GreyLine Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
