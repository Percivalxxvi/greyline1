import React from "react";
import { useNavigate } from "react-router-dom";

const Blogcard = ({ image, title, description, author, date, link, content }) => {
  const navigate = useNavigate()
  return (
    <div className="max-w-sm lg:bg-gray-300 bg-gray-400 lg:rounded-2xl rounded-lg lg:w-80 w-[49%] lg:h-100 h-fit shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-500">
      {/* Image */}
      <div className="lg:h-48 h-25 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="lg:p-5 p-1 flex flex-col items-center justify-between h-fit">
        <div>
          <h3 className="lg:text-lg text-md font-semibold text-left text-gray-800 lg:mb-2 mb-0.6 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-900 lg:text-black text-sm line-clamp-3 h-15 text-left">
            {description}
          </p>
        </div>

        {/* Footer */}
        <div className="lg:mt-4 mt-1 flex items-center lg:justify-between justify-between text-sm text-gray-500">
          <div>
            <span className="font-bold lg:text-[12px] text-[10px] text-gray-700">
              {author}
            </span>
            <span className="lg:ml-2 ml-2.5 lg:text-[14px] text-[12px] text-gray-700">
              • {date}
            </span>
          </div>
          <a
            onClick={() =>
              navigate("/blogpage", {
                state: {
                  image,
                  title,
                  description,
                  author,
                  date,
                  link,
                  content,
                },
              })
            }
            className="lg:flex hidden text-indigo-600 font-medium lg:ml-2 ml-1 hover:text-indigo-800 hover:cursor-pointer transition-colors duration-300 active:text-black"
          >
            Read
          </a>
        </div>
      </div>
      <button
        onClick={() =>
          navigate("/blogpage", {
            state: {
              image,
              title,
              description,
              author,
              date,
              link,
              content,
            },
          })
        }
        className="lg:hidden bg-gray-300 border text-black  w-4/4 h-fit rounded-lg active:bg-black active:text-white transition-colors duration-300"
      >
        Read More
      </button>
    </div>
  );
};

export default Blogcard;
