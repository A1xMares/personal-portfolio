import Navbar from "./shared/navbar";
import Footer from "./shared/footer";
import { useEffect, useState, useRef } from "react";

// Navbar component 'props' interface
interface Props {
  children: any;
  darkMode: boolean;
  toggleDarkMode?: any;
  scrollY: number;
  windowHeight: number;
  handleScroll: any;
}

let listener = null;

const Layout = ({
  children,
  darkMode,
  toggleDarkMode,
  scrollY,
  windowHeight,
  handleScroll,
}: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const scrollable: any = useRef<HTMLDivElement>(null);

  // Set event listeners and get default darkmode
  useEffect(() => {
    if (!listener) {
      listener = scrollable.current.addEventListener("scroll", (e) =>
        handleScroll(e.target.scrollTop)
      );
    }
  }, []);

  return (
    <div
      className={`transition-colors duration-300 h-screen	${
        darkMode ? "dark dark-back" : "bg-white"
      } ${mobileMenu ? "overflow-hidden" : "overflow-x-hidden"}`}
      ref={scrollable}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollY={scrollY}
        windowHeight={windowHeight}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      ></Navbar>
      <main className="overflow-hidden">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
