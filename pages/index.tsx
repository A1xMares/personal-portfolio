import { ChevronDownIcon } from "@heroicons/react/solid";
import Intro from "../components/index/intro";
import About from "../components/index/about";
import Link from "next/link";
import Experience from "../components/index/experience";
import Work from "../components/index/work";
import Contact from "../components/index/contact";

function HomePage({ darkMode, showedArea, scrollY }) {
  return (
    <>
      {/* Header */}
      <div className="px-6 h-screen pb-20 flex items-center justify-center">
        {/* Intro component */}
        <Intro darkMode={darkMode} />
        {/* Scroll indicator */}
        <div className="absolute left-0 right-0 flex justify-center bottom-32">
          <Link href="#about" passHref>
            <ChevronDownIcon
              className={`h-14 cursor-pointer transition-opacity opacity-30 animate-bounce p-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            />
          </Link>
        </div>
      </div>
      {/* About section */}
      <div className="px-6 mb-20">
        <About darkMode={darkMode} showedArea={showedArea} />
      </div>
      {/* Experience section */}
      <div className="px-6">
        <Experience darkMode={darkMode} showedArea={showedArea} />
      </div>
      {/* Work section */}
      <div className="px-6">
        <Work darkMode={darkMode} showedArea={showedArea} />
      </div>
      {/* Contact section */}
      <div className="px-6">
        <Contact darkMode={darkMode} showedArea={showedArea} />
      </div>
    </>
  );
}

export default HomePage;
