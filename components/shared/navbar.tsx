import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, MenuIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Navbar = ({ darkMode, toggleDarkMode, scrollY, windowHeight }) => {
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
    <div
      className={`px-6 md:px-20  h-16 flex items-center justify-between w-full z-20 transition-all fixed ${
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
          <Link href="#about" passHref>
            <h2 className="text-lg font-bold cursor-pointer">
              <span className="accent-1 text-sm">01. </span>About 
            </h2>
          </Link>
          <Link href="#experience" passHref>
            <h2 className="text-lg font-bold cursor-pointer ml-6">
              <span className="accent-1 text-sm">02. </span>Experience
            </h2>
          </Link>
          <Link href="#work" passHref>
            <h2 className="text-lg font-bold cursor-pointer ml-6">
              <span className="accent-1 text-sm">03. </span>My work
            </h2>
          </Link>
          <Link href="#contact" passHref>
            <h2 className="text-lg font-bold cursor-pointer ml-6">
              <span className="accent-1 text-sm">04. </span>Contact
            </h2>
          </Link>
        </div>
        {/* Darkmode toggle button*/}
        <button className={`ml-8 p-2 fadeIn`} onClick={toggleDarkMode} aria-label="Darkmode toggle">
          {darkMode ? (
            <SunIcon className="text-white h-5" />
          ) : (
            <MoonIcon className="text-black h-5" />
          )}
        </button>
        {/* Menu button*/}
        <button className={`p-2 fadeIn lg:hidden`} aria-label="Responsive menu">
          <MenuIcon
            className={`h-7 ${darkMode ? "text-white" : "text-black"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
