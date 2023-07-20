import { useState } from "react";
import AnimationSequence from "../helpers/animationSequence";
import Subtitle from "../shared/subtitle";
import BtnPrimary from "../shared/btn-primary";

const About = ({ darkMode, showedArea }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section id="about" className="pt-28 relative">
      {/* About me subtitle */}
      <div className="flex items-center mb-6">
        <AnimationSequence showedArea={showedArea}>
          <Subtitle showedArea={showedArea} preffix={"01."} text={"About me"} />
        </AnimationSequence>
      </div>
      {/* Content container */}
      <div className="relative lg:flex">
        {/* Tabs container */}
        <div className="grow">
          {/* Tabs selector */}
          <AnimationSequence showedArea={showedArea}>
            <div className="flex mb-4 items-end h-10">
              <h3
                className={`transition-all cursor-pointer ${
                  selectedTab === 0
                    ? "text-3xl font-bold accent-2"
                    : "text-2xl text-gray-500"
                }`}
                onClick={() => setSelectedTab(0)}
              >
                Profile
              </h3>
              <h3
                className={`ml-8 transition-all cursor-pointer ${
                  selectedTab === 1
                    ? "text-3xl font-bold accent-2"
                    : "text-2xl text-gray-500"
                }`}
                onClick={() => setSelectedTab(1)}
              >
                Skills
              </h3>
            </div>
          </AnimationSequence>
          {/* Tabs content */}
          <div
            className={`relative transition-all duration-500 ${
              selectedTab === 0 ? "h-128 sm:h-72" : "h-108 sm:h-56"
            }  lg:h-96 xl:h-96`}
          >
            {/* Tab 0 (Profile content) */}
            <div
              className={`absolute w-full ${
                selectedTab === 0 ? "fadeInLeft delay-2 z-10 " : "fadeOutLeft"
              }`}
            >
              <AnimationSequence showedArea={showedArea}>
                <p className="mb-4 text-justify">
                  I always knew that I wanted to work on tech. My story starts
                  at the age of 15 when I wrote my first piece of code in the
                  programming language &quot;Pascal&quot; and from there I only
                  kept learning until became a professional developer.
                </p>
              </AnimationSequence>
              <AnimationSequence showedArea={showedArea}>
                <p className="mb-4 text-justify">
                  After 5 years of professional experience I&apos;ve built web
                  apps for corporate IT, asset management, specific business
                  tools, ERPs, CRMs and landing pages having experience working
                  in startups and large corporations participating in
                  international remote teams.
                </p>
              </AnimationSequence>
            </div>
            {/* Tab 1 (Skills content) */}
            <div
              className={`absolute w-full ${
                selectedTab === 1 ? "fadeInRight delay-2 z-10" : "fadeOutRight"
              }`}
            >
              <div className="sm:flex sm:flex-wrap sm:justify-between">
                {/* Frontend list */}
                <div className="">
                  <h4 className="font-bold text-xl">Frontend:</h4>
                  <div className="flex items-top mt-2">
                    <ul className="arrow-list pl-5 w-36 sm:w-32 lg:w-36 xl:w-48">
                      <li>
                        <p className="text-base"> HTML & CSS </p>
                      </li>
                      <li>
                        <p className="text-base"> JavaScript </p>
                      </li>
                      <li>
                        <p className="text-base"> TypeScript </p>
                      </li>
                      <li>
                        <p className="text-base"> Es / RxJS </p>
                      </li>
                      <li>
                        <p className="text-base"> Bootstrap </p>
                      </li>
                      <li>
                        <p className="text-base"> Tailwind </p>
                      </li>
                    </ul>
                    <ul className="arrow-list pl-5 ml-6 sm:ml-2 lg:ml-6 xl:ml-8">
                      <li>
                        <p className="text-base"> Angular </p>
                      </li>
                      <li>
                        <p className="text-base"> React.js </p>
                      </li>
                      <li>
                        <p className="text-base"> Next.js </p>
                      </li>
                      <li>
                        <p className="text-base"> SvelteKit </p>
                      </li>
                      <li>
                        <p className="text-base"> jQuery </p>
                      </li>
                      <li>
                        <p className="text-base"> Three.js </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Backend list */}
                <div className=" mt-4 sm:mt-0 lg:mt-4">
                  <h4 className="font-bold text-xl">Backend & Arch:</h4>
                  <div className="flex items-top mt-2">
                    <ul className="arrow-list pl-5 w-36 sm:w-32 lg:w-36 xl:w-48">
                      <li>
                        <p className="text-base"> Rest APIs </p>
                      </li>
                      <li>
                        <p className="text-base"> NodeJs </p>
                      </li>
                      <li>
                        <p className="text-base"> Express.js </p>
                      </li>
                      <li>
                        <p className="text-base"> AWS Platform </p>
                      </li>
                    </ul>
                    <ul className="arrow-list pl-5 ml-6 sm:ml-2 lg:ml-6 xl:ml-8">
                      <li>
                        <p className="text-base"> MongoDB </p>
                      </li>
                      <li>
                        <p className="text-base"> SQL query </p>
                      </li>
                      <li>
                        <p className="text-base"> NgInx </p>
                      </li>
                      <li>
                        <p className="text-base"> Git </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portrait containter */}
        <div className="lg:mt-11">
          <div className="w-100 flex justify-center">
            <div className="w-36 mr-4 lg:mr-0 -mt-5 sm:mt-4 lg:ml-9 xl:w-44">
              <AnimationSequence showedArea={showedArea}>
                <img
                  src="/img/profile-min.webp"
                  alt="Linkedin logo"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </AnimationSequence>
            </div>
          </div>
          <div className="w-100 flex justify-center mr-4 lg:mr-0 mt-4 lg:ml-9">
            <AnimationSequence showedArea={showedArea}>
              <a
                href="https://drive.google.com/file/d/1P9dwGfbDdXJ3vIHFzcAgFNAGPdQ7eNji/view"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume link"
              >
                <BtnPrimary darkMode={darkMode} className="w-36 xl:w-44">
                  Resume
                </BtnPrimary>
              </a>
            </AnimationSequence>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      {/* <div className="absolute left-0 right-0 flex justify-center -bottom-28 pl-8 mr-4 lg:mr-0">
        <Link href="#experience" passHref>
          <ChevronDownIcon
            className={`h-14 cursor-pointer transition-opacity opacity-30 animate-bounce p-2 ${
              darkMode ? "text-white" : "text-black"
            }`}
          />
        </Link>
      </div> */}
    </section>
  );
};

export default About;
