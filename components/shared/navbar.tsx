import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import BtnPrimary from "../shared/btn-primary";

const Navbar = ({
  darkMode,
  toggleDarkMode,
  scrollY,
  windowHeight,
  mobileMenu,
  setMobileMenu,
}) => {
  const [navbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    // Manage navbar position state
    const height = windowHeight / 4;
    if (scrollY > height && !navbarFixed) {
      setNavbarFixed(true);
    }
    if (scrollY < height) setNavbarFixed(false);
  }, [scrollY]);

  return (
    <>
      <div
        className={`px-6 md:px-20 h-16 flex items-center justify-between w-full z-30 transition-all fixed ${
          navbarFixed
            ? "backdrop-blur " + (darkMode ? "dark-back-op" : "light-back-op")
            : ""
        }`}
      >
        <h3
          className={`font-bold cursor-pointer text-2xl delay-1 ${
            navbarFixed ? "fadeInBottom" : "fadeInUnseen"
          }`}
        >
          AlxMares
        </h3>
        <div className="flex items-center">
          {/* Desktop nav options*/}
          <div className="items-center hidden lg:flex fadeIn">
            <Link href="#about" passHref aria-label="About section">
              <h2 className="text-lg font-bold cursor-pointer">
                <span className="accent-1 text-sm">01. </span>About
              </h2>
            </Link>
            <Link href="#experience" passHref aria-label="Experience section">
              <h2 className="text-lg font-bold cursor-pointer ml-6">
                <span className="accent-1 text-sm">02. </span>Experience
              </h2>
            </Link>
            <Link href="#work" passHref aria-label="Work section">
              <h2 className="text-lg font-bold cursor-pointer ml-6">
                <span className="accent-1 text-sm">03. </span>My work
              </h2>
            </Link>
            <Link href="#contact" passHref aria-label="Contact section">
              <h2 className="text-lg font-bold cursor-pointer ml-6">
                <span className="accent-1 text-sm">04. </span>Contact
              </h2>
            </Link>
          </div>
          {/* Darkmode toggle button*/}
          <button
            className={`ml-8 p-2 fadeIn`}
            onClick={toggleDarkMode}
            aria-label="Darkmode toggle"
          >
            {darkMode ? (
              <SunIcon className="text-white h-5" />
            ) : (
              <MoonIcon className="text-black h-5" />
            )}
          </button>
          {/* Menu button*/}
          <button
            className={`p-2 fadeIn lg:hidden`}
            aria-label="Responsive menu"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu && (
              <XIcon
                className={`h-7 ${darkMode ? "text-white" : "text-black"}`}
              />
            )}
            {!mobileMenu && (
              <MenuIcon
                className={`h-7 ${darkMode ? "text-white" : "text-black"}`}
              />
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 backdrop-blur fadeIn z-20 flex ${
          darkMode ? "dark-back-op" : "light-back-op"
        } ${mobileMenu ? "flex" : "hidden"}`}
      >
        <div className="items-center mt-32 ml-8 sm:ml-20">
          <Link href="#about" passHref aria-label="About section" >
            <h2 className="text-4xl font-bold cursor-pointer fadeInBottom delay-2" onClick={() => setMobileMenu(false)}>
              <span className="accent-1 text-2xl">01. </span>About
            </h2>
          </Link>
          <Link href="#experience" passHref aria-label="Experience section">
            <h2 className="text-4xl font-bold cursor-pointer mt-8 fadeInBottom delay-3" onClick={() => setMobileMenu(false)}>
              <span className="accent-1 text-2xl">02. </span>Experience
            </h2>
          </Link>
          <Link href="#work" passHref aria-label="Work section">
            <h2 className="text-4xl font-bold cursor-pointer mt-8 fadeInBottom delay-4" onClick={() => setMobileMenu(false)}>
              <span className="accent-1 text-2xl">03. </span>My work
            </h2>
          </Link>
          <Link href="#contact" passHref aria-label="Contact section">
            <h2 className="text-4xl font-bold cursor-pointer mt-8 fadeInBottom delay-5" onClick={() => setMobileMenu(false)}>
              <span className="accent-1 text-2xl">04. </span>Contact me
            </h2>
          </Link>
          <a
            href="https://drive.google.com/file/d/1P9dwGfbDdXJ3vIHFzcAgFNAGPdQ7eNji/view"
            target="_blank"
            rel="noreferrer"
            aria-label="Resume link"
          >
            <BtnPrimary darkMode={darkMode} className="w-60 mt-10 fadeInBottom delay-6">
              Resume
            </BtnPrimary>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
