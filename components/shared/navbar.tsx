import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, MenuIcon } from "@heroicons/react/solid";

const Navbar = ({ darkMode, toggleDarkMode, scrollY, windowHeight }) => {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [buttonsHidden, setButtonsHidden] = useState(true);

  useEffect(() => {
    // Manage navbar position state
    const height = windowHeight / 4;
    if (scrollY > height && !navbarFixed) setNavbarFixed(true);
    setButtonsHidden(false);
    if (scrollY < height) setNavbarFixed(false);
    // manage navbar buttons state
    if (scrollY > 80 && !navbarFixed && !buttonsHidden) setButtonsHidden(true);
  }, [scrollY]);

  return (
    <div
      className={`px-6 h-20 flex items-center justify-between w-full z-20 transition-all fixed ${
        navbarFixed
          ? "shadow-md backdrop-blur-md " +
            (darkMode ? "dark-back-op" : "light-back-op shadow-gray-200")
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
        {/* Darkmode toggle button*/}
        <button
          className={`p-2 fadeIn`}
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <SunIcon className="text-white h-5" />
          ) : (
            <MoonIcon className="text-black h-5" />
          )}
        </button>
        {/* Darkmode menu button*/}
        <button className={`p-2 fadeIn`}>
          <MenuIcon
            className={`h-7 ${darkMode ? "text-white" : "text-black"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
