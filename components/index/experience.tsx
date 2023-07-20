import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import { JobsData } from "../../consts/jobsData";
import AnimationSequence from "../helpers/animationSequence";
import Subtitle from "../shared/subtitle";

const Experience = ({ darkMode, showedArea }) => {
  const [selected, setSelected] = useState(0);
  const [selectedInner, setSelectedInner] = useState(0);

  const handleSelected = (id: number) => {
    setSelected(id);
    setTimeout(() => {
      setSelectedInner(id);
    }, 300);
  };

  return (
    <section id="experience" className="pt-28">
      <div className="flex items-center mb-6">
        <AnimationSequence showedArea={showedArea}>
          <Subtitle
            showedArea={showedArea}
            preffix={"02."}
            text={"Experience"}
          />
        </AnimationSequence>
      </div>

      <div className="-ml-2 pt-2 relative">
        <AnimationSequence showedArea={showedArea}>
          <div className="flex justify-start flex-col  box-border	">
            {JobsData.map((job, index) => {
              return (
                <div
                  className={`h-auto basis-1 transition-all duration-300 ease-out ${
                    selected === index && index !== 0 ? "" : ""
                  }`}
                  id={job?.place?.name || job.position}
                  key={job?.place?.name || job.position}
                >
                  {/* JOB HEADER */}
                  <button
                    onClick={() => handleSelected(index)}
                    className={`${selected === index ? 'mb-4' : 'mb-6'}`}
                  >
                    <h3
                      className={` cursor-pointer flex text-2xl ${
                        selected === index ? "font-normal" : "font-normal"
                      }`}
                    >
                      <ChevronDownIcon
                        className={`h-6 w-8 mt-1 transition-all p-0 duration-300 ${
                          darkMode
                            ? selected === index
                              ? "text-white "
                              : "text-gray-500 "
                            : selected === index
                            ? "text-gray-600 "
                            : "text-gray-400 "
                        }${selected !== index && "-rotate-90"}`}
                      />
                      {job.position} {job.place && "@"}
                      {job.place && (
                        <a
                          href={job.place.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={job.place.label}
                          className={`underline font-bold hover:!text-blue-600 ml-2 font- ${darkMode ? 'text-gray-100' : 'text-slate-600'}`}
                        >
                          {job.place.name}
                        </a>
                      )}
                    </h3>
                    <p className="text-sm accent-2 font-semibold text-left pl-9">
                      {job.time}
                    </p>
                  </button>

                  {/* JOB BODY CONTENT */}
                  <div
                    className={`pb-8 ${
                      selected === index ? "" : "absolute hidden"
                    }`}
                  >
                    <div
                      className={`${
                        selected === index ? "h-auto" : "h-0 overflow-hidden"
                      }`}
                    >
                      {/* JOB DESCRIPTION */}
                      {/* <p
                        className={`text-base mt-2 text-justify ${
                          selected === index ? "fadeInBottom" : "fadeInUnseen"
                        }`}
                      >
                        {job.description}
                      </p> */}
                      {/* JOB PROJECTS */}
                      <ul
                        className={`arrow-list ml-4 pl-5 border-l ${
                          darkMode ? "border-gray-700" : "border-gray-300"
                        }`}
                      >
                        {job.projects.map((project, i) => {
                          return (
                            <li
                              className={` mb-5 last:mb-0 ${
                                selected === index
                                  ? "fadeInBottom"
                                  : "fadeInUnseen"
                              }`}
                              key={project.title}
                            >
                              {/* PROJECT DETAILS */}
                              <p className="text-base ">
                                {project.title && (
                                  <strong
                                    className={` mr-1 ${
                                      darkMode ? "text-white" : ""
                                    }`}
                                  >
                                    {project.title},
                                  </strong>
                                )}
                                {project.details}
                              </p>
                              {/* PROJECT TAGS */}
                              <div className="flex items-center justify-between mt-2">
                                <div className="flex gap-2 mr-4 flex-wrap">
                                  {project.tags &&
                                    project.tags.map((tag) => {
                                      return (
                                        <div
                                          className={`px-2 h-5 rounded-full font-semibold text-xs md:text-sm flex items-center whitespace-nowrap ${
                                            darkMode
                                              ? "text-gray-300 border border-gray-500"
                                              : "text-gray-700 bg-gray-200"
                                          }`}
                                          key={tag}
                                        >
                                          {tag}
                                        </div>
                                      );
                                    })}
                                </div>
                                {project.externalRef && (
                                  <a
                                    href={project.externalRef}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="View Project"
                                    className="accent-1 font-semibold hover:!text-blue-600 whitespace-nowrap"
                                  >
                                    View Project
                                  </a>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      {/* PREV - NEXT BUTTONS */}
                      <div
                        className={`flex justify-end items-center mt-4 fadeInBottom`}
                      >
                        <div>
                          {JobsData[index - 1] && (
                            <button
                              className="flex items-center cursor-pointer px-2 mr-4 group "
                              onClick={() => setSelected(selected - 1)}
                            >
                              <ArrowNarrowLeftIcon
                                className={`w-5 transition-all mr-1 group-hover:mr-2 ${
                                  darkMode
                                    ? "accent-1 "
                                    : "text-black font-semibold"
                                }`}
                              />
                              <p
                                className={`underline underline-offset-4 pb-1 transition-all group-hover:mr-1 ${
                                  darkMode
                                    ? "accent-1 "
                                    : "text-black font-semibold"
                                }`}
                              >
                                {JobsData[index - 1].place?.name ||
                                  JobsData[index - 1].position}
                              </p>
                            </button>
                          )}
                        </div>
                        <div>
                          {JobsData[index + 1] && (
                            <button
                              className="flex items-center cursor-pointer group "
                              onClick={() => setSelected(selected + 1)}
                            >
                              <p
                                className={`underline underline-offset-4 pb-1 ${
                                  darkMode
                                    ? "accent-1 "
                                    : "text-black font-semibold"
                                }`}
                              >
                                {JobsData[index + 1].place?.name ||
                                  JobsData[index + 1].position}
                              </p>
                              <ArrowNarrowRightIcon
                                className={`w-5 transition-all ml-1 group-hover:ml-2 ${
                                  darkMode
                                    ? "accent-1 "
                                    : "text-black font-semibold"
                                }`}
                              />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimationSequence>
      </div>
    </section>
  );
};

export default Experience;
