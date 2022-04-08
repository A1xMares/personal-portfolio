import {
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

const github = '/svgs/github.svg'
const githubWhite = '/svgs/github-white.svg'

const Card = ({ darkMode, project }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < project.gallery.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div
      className={`transition-all card-height w-full rounded-2xl border hover:shadow-md overflow-hidden flex flex-col ${
        darkMode ? "dark-back-op " : "bg-gray-100 border-gray-200"
      }`}
    >
      {/* Image Galley */}
      <div
        className={`h-48 sm:h-36 xl:h-44 relative ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <img src={project.gallery[index]} alt={project.title} className="card-img"/>
        <button
          className={`absolute left-3 -bottom-3 rounded-full disabled:shadow-none cursor-pointer disabled:cursor-default transition-all ease-out duration-500 ${
            darkMode ? "bg-slate-600 disabled:bg-slate-800 shadow-xl" : "bg-white disabled:bg-gray-100 shadow-lg"  
          }`}
          onClick={() => handlePrev()}
          type="button"
          disabled={index === 0}
        >
          <ChevronLeftIcon
            className={`h-6 opacity-100 ${darkMode ? 'text-gray-300' : 'accent-2'}`}
          />
        </button>
        <button
          className={`absolute right-3 -bottom-3 rounded-full  disabled:shadow-none cursor-pointer disabled:cursor-default transition-all ease-out duration-500 ${
            darkMode ? "bg-slate-600 disabled:bg-slate-800 shadow-xl" : "bg-white disabled:bg-gray-100 shadow-lg"
          }`}
          onClick={() => handleNext()}
          type="button"
          disabled={index === project.gallery.length - 1}
        >
          <ChevronRightIcon
            className={`h-6 opacity-100 ${darkMode ? 'text-gray-300' : 'accent-2'}`}
          />
        </button>
      </div>
      {/* Content */}
      <div className="pt-5 pb-5 px-4 flex flex-col justify-between grow">
        <div className="grow h-full">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg accent-1">{project.title}</h3>
          </div>
          <p className="accent-2 text-xs">{project.date}</p>
          <p className="mt-2 text-sm h-20">{project.description}</p>
          <div className="mt-4">
            <p className="text-xs font-bold">
              {project.tags.map((tag, index) => {
                return (
                  <span key={index}>
                    {tag}
                    {index !== project.tags.length - 1 ? " · " : ""}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <div className="flex items-bottom justify-end">
          {project.githubLink !== "" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Go to github"
              className="max-h-6 h-6 flex"
            >
              <img
                src={darkMode ? githubWhite : github}
                alt="Github logo"
                width={20}
                height={20}
              />
            </a>
          )}
          {project.url !== "" && (
            <a href={project.url} target="_blank" rel="noreferrer" aria-label={project.title}>
              <ExternalLinkIcon
                aria-label={project.title}
                className={`h-6 ml-2 cursor-pointer transition-opacity ${
                  darkMode ? "text-white" : "text-black"
                }`}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
