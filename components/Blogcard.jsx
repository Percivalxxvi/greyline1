import React from "react";
import { useNavigate } from "react-router-dom";

const Blogcard = ({ image, title, description, author, date, link, content }) => {
  const navigate = useNavigate()
  return (
    <div className="max-w-sm bg-gray-300 lg:rounded-2xlrounded-1xl lg:w-80 w-[48%] lg:h-100 h-90 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-500">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="lg:p-5 p-2 flex flex-col justify-between h-fit">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 lg:mb-2 mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 h-15">
            {description}
          </p>
        </div>

        {/* Footer */}
        <div className="lg:mt-4 mt-1 flex items-center lg:justify-between justify-center text-sm text-gray-500">
          <div>
            <span className="font-medium text-[12px] text-gray-700">
              {author}
            </span>
            <span className="ml-2 text-[12px] text-gray-700">• {date}</span>
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
            className="text-indigo-600 font-medium ml-2 hover:text-indigo-800 hover:cursor-pointer transition-colors duration-300"
          >
            Read
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
