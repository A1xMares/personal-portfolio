import { useEffect, useRef, useState } from "react";
import AnimationSequence from "../helpers/animationSequence";
import Subtitle from "../shared/subtitle";
import Portrait from "../three/Portrait";

const About = ({ darkMode, showedArea }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section id="about" className="pt-28 -mt-28">
      <div className="flex items-center mb-6 pr-2">
        <AnimationSequence showedArea={showedArea}>
          <Subtitle showedArea={showedArea} preffix={'01.'} text={'About me'} />
        </AnimationSequence>
      </div>

      <div className="pl-8">
        <AnimationSequence showedArea={showedArea}>
          <div className="flex mb-4 items-end h-10">
            <h3 className={`transition-all ${selectedTab === 0 ? 'text-3xl font-bold accent-2' : 'text-xl text-gray-500'}`} onClick={() => setSelectedTab(0)}> Profile </h3>
            <h3 className={`ml-8 transition-all ${selectedTab === 1 ? 'text-3xl font-bold accent-2' : 'text-xl text-gray-500'}`} onClick={() => setSelectedTab(1)}> Skills </h3>
          </div>
        </AnimationSequence>

        <div className="relative h-96">
          <div className={`absolute w-full ${selectedTab === 0 ? 'fadeInLeft delay-2 z-10 ' : 'fadeOutLeft'}`}>
            <AnimationSequence showedArea={showedArea}>
              <p className="mb-4">
                I always knew that I wanted to work on tech. My story starts at the
                age of 15 when I wrote my first piece of code in the programming
                language Pascal and from there I only kept learning until became a
                professional developer.
              </p>
            </AnimationSequence>
            <AnimationSequence showedArea={showedArea}>
              <p className="mb-4">
                After 3.5+ years of professional experience I have build large web
                projects like ERP&apos;s and CRM&apos;s, stunning landing pages
                having experience working in startups and large corporations
                participating in multi-national teams.
              </p>
            </AnimationSequence>
            <AnimationSequence showedArea={showedArea}>
              <p className="">
                Also I&apos;m a frequent participant of all sort of hackathons
                organized in Guadalajara, MX.
              </p>
            </AnimationSequence>
          </div>

          <div className={`absolute w-full ${selectedTab === 1 ? 'fadeInRight delay-2 z-10' : 'fadeOutRight'}`}>
            
          </div>
        </div>
        
        {/*  */}
        <div className="h-48">
          <div className="w-">
            <Portrait/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
