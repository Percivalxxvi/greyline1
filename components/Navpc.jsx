import React from 'react'

const Navpc = () => {
  return (
    <div className='lg:flex hidden h-25 bg-blue-500 bg-linear-to-r justify-between from-gray-800 to-purple-500 sticky top-0 w-full items-center border-b-4 border-grey-0'>
        <div className='flex flex-col ml-5'>
            <div className='flex-1 text-6xl font-bold text-grey-0'>GreyLine</div>
            <h1 className='text-2xl font-bold text-grey-0'>Solutions</h1>
        </div>
        <header className="p-6 shadow-md mr-40">
            <div className="flex">
            {/* <h1 className="text-2xl font-bold">GreyLine Solutions</h1> */}
            <nav className="flex gap-10">
                <a href="#about" className="font-bold hover:text-black text-2xl">About</a>
                <a href="#projects" className="font-bold hover:text-black text-2xl">Projects</a>
                <a href="#skills" className="font-bold hover:text-black text-2xl">Skills</a>
                <a href="#contact" className="font-bold hover:text-black text-2xl">Contact</a>
            </nav>
            </div>
        </header>
    </div>
  )
}

export default Navpc