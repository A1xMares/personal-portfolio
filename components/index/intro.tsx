import BtnPrimary from "../../components/shared/btn-primary";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Intro = ({ darkMode }) => {
  return (
    <section className="" id="home">
      {/* Introduction */}
      <h2
        className={`accent-1 text-2xl mb-1 fadeInBottom delay-1 ${
          !darkMode ? "font-bold" : ""
        }`}
      >
        Hello, <span>my name is</span>
      </h2>
      <h1 className="font-bold text-6xl mb-6 fadeInBottom delay-1">
        Alejandro Mares.
      </h1>
      <h3 className="accent-2 text-4xl mb-12 fadeInBottom delay-2">
        I&apos;m a Full Stack Web Developer.
      </h3>
      {/* Buttons outlet */}
      <div className="flex items-center fadeInBottom delay-3">
        <BtnPrimary darkMode={darkMode}>Check out my work</BtnPrimary>
        <button className="flex justify-center p-2 ml-4">
          <a href="https://www.linkedin.com/in/alejandro-mares/" target="_blank" rel="noreferrer">
            <Image
              src={darkMode ? "/svgs/linkedin-white.svg" : "/svgs/linkedin.svg"}
              alt="Linkedin logo"
              width={26}
              height={26}
              className="transition-opacity	opacity-70 hover:opacity-100 duration-500"
            />
          </a>
        </button>
        <button className="flex justify-center p-2">
          <a href="https://github.com/A1xMares" target="_blank" rel="noreferrer">
            <Image
              src={darkMode ? "/svgs/github-white.svg" : "/svgs/github.svg"}
              alt="Github logo"
              width={24}
              height={24}
              className="transition-opacity	opacity-70 hover:opacity-100 duration-300"
            />
          </a>
        </button>
      </div>
      {/* Scroll indicator */}
      <div className="absolute left-0 right-0 flex justify-center bottom-4">
          <Link href="#about" passHref>
            <ChevronDownIcon
              className={`h-14 cursor-pointer transition-opacity opacity-30 animate-bounce p-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            />
          </Link>
      </div>
    </section>
  );
};

export default Intro;
