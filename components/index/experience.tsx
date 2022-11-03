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

      <div className="pl-10 pt-4 relative">
        <AnimationSequence showedArea={showedArea}>
          <div className="flex justify-start flex-col  box-border	">
            {JobsData.map((job, index) => {
              return (
                <div
                  className={`h-auto basis-1 transition-all duration-300 ease-out ${
                    selected === index && index !== 0 ? "mt-2" : ""
                  }`}
                  id={job?.place?.name || job.position}
                  key={job?.place?.name || job.position}
                >
                  {/* JOB HEADER */}
                  <h3
                    onClick={() => handleSelected(index)}
                    className={` cursor-pointer flex -ml-9 ${
                      selected === index
                        ? "font-bold text-3xl h-12"
                        : "text-2xl h-9"
                    }`}
                  >
                    <ChevronDownIcon
                      className={`h-6 w-8 mt-1 transition-all p-0 duration-300 ${
                        darkMode
                          ? selected === index
                            ? "text-white "
                            : "text-gray-100 "
                          : selected === index
                          ? "text-black "
                          : "text-gray-400 "
                      }${selected !== index && "-rotate-90"}`}
                    />
                    {job.position} {job.place && "at"}
                    {job.place && (
                      <a
                        href={job.place.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={job.place.label}
                        className="underline hover:!text-blue-600 ml-1"
                      >
                        {job.place.name}
                      </a>
                    )}
                  </h3>
                  {/* JOB BODY CONTENT */}
                  <div
                    className={`pb-9 ${
                      selected === index ? "" : "absolute hidden"
                    }`}
                  >
                    <div
                      className={`${
                        selected === index ? "h-auto" : "h-0 overflow-hidden"
                      }`}
                    >
                      {/* JOB TIME FRAME */}
                      <p
                        className={`text-sm accent-1 font-semibold  ${
                          selected === index ? "fadeInBottom" : "fadeInUnseen"
                        }`}
                      >
                        {job.time}
                      </p>
                      {/* JOB DESCRIPTION */}
                      <p
                        className={`text-base mt-2 ${
                          selected === index ? "fadeInBottom" : "fadeInUnseen"
                        }`}
                      >
                        {job.description}
                      </p>
                      {/* JOB PROJECTS */}
                      <ul className="arrow-list pl-8 mt-5">
                        {job.projects.map((project, i) => {
                          return (
                            <li
                              className={` mb-5 ${
                                selected === index
                                  ? "fadeInBottom"
                                  : "fadeInUnseen"
                              }`}
                              key={project.title}
                            >
                              {/* PROJECT DETAILS */}
                              <p className="text-base text-justify">
                                {project.title && (
                                  <strong>{project.title},</strong>
                                )}{" "}
                                {project.details}{" "}
                              </p>
                              {/* PROJECT TAGS */}
                              <div className="flex items-center justify-between mt-2">
                                <div className="flex gap-2 mr-4">
                                  {project.tags &&
                                    project.tags.map((tag) => {
                                      return (
                                        <div
                                          className={`px-2 h-5 rounded-full  font-semibold text-sm flex items-center ${darkMode ? "text-gray-200 border border-gray-400" : "text-gray-600 bg-gray-200"}`}
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
                                    className="accent-2 font-semibold hover:!text-blue-600"
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
                        className={`flex justify-end items-center mt-6 fadeInBottom`}
                      >
                        <div>
                          {JobsData[index - 1] && (
                            <button
                              className="flex items-center cursor-pointer px-2 mr-4 group "
                              onClick={() => setSelected(selected - 1)}
                            >
                              <ArrowNarrowLeftIcon
                                className={`w-5 mr-1 ${
                                  darkMode ? "accent-1 " : "text-black "
                                }`}
                              />
                              <p className={darkMode ? "accent-1 " : "text-black "}>
                                {JobsData[index - 1].place?.name ||
                                  JobsData[index - 1].position}
                              </p>
                            </button>
                          )}
                        </div>
                        <div>
                          {JobsData[index + 1] && (
                            <button
                              className="flex items-center cursor-pointer px-2 group "
                              onClick={() => setSelected(selected + 1)}
                            >
                              <p className={darkMode ? "accent-1 " : "text-black "}>
                                {JobsData[index + 1].place?.name ||
                                  JobsData[index + 1].position}
                              </p>
                              <ArrowNarrowRightIcon
                                className={`w-5 ml-1 ${
                                  darkMode ? "accent-1 " : "text-black "
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
