import Navbar from "./shared/navbar";
import Footer from "./shared/footer";
import { useState } from "react";

// Navbar component 'props' interface
interface Props {
  children: any;
  darkMode: boolean;
  toggleDarkMode?: any;
  scrollY: number;
  windowHeight: number;
}

const Layout = ({
  children,
  darkMode,
  toggleDarkMode,
  scrollY,
  windowHeight,
}: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenu = (value) => {
    setMobileMenu(value);
    const body = document.querySelector("body");
    if (value) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }

  return (
    <div
      className={`transition-colors duration-300 ${
        darkMode ? "dark" : ""
      } `}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollY={scrollY}
        windowHeight={windowHeight}
        mobileMenu={mobileMenu}
        setMobileMenu={handleMenu}
      ></Navbar>
      <main className="overflow-hidden">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
