import {
  ExternalLinkIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/solid";
import { useState } from "react";

const github = "/svgs/github.svg";
const githubWhite = "/svgs/github-white.svg";

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
        darkMode ? "dark-back-op " : "bg-gray-200 border-gray-300"
      }`}
    >
      {/* Image Galley */}
      <div
        className={`h-48 sm:h-40 md:h-44 xl:h-52 relative ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <img
          src={project.gallery[index]}
          alt={project.title}
          className="card-img"
        />
        <button
          className={`absolute left-3 -bottom-3 rounded-full disabled:shadow-none cursor-pointer disabled:cursor-default transition-all ease-out duration-500 ${
            darkMode
              ? "bg-slate-600 disabled:bg-slate-800 shadow-xl"
              : "bg-white disabled:bg-gray-100 shadow-lg"
          }`}
          onClick={() => handlePrev()}
          type="button"
          disabled={index === 0}
        >
          <ChevronLeftIcon
            className={`h-6 opacity-100 ${
              darkMode ? "text-gray-300" : "accent-2"
            }`}
          />
        </button>
        <button
          className={`absolute right-3 -bottom-3 rounded-full  disabled:shadow-none cursor-pointer disabled:cursor-default transition-all ease-out duration-500 ${
            darkMode
              ? "bg-slate-600 disabled:bg-slate-800 shadow-xl"
              : "bg-white disabled:bg-gray-100 shadow-lg"
          }`}
          onClick={() => handleNext()}
          type="button"
          disabled={index === project.gallery.length - 1}
        >
          <ChevronRightIcon
            className={`h-6 opacity-100 ${
              darkMode ? "text-gray-300" : "accent-2"
            }`}
          />
        </button>
      </div>
      {/* Content */}
      <div className="pt-5 pb-5 px-4 flex flex-col justify-between grow">
        <div className="h-full">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg accent-1">{project.title}</h3>
            <h4 className="font- text-xs accent-2">({project.date})</h4>
          </div>
          {/*  */}
          {/* <p className="text-xs accent-2 ">{project.date}</p> */}
          {/*  */}
          <div className="mt-2 font-bold">
            <p className="text-xs accent-2">
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
          {/*  */}
          <p className="mt-2 text-sm grow">{project.description}</p>
        </div>
        <div className="flex items-bottom ">
          {project.url !== "" && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={project.title}
            >
              <button className="mt-3 px-2 h-6 rounded-md text-xs font-semibold flex items-center whitespace-nowrap border border-gray-600 text-gray-600 dark:text-gray-300">
                View Project
              </button>
            </a>
          )}
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
        </div>
      </div>
    </div>
  );
};

export default Card;
