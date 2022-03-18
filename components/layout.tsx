import Navbar from "./shared/navbar";
import Footer from "./shared/footer";
import { useEffect, useState } from "react";

// Navbar component 'props' interface
interface Props {
  children: any;
  darkMode: boolean;
  toggleDarkMode?: any;
  scrollY: number;
  windowHeight: number;
}

const Layout = ({ children, darkMode, toggleDarkMode, scrollY, windowHeight }: Props) => {
  return (
    <div
      className={`transition-colors duration-300	${
        darkMode ? "dark dark-back" : "bg-white"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollY={scrollY} windowHeight={windowHeight}></Navbar>
      <main className="overflow-hidden">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
