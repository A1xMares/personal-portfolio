import "../styles/global.css";
import { useEffect, useState, useRef } from "react";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [showedArea, setShowedArea] = useState([0, 0]);

  // Set event listeners and get default darkmode
  useEffect(() => {
    // Set scroll listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Set resize listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Manage darkmode
    let tempDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (!tempDarkMode) return;
    setDarkMode(tempDarkMode);
  }, []);

  useEffect(() => calculateArea(scrollY, windowHeight), [scrollY, windowHeight])

  // Store user's darkmode preference in localStorage
  useEffect(() => {
    if (darkMode === null) return;
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Track scroll from top
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Track resize event
  const handleResize = () => {
    const tempHeight =
      window.innerHeight || document.documentElement.clientHeight;
    setWindowHeight(tempHeight);
  };

  // Function to calculate displayed area
  const calculateArea = (scrollY, height) => {
    setShowedArea([scrollY, height]);
  };

  // Store user's darkmode preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Layout
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      scrollY={scrollY}
      windowHeight={windowHeight}
    >
      <Component
        {...pageProps}
        darkMode={darkMode}
        windowHeight={windowHeight}
        showedArea={showedArea}
      />
    </Layout>
  );
}
