import BtnPrimary from "../../components/shared/btn-primary";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
const linkedin = "/svgs/linkedin.svg";
const linkedinWhite = "/svgs/linkedin-white.svg";
const github = "/svgs/github.svg";
const githubWhite = "/svgs/github-white.svg";

const Intro = ({ darkMode }) => {
  return (
    <section className="grow" id="home">
      {/* Introduction */}
      <h1
        className={`accent-1 text-4xl md:text-2xl mb-6 md:mb-1 fadeInBottom delay-1 ${
          !darkMode ? "font-bold" : ""
        }`}
      >
        Hello, my name is
      </h1>
      <h2 className="font-bold text-7xl md:text-6xl mb-8 md:mb-6 fadeInBottom delay-1">
        Alejandro Mares
      </h2>
      <h3 className="accent-2 text-5xl md:text-4xl mb-12 fadeInBottom delay-2">
        I&apos;m a Web Developer.
      </h3>
      {/* Buttons row */}
      <div className="flex items-center fadeInBottom delay-3 relative">
        <Link href="#work" passHref aria-label="Work section">
          <BtnPrimary darkMode={darkMode} className="">
            Check out my work
          </BtnPrimary>
        </Link>
        <a
          href="https://www.linkedin.com/in/alejandro-mares/"
          target="_blank"
          aria-label="Go to linkedin"
          rel="noreferrer"
          className="flex justify-center p-2 ml-4 transition-opacity opacity-60 hover:opacity-100"
        >
          <img
            src={darkMode ? linkedinWhite : linkedin}
            alt="Linkedin logo"
            width={26}
            height={26}
            className=""
          />
        </a>
        <a
          href="https://github.com/A1xMares"
          target="_blank"
          aria-label="Go to github"
          rel="noreferrer"
          className="flex justify-center p-2 transition-opacity	opacity-60 hover:opacity-100"
        >
          <img
            src={darkMode ? githubWhite : github}
            alt="Github logo"
            width={24}
            height={24}
            className=""
          />
        </a>
        {/* Scroll indicator */}
        <Link href="#about" passHref aria-label="About section">
          <div className="absolute left-0 right-0 flex justify-center -bottom-40 cursor-pointer">
            <ChevronDownIcon
              className={`h-14 transition-opacity opacity-60 animate-bounce p-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
