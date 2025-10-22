import React from 'react'
import '../src/App.css'
import Navpc from '../components/Navpc'
import Pager from '../components/Pager'
import ProjectCard from '../components/ProjectCard'

const Home = () => {
  
  return (
    <div>
        <Navpc/>
        {/* <Pager/> */}
        
        <header className="bg-gray-800 p-6 shadow-md lg:hidden">
            <div className="max-w-7xl mx-auto flex justify-center items-center">
            {/* <h1 className="text-2xl font-bold">GreyLine Solutions</h1> */}
            <nav className="space-x-6">
                <a href="#about" className="hover:text-indigo-400">About</a>
                <a href="#projects" className="hover:text-indigo-400">Projects</a>
                <a href="#skills" className="hover:text-indigo-400">Skills</a>
                <a href="#contact" className="hover:text-indigo-400">Contact</a>
            </nav>
            </div>
        </header>

        {/* Hero */}
        <div className='h-100 lg:h-130 lg:w-full flex flex-col lg:flex-row justify-start items-center bg-blue-500 bg-linear-to-r from-gray-800 to-purple-500'>
            <div className='flex flex-col lg:items-center lg:justify-center lg:h-100 lg:ml-20 lg:mr-20 p-5 rounded-lg'>
                <h1 className='lg:text-6xl text-3xl font-bold text-white lg:text-left text-center lg:w-180'>Welcome to GreyLine Solutions</h1>
            </div>
            {/* <h1 className='text-2xl font-bold text-white'>Freelance Developer</h1> */}
            <div className='lg:w-130 lg:h-4/4 w-130 h-4/4 duration-500 flex lg:flex hover:shadow-6xl cursor-pointer lg:hover:mr-5 items-center justify-center'>
                <img className='lg:w-lg lg:h-[98%] w-95 h-90 lg:hover:mr-3 lg:hover:mb-3 duration-500' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="" />
            </div>
        </div>

        <div className='h-10 lg:hidden flex bg-gray-800'>

        </div>

        {/* Intro */}
        <section className="text-center py-20 flex flex-col justify-center items-center bg-gray-900">
        <h2 className="text-4xl font-extrabold mb-4 w-100 text-center">Hello, I'm Joshua Oladeji 👋</h2>
        <p className="text-xl text-gray-400 mb-6">Front-end Developer • Open Source Enthusiast</p>
        <a href="#projects" className="inline-block mt-4 bg-purple-500 text-white px-6 py-3 rounded hover:bg-linear-to-r from-purple-500 to-blue-500 transition hover:text-black hover:font-bold active:bg-black active:text-white">
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="flex flex-col max-w-8xl px-6 py-16 bg-linear-to-r from-gray-800 to-purple-500 justify-center items-center">
        <h3 className="text-3xl font-bold mb-6 lg:w-5xl text-left w-[90%]">About Me</h3>
        <p className="text-gray-100 text-lg lg:w-5xl w-[90%]">
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
              title="Recipe Website"
              description="A full-featured recipe website built with React."
              link="https://recipeweb1.vercel.app/"
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
          {["JavaScript", "React", "Tailwind", "MongoDB", "Git"].map(skill => (
            <span key={skill} className="bg-gray-700 px-4 py-2 rounded border-2 border-gray-500">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-300 mb-8">Want to collaborate or chat? Reach out!</p>
          <a href="mailto:ayodejioladeji12@gmail.com" className="bg-purple-500 text-white px-6 py-3 rounded hover:bg-linear-to-r from-purple-500 to-blue-500 transition hover:text-black hover:font-bold active:bg-black active:text-white">
            Email Me
          </a>
        </div>
      </section>

       <footer className="bg-gray-900 text-center py-6 border-t border-gray-700">
        <p className="text-gray-500 text-sm">&copy; 2025 GreyLine Solutions. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home