import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
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

      <div className="pl-8 pt-4 relative">
        <AnimationSequence showedArea={showedArea}>
          <div className="flex justify-center flex-col h-experience box-border	">
            {/* Bosch experience */}
            <div
              className={`h-full basis-1 transition-all duration-300 ease-out ${
                selected === 0 ? "grow" : ""
              }`}
              id="Bosch"
            >
              <h3
                onClick={() => handleSelected(0)}
                className={`text-2xl cursor-pointer h-10  ${
                  selected === 0 ? "font-bold" : ""
                }`}
              >
                Web dev at{" "}
                <a
                  href="https://www.bosch.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Go to bosch"
                  className="accent-2 underline hover:underline-offset-2"
                >
                  Bosch
                </a>
              </h3>
              <div className={selected === 0 ? "" : "absolute hidden"}>
                <div
                  className={`${
                    selectedInner === 0 ? "h-full" : "h-0 overflow-hidden"
                  }`}
                >
                  <p
                    className={`text-sm accent-1 ${
                      selectedInner === 0 ? "fadeInBottom" : "fadeInUnseen"
                    }`}
                  >
                    Sep 2020 — Present
                  </p>
                  <p
                    className={`text-base mt-2 ${
                      selectedInner === 0 ? "fadeInBottom" : "fadeInUnseen"
                    }`}
                  >
                    Worked as a remote developer in a corporate IT team, managed
                    from the USA using SCRUM methodology.
                  </p>
                  <ul className="arrow-list pl-8 mt-4">
                    <li
                      className={`delay-1 ${
                        selectedInner === 0 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>ITSM DASH,</strong> developed an internal
                        project to improve Bosch&apos;s Support Agents
                        performance, enabling a smart search of support articles
                        as well as ticket raising forms. Used React.js for
                        front-end and Node.js, Express.js for back-end querying
                        SQL databases.
                      </p>
                    </li>
                    <li
                      className={`mt-4 delay-2 ${
                        selectedInner === 0 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>IT Service Portal,</strong> developed new
                        modules and performed maintenance of a long term
                        internal web-app with a 400k+ user base. Used
                        Backbone.js, jQuery for front-end and JSPs to query SQL
                        databases.
                      </p>
                    </li>
                    <li
                      className={`mt-4 delay-3 ${
                        selectedInner === 0 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>Level 3 support,</strong> provided level 3
                        technical support to advanced users.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Adroit experience */}
            <div
              className={` h-full basis-1 transition-all duration-300 ease-out ${
                selected === 1 ? "grow" : ""
              }`}
              id="Adroit"
            >
              <h3
                onClick={() => handleSelected(1)}
                className={`text-2xl cursor-pointer h-10 whitespace-nowrap ${
                  selected === 1 ? "font-bold" : ""
                }`}
              >
                Web dev at{" "}
                <a
                  href="https://adroitoverseas.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Go to adroit"
                  className="accent-2 underline hover:underline-offset-2"
                >
                  Adroit
                </a>
              </h3>
              <div className={selected === 1 ? "" : "absolute hidden"}>
                <div
                  className={`${
                    selectedInner === 1 ? "h-full" : "h-0 overflow-hidden"
                  }`}
                >
                  <p
                    className={`text-sm accent-1 ${
                      selectedInner === 1 ? "fadeInBottom" : "fadeInUnseen"
                    }`}
                  >
                    Nov 2019 — Sep 2020
                  </p>
                  <p
                    className={`text-base mt-2 ${
                      selectedInner === 1 ? "fadeInBottom" : "fadeInUnseen"
                    }`}
                  >
                    Worked as a remote developer for a Canadian agro commodities
                    export company. Founder member of internal tech department.
                  </p>
                  <ul className="arrow-list pl-8 mt-4">
                    <li
                      className={`delay-1 ${
                        selectedInner === 1 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>Internal CRM,</strong> improved overall UI/UX
                        developing new modules to extend functionality. Worked
                        with Angular 7 and Material Design.
                      </p>
                    </li>
                    <li
                      className={`mt-4 delay-2 ${
                        selectedInner === 1 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>Internal ERP,</strong> scaled the aforementioned
                        CRM to an ERP developing new modules and business logic
                        to manage 6 company departments like sales, logistics,
                        customers, many roles each department. Scaled Angular
                        from version 7 to versions 9. Used Node, LoopBack and
                        Mongo.
                      </p>
                    </li>
                    <li
                      className={`mt-4 delay-3 ${
                        selectedInner === 1 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>Level 3 support,</strong> provided technical
                        support to users located in Canada.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Aleate experience */}
            <div
              className={` h-full basis-1 transition-all duration-300 ease-out ${
                selected === 2 ? "grow" : ""
              }`}
              id="Aleate"
            >
              <h3
                onClick={() => handleSelected(2)}
                className={`text-2xl cursor-pointer h-10 ${
                  selected === 2 ? "font-bold" : ""
                }`}
              >
                Web dev at{" "}
                <a
                  href="https://www.aleate.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Go to aleate"
                  className="accent-2 underline hover:underline-offset-2"
                >
                  Aleate
                </a>
              </h3>
              <div className={selected === 2 ? "" : "absolute hidden"}>
                <div
                  className={`${
                    selectedInner === 2 ? "h-auto" : "h-0 overflow-hidden"
                  }`}
                >
                  <p
                    className={`text-sm accent-1 ${
                      selectedInner === 2 ? "fadeInBottom" : "fadeInUnseen"
                    }`}
                  >
                    Aug 2018 — Oct 2019
                  </p>
                  <p
                    className={`text-base mt-2 ${
                      selectedInner === 2 ? "fadeInBottom" : "fadeInUnseen"
                    }`}
                  >
                    Worked locally being responsible of the front-end
                    development of many projects and contributing with design
                    team.
                  </p>
                  <ul className="arrow-list pl-8 mt-4">
                    <li
                      className={`delay-1 ${
                        selectedInner === 2 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>Aleate&apos;s website,</strong> developed the
                        first version of the Aleate&apos;s current website
                        proposing and implementing an interactive 3D environment
                        to deliver an outstanding UX.{" "}
                        <a
                          href="https://www.aleate.com/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Go to aleate"
                          className="accent-2 underline hover:underline-offset-2"
                        >
                          View Project.
                        </a>
                      </p>
                    </li>
                    <li
                      className={`mt-4 delay-2 ${
                        selectedInner === 2 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>Adroit Overseas&apos;s internal CRM,</strong>{" "}
                        developed the 1st version of a CRM with large amount of
                        CRUDs, charts and maps for data visualization.
                      </p>
                    </li>
                    <li
                      className={`mt-4 delay-3 ${
                        selectedInner === 2 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>Megadulces&apos;s internal ERP,</strong>{" "}
                        developed the 1st version of an ERP to manage the
                        company process&apos;s from manufacturing, distribution,
                        reporting and quality assurance.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Freelance experience */}
            <div
              className={` h-full basis-1 transition-all duration-300 ease-out ${
                selected === 3 ? "grow" : ""
              }`}
              id="Freelance"
            >
              <h3
                onClick={() => handleSelected(3)}
                className={`text-2xl cursor-pointer h-10 ${
                  selected === 3 ? "font-bold" : ""
                }`}
              >
                Freelance dev
              </h3>
              <div className={selected === 3 ? "" : "absolute hidden"}>
                <div
                  className={`${
                    selectedInner === 3 ? "h-full" : "h-0 overflow-hidden"
                  }`}
                >
                  <p
                    className={`text-sm accent-1 ${
                      selectedInner === 3 ? "fadeInBottom" : "fadeInUnseen"
                    }`}
                  >
                    Jan 2019 — Jan 2022
                  </p>
                  <p
                    className={`text-base mt-2 ${
                      selectedInner === 3 ? "fadeInBottom" : "fadeInUnseen"
                    }`}
                  >
                    I have worked in some freelance projects, participating mainly as frontend web developer.
                  </p>
                  <ul className="arrow-list pl-8 mt-4">
                    <li
                      className={`delay-1 ${
                        selectedInner === 3 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>Unisun&apos;s CRM,</strong> developed the 1st
                        version of an internal CRM for an online school to
                        manage the student base, its payment dues and organize
                        online classrooms.
                      </p>
                    </li>
                    <li
                      className={`mt-4 delay-2 ${
                        selectedInner === 3 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>Grid&apos;s landing page</strong>, developed the
                        landing page of a Mexican company in a very limited time
                        frame (2 days).
                        <a
                          href="https://www.gridcompany.com.mx/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Go to grid"
                          className="accent-2 underline hover:underline-offset-2"
                        >
                          View Project.
                        </a>
                      </p>
                    </li>
                    <li
                      className={`mt-4 delay-3 ${
                        selectedInner === 3 ? "fadeInBottom" : "fadeInUnseen"
                      }`}
                    >
                      <p className="text-base">
                        <strong>Integreat&apos;s website</strong>, developed the
                        current website of an European consulting company,
                        developing 15+ pages and implementing
                        internationalization of 6 languages.
                        <a
                          href="https://integreat.com/es/inicio"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Go to integreat"
                          className="accent-2 underline hover:underline-offset-2"
                        >
                          View Project.
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimationSequence>
        {/* Scroll indicator */}
        {/* <div className="absolute left-0 right-0 flex justify-center -bottom-36 pl-8 mr-4 lg:mr-0">
          <Link href="#work" passHref>
            <ChevronDownIcon
              className={`h-14 cursor-pointer transition-opacity opacity-30 animate-bounce p-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
