import BtnPrimary from "../../components/shared/btn-primary";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import linkedin from "../../public/svgs/linkedin.svg";
import linkedinWhite from "../../public/svgs/linkedin-white.svg";
import github from "../../public/svgs/github.svg";
import githubWhite from "../../public/svgs/github-white.svg";

const Intro = ({ darkMode }) => {
  return (
    <section className="grow" id="home">
      {/* Introduction */}
      <h1
        className={`accent-1 text-2xl mb-1 fadeInBottom delay-1 ${
          !darkMode ? "font-bold" : ""
        }`}
      >
        Hello, <span>my name is</span>
      </h1>
      <h2 className="font-bold text-6xl mb-6 fadeInBottom delay-1">
        Alejandro Mares.
      </h2>
      <h3 className="accent-2 text-4xl mb-12 fadeInBottom delay-2">
        I&apos;m a Full Stack Web Developer.
      </h3>
      {/* Buttons row */}
      <div className="flex items-center fadeInBottom delay-3 relative">
        <Link href="#work" passHref>
          <div>
            <BtnPrimary darkMode={darkMode} className="">
              Check out my work
            </BtnPrimary>
          </div>
        </Link>
        <button className="flex justify-center p-2 ml-4" aria-label="Open linkedin">
          <a
            href="https://www.linkedin.com/in/alejandro-mares/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={darkMode ? linkedinWhite : linkedin}
              alt="Linkedin logo"
              width={26}
              height={26}
              className="transition-opacity	opacity-70 hover:opacity-100 duration-500"
            />
          </a>
        </button>
        <button className="flex justify-center p-2" aria-label="Open github">
          <a
            href="https://github.com/A1xMares"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={darkMode ? githubWhite : github}
              alt="Github logo"
              width={24}
              height={24}
              className="transition-opacity	opacity-70 hover:opacity-100 duration-300"
            />
          </a>
        </button>
        {/* Scroll indicator */}
        <div className="absolute left-0 right-0 flex justify-center -bottom-40">
          <Link href="#about" passHref>
            <ChevronDownIcon
              className={`h-14 cursor-pointer transition-opacity opacity-30 animate-bounce p-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
