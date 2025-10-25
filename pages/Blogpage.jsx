import React from 'react'
import Navpc from '../components/Navpc'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ArrowLeft } from "lucide-react";

const Blogpage = () => {
  const {state} = useLocation()
  return (
    <div>
      <Navpc page="blogpage" />
      <div className="flex flex-row-reverse gap-5 items-center justify-between mr-10 ml-4">
        <h1 className="text-2xl font-bold text-center mt-2 mb-2">Blog Post</h1>
        <Link
          className="lg:hidden flex text-lg border text-white px-1.5 items-center active:bg-white active:text-black"
          to="/"
        >
          <ArrowLeft className="mr-1 text-blue-400 active:bg-white active:text-black" />
          Back
        </Link>
      </div>
      <div className="flex lg:flex-row flex-col lg:h-[78vh] bg-gray-300">
        <div className="lg:h-4/4 lg:w-[45%] h-50">
          <img
            className="w-full h-full object-cover"
            src={state.image}
            alt=""
          />
        </div>
        <div className="flex flex-col lg:w-[55%] lg:p-10 p-3">
          <h1 className="text-2xl font-bold text-black">{state.title}</h1>
          <p className="text-black font-medium">{state.description}</p>
          <div className="h-fit">
            <h2 className="text-black mt-3 mb-3 text-justify">
              {state.content}
            </h2>
          </div>
          <div className="mt-4">
            <span className="text-gray-600">By {state.author}</span>
            <span className="text-gray-600"> | {state.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogpage