import React from 'react'

const Navpc = ({ page }) => {
  return (
    <div className="lg:flex hidden z-999 h-25 justify-between bg-gray-800 sticky top-0 w-full items-center border-b-4 border-grey-0">
      <div className="flex flex-col ml-35">
        <div className="flex-1 text-6xl font-bold text-grey-0">GreyLine</div>
        <h1 className="text-2xl font-bold text-grey-0">Solutions</h1>
      </div>
      <header className="p-6 shadow-md mr-40">
        <div className="flex">
          {/* <h1 className="text-2xl font-bold">GreyLine Solutions</h1> */}
          <nav className="flex gap-10">
            <a
              href="#about"
              style={{ display: page === "blogpage" ? "none" : "flex" }}
              className="font-bold text-gray-400 hover:text-white text-2xl"
            >
              About
            </a>
            <a
              href="#projects"
              style={{ display: page === "blogpage" ? "none" : "flex" }}
              className="font-bold text-gray-400 hover:text-white text-2xl"
            >
              Projects
            </a>
            <a
              href="#skills"
              style={{ display: page === "blogpage" ? "none" : "flex" }}
              className="font-bold text-gray-400 hover:text-white text-2xl"
            >
              Skills
            </a>
            <a
              href="#contact"
              style={{ display: page === "blogpage" ? "none" : "flex" }}
              className="font-bold text-gray-400 hover:text-white text-2xl"
            >
              Contact
            </a>
            <a
              href="#blog"
              style={{ display: page === "blogpage" ? "none" : "flex" }}
              className="font-bold text-gray-400 hover:text-white text-2xl"
            >
              Blog
            </a>
            <a
              href="/"
              style={{ display: page === "blogpage" ? "flex" : "none" }}
              className="font-bold text-gray-400 hover:text-white text-2xl"
            >
              Home
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navpc